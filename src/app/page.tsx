"use client";
import { useEffect, useState } from "react";
import { fetchCoughData } from "@/lib/util";
import Header from "@/components/Header";
import CoughDynamic from "@/components/CoughDynamic";

export default function Home() {
  const [coughPercentage, setCoughPercentage] = useState();

  // To initialize the cough chart
  useEffect(() => {
    fetchCoughData(setCoughPercentage);
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Header />
      <CoughDynamic value={coughPercentage} />
      <button
        className="rounded-[50px] text-blue-500 font-bold py-2 px-4 border border-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white"
        onClick={() => fetchCoughData(setCoughPercentage)}
      >
        Refresh
      </button>
      <button
        className="absolute bottom-0 right-0 rounded-[50px] text-blue-500 font-bold py-2 px-4 border border-blue-500 hover:border-transparent hover:bg-blue-500 hover:text-white"
        onClick={() => {
          //set a random value between -100 and 100
          setCoughPercentage(Math.floor(Math.random() * 200) - 100);
        }}
      >
        🎲Random value
      </button>
    </main>
  );
}
