import SeesawChart from "@/components/SeesawChart";
import { getMotivationalMessage, getHighlightColor } from "@/lib/util";

export default function CoughDynamic({ value }) {
  return (
    <div className="p-4 w-screen">
      <div className="flex flex-row justify-between rounded-lg shadow-lg bg-white">
        <div className="p-4">
          <h1 className="pb-1 text-lg font-bold leading-6 text-zinc-800">Cough Dynamic</h1>
          <div className="text-xs text-slate-500">Last 24h comparing to the previous week</div>
          <span className="pt-1 pb-1 pl-3 pr-3 mt-3 text-xs text-zinc-700 bg-[var(--motivational-text-bg)] rounded-full">
            {getMotivationalMessage(value)}
          </span>
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
