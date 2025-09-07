import React from "react";
import Info from "./components/Info";
import CheckStatus from "./components/CheckStatus";
//
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
      <section className="flex items-center gap-2 mx-6 xl:mx-0">
        <h2 className="text-[16px] font-semibold text-[#505050]  xl:text-[28px] ">
          لیست استعلام
        </h2>
        <section className="h-8 w-[1px] bg-[#8B929A36]"></section>
        <h2 className="text-[14px] font-semibold text-[#0165E1] xl:text-2xl ">
          استعلام وضعیت گواهینامه
        </h2>
      </section>
      <section className="grid gap-[32px] md:px-[41px] xl:flex xl:gap-[71px]  max-w-full">
        <CheckStatus />
        <Info />
      </section>
    </>
  );
}
