import { format, startOfDay, subDays, subHours } from "date-fns";
import { EventsService, Event } from "@/generated/openapi-client";

function sumCoughs(cur: number, acc: Event) {
  return cur + acc.coughs;
}

// fetchCoughData gets the cough data from the server and calculates the cough percentage
// cough percentage is the percentage of coughs in the last day compared to the last week
// then normalized to be between -100 and 100, after that, use the callback fnSetCoughPercentage
export async function fetchCoughData(fnSetCoughPercentage: Function) {
  // get date 24 hours ago
  const last24h = format(subHours(new Date(), 24), "yyyy-MM-dd H:mm:ss");
  // get date one week from today, at the start of that day
  const oneWeekAgo = format(startOfDay(subDays(new Date(), 7)), "yyyy-MM-dd");
  const weeklyCoughs = await EventsService.getEvents("day", oneWeekAgo);
  const dailyCoughs = await EventsService.getEvents("hour", last24h);
  // console.log("last24h:", last24h);
  // console.log("oneWeekAgo:", oneWeekAgo);
  // console.log("weeklyCoughs:", weeklyCoughs);
  // console.log("dailyCoughs:", dailyCoughs);
  if (dailyCoughs.length === 0) {
    console.warn("not enough 24h data");
    fnSetCoughPercentage(0);
  }
  // the ternary avoids division by zero if the data array is empty
  const weeklyCoughSum = weeklyCoughs.length === 0 ? 1 : weeklyCoughs.reduce(sumCoughs, 0);
  const dailyCoughSum = dailyCoughs.reduce(sumCoughs, 0);
  const coughsPercentage = Math.ceil((dailyCoughSum * 100) / weeklyCoughSum - 100);
  // if the percentage is above 100, lets cap it too +/-100
  const normalized = coughsPercentage < -100 ? -100 : coughsPercentage > 100 ? 100 : coughsPercentage;
  // console.log("weeklyCoughSum:", weeklyCoughSum);
  // console.log("dailyCoughSum:", dailyCoughSum);
  // console.log("cough % raw:", coughsPercentage);
  // console.log("cough % normalzied:", normalized);
  fnSetCoughPercentage(normalized);
}

export function getHighlightColor(type: "text" | "chart", value: number) {
  if (value >= 50) {
    return `--${type}-getting-worse`;
  } else if (value >= 10) {
    return `--${type}-somewhat-worse`;
  } else if (value >= -10) {
    return `--${type}-about-the-same`;
  } else if (value >= -50) {
    return `--${type}-somewhat-better`;
  } else {
    return `--${type}-much-better`;
  }
}

export function getMotivationalMessage(value: number) {
  if (value >= 50) {
    return "😔 It’s getting worse";
  } else if (value >= 10) {
    return "😔 Somewhat worse";
  } else if (value >= -10) {
    return "😐 About the same";
  } else if (value >= -50) {
    return "🙂 Somewhat better";
  } else {
    return "😃 Much better";
  }
}
