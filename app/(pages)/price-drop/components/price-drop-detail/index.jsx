"use client";
import React, { useEffect } from "react";
import Header from "./components/Header";
import CarInfoChart from "./components/CarInfoChart";
import DamagedPlace from "./components/DamagedPlace";
import Section3 from "./components/Section3";
import DamagedBody from "./components/DamagedBody";
import { Button } from '@/common'


import Print from './components/Print'
import { usePriceDropStore } from "@/store/tools/pricedrop";
import { isEmptyObject } from "@/helper";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ hideResultPanel }) {
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
    <>
      <section className="flex print:hidden flex-col gap-10 bg-[#F6F6FB]">
        <Header />
        <section className="mx-auto h-auto w-[1240px]">
          <section className="flex justify-end">
            <span className="text-blue cursor-pointer block mb-2" onClick={hideResultPanel}>بازگشت</span>
          </section>
          <CarInfoChart />
          <section className=" grid grid-cols-[801px_408px] justify-between ">
            <DamagedPlace
              title="اطلاعات مربوط به نقاط آسیب دیده"
            />
            <DamagedBody />
            <Section3 />
          </section>
        </section>
        <section className="flex print:hidden justify-center mb-[32px]">
          <Button onClick={() => window.print()}>چاپ</Button>
        </section>
      </section>

      {/*///////////////// print ///////////////////////*/}
      <section className="opacity-0 h-0 overflow-hidden  print:opacity-100 print:h-[270mm]  w-[180mm]  border rounded-md m-auto mt-[20px]">
        {!isEmptyObject(resultData) && <Print />}
      </section>

    </>
  );
}
