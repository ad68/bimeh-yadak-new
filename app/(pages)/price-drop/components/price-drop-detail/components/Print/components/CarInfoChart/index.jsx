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
    <section className="h-[300px] justify-between rounded-2xl bg-white px-8">
      <section className="border rounded-md h-[80px] flex justify-between items-center px-5">
        <section className="w-[100px]">
          <span className="block text-[14px] font-bold text-[#191919]">
            {resultData?.carName}
          </span>
          <span className="block text-[13px]">{resultData?.colorName}</span>
        </section>
        <PriceInfo resultData={resultData} />
      </section>
      <section className="border mt-2 rounded-md h-[40px] grid grid-cols-3 items-center text-[10px] px-5">
        <section className="flex gap-1 justify-center">
          <span>مجموع درصد افت:</span>
          <span className="font-semibold">35%</span>
        </section>
        <section className="flex gap-1 justify-center">
          <span>مجموع قیمت کسر شده:</span>
          <span className="font-semibold">3,500,000 تومان</span>
        </section>
        <section className="flex gap-1 justify-center">
          <span>قیمت نهایی:</span>
          <span className="font-semibold">325,000,000 تومان</span>
        </section>
      </section>
      <section className="flex justify-center">

        {!isObjEmpty(resultData) && <PriceChart resultData={resultData} />}
      </section>
    </section>
  );
}
