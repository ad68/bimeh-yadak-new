"use client";
import React from "react";
import NegativeInqueryResultBg from "../NegativeInqueryResultBg";
import NegativeInqueryResultItems from "../NegativeInqueryResultItems";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
   <section className="  w-full gap-8 h-auto flex flex-col xl:flex-row xl:gap-[24px]">
<NegativeInqueryResultItems number='9603251382' status='توقیف' id='0' score='30-' color1='#E14856' color2='#E14856'/>
<NegativeInqueryResultBg date='1401/01/12' number2='0012345678'/>
   </section>
  </>;
}