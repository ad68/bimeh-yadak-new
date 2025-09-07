"use client";
import React, { useEffect } from "react";
import PriceChart from "./components/PriceChart";
import PriceInfo from "./components/PriceInfo";
import { consoleLog_BlackGreen, consoleLog_BlackYellow, isObjEmpty } from "@/helper";
import { usePriceDropStore } from "@/store/tools/pricedrop";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const resultData = usePriceDropStore((state) => state.resultData);
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 h-[286px] w-full justify-between rounded-2xl bg-white px-8 py-10">
      <section className="w-[586px]">
        <h3 className="mb-6 text-xl font-semibold text-[#191919]">
          {resultData?.carName}
        </h3>
        <section>{resultData?.colorName}</section>
        <PriceInfo resultData={resultData} />
      </section>
      <section>
        {!isObjEmpty(resultData) && <PriceChart resultData={resultData} />}
      </section>
    </section>
  );
}
