"use client";
import React from "react";
import InqueryResultWithNeg from "./components/InqueryResultWithNeg";
import InqueryResultWithoutNeg from "./components/InqueryResultWithoutNeg";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({number,status,id,score}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
  <section className="flex gap-2 items-center mb-6 xl:mb-[40px]">
    <h2 className="text-[#505050] font-semibold text-base xl:text-[28px]">لیست استعلام <span className="text-[#8B929A36] text-[28px] mr-2">|</span></h2>
    <h2 className="text-[#0165E1] text-sm xl:text-2xl font-semibold">استعلام نمره منفی</h2>
  </section>
 
  {/* <InqueryResultWithNeg /> */}
  <InqueryResultWithoutNeg />
  </>;
}