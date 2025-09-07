"use client";
import React from "react";
import NegativeInqueryInputForm from "./components/NegativeInqueryInputForm";
import NegativeInqueryBg from "./components/NegativeInqueryBg";
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
  return (
    <>
      <section className="mb-6 flex  items-center gap-2 xl:mb-[40px]">
        <h2 className="text-base font-semibold text-[#505050] xl:text-[28px]">
          لیست استعلام
          <span className="mr-2 text-[28px] text-[#8B929A36]">|</span>
        </h2>
        <h2 className="text-sm font-semibold text-[#0165E1] xl:text-2xl">
          استعلام نمره منفی
        </h2>
      </section>
      <section className=" mx-auto w-full md:w-[80%] xl:flex xl:w-full xl:gap-[71px] xl:pl-[47px] xl:pr-6">
        <NegativeInqueryInputForm />
        <NegativeInqueryBg />
      </section>
    </>
  );
}
