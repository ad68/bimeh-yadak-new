"use client";
import React, { useEffect, useState } from "react";
import InquiryResult from "./components/InquiryResult";
import InquiryList from "./components/InquiryList";
import { useFetchWithToken } from "@/hooks";
import { api } from "@/api";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const [data, loading] = useFetchWithToken(api.inquiry.getResultHistory);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [sum, setSum] = useState(0);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="relative mb-6 flex items-center gap-2 xl:mb-[40px]">
        <h2 className="text-base font-semibold text-[#505050] xl:text-[28px]">
          لیست استعلام
          <span className="mr-2 text-[28px] text-[#8B929A36]">|</span>
        </h2>
        <h2 className="text-sm font-semibold text-[#0165E1] xl:text-2xl">نتایج خلافی با جزییات</h2>
      </section>
      <section className="flex h-auto w-full flex-col gap-8 xl:flex-row xl:gap-[24px]">
        <InquiryResult sum={sum} data={data.elements && data} />
        <InquiryList loading={loading} setSum={setSum} data={data.elements && data} />
      </section>
    </>
  );
}
