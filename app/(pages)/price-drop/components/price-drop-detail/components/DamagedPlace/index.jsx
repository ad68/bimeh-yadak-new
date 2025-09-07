"use client";
import React from "react";
import InfoCarDetail from './components/InfoCarDetail'
import { usePriceDropStore } from "@/store/tools/pricedrop";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title }) {
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
    <section className="mt-4 flex h-[334px]  w-[801px] justify-between rounded-2xl bg-white px-8 py-10">
      <section className="w-full rounded-[15px] py-4 shadow-[0px_18px_40px_0px_#77BBFF1F]">
        <h3 className="mb-6 text-center text-xl font-semibold text-[#191919]">
          {title}
        </h3>
        <section className="mt-2 flex h-[176px]  w-full overflow-scroll">
          <InfoCarDetail resultData={resultData} title="ناحیه" field="parameter" />
          <InfoCarDetail
            resultData={resultData}
            title="نوع آسیب"
            field="info"

          />
          <InfoCarDetail resultData={resultData} type="percent" textColor="text-[#D90000]" title="درصد کاهش" field="percent" />
          {/*  <InfoCarDetail
            resultData={resultData}
            title="مقدار کاهش"
            section="    1.700.000- /  23%-"
            textColor="text-[#D90000]"
            border="border-none"
          /> */}
        </section>
      </section>
    </section>
  );
}
