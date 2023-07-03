"use client"; // it is a client-side component
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
  ReferenceDot,
  // Customized,
  // Polygon,
} from "recharts";

export default function SeesawChart({ value, highlightColor }: { value: number | undefined; highlightColor: string }) {
  const p1 = { x: -30, y: 0 };
  const p2 = { x: 30, y: 0 };
  const center = { x: 0, y: 0 };

  if (value !== undefined) {
    if (value >= 100) {
      p1.y = -30;
      p2.y = 30;
    } else if (value >= 50) {
      p1.y = -15;
      p2.y = 15;
    } else if (value >= 0) {
      p1.y = 0;
      p2.y = 0;
    } else if (value >= -50) {
      p1.y = 15;
      p2.y = -15;
    } else if (value >= -100) {
      p1.y = 30;
      p2.y = -30;
    }
  }

  const data = [p1, center, p2];

  return (
    <ResponsiveContainer width="100%" height={66}>
      <LineChart data={data}>
        <YAxis domain={[-50, 50]} hide />
        <CartesianGrid
          strokeDasharray={8}
          horizontal={true}
          vertical={false}
          strokeOpacity={1}
          fill="var(--chart-bg)"
        />
        <Line
          type="monotone"
          dataKey="y"
          strokeLinecap="round"
          stroke={highlightColor}
          strokeWidth={8}
          strokeOpacity={0.8}
          dot={false}
        />
        <ReferenceDot fill="white" stroke="black" x={1} y={0} r={4} />
        {/* <Customized>
          <Polygon points={[p1, center, p2]} fill="white" stroke="black" strokeWidth={1} />
        </Customized> */}
      </LineChart>
    </ResponsiveContainer>
  );
}
