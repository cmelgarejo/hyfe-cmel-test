import SeesawChart from "@/components/SeesawChart";
import MotivationalMessage from "../MotivationalMessage";

export default function CoughDynamic({ value }: { value: number | undefined }) {
  return (
    <div className="p-4 w-screen">
      <div className="flex flex-row justify-between rounded-lg shadow-lg bg-white">
        <div className="p-4">
          <h1 className="pb-1 text-lg font-bold leading-6 text-zinc-800">Cough Dynamic</h1>
          <div className="text-xs text-slate-500/90">Last 24h comparing to the previous week</div>
          <MotivationalMessage value={value} />
        </div>
        <div className="w-1/2">
          <p
            style={{
              color: `var(${getHighlightColor("text", value)})`,
            }}
            className="text-3xl text-bold text-right mt-2 mr-4"
          >{`${value ?? "--"}%`}</p>
          <div className="mr-4">
            <SeesawChart value={value} highlightColor={`var(${getHighlightColor("chart", value)})`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function getHighlightColor(type: "text" | "chart", value: number | undefined): string {
  if (value === undefined) {
    return `--${type}-about-the-same`;
  }
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
