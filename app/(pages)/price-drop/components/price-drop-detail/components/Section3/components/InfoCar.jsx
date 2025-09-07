"use client";
import React from "react";
import InfoCarDetail from "./InfoCarDetail";

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
    <section className="flex h-full w-full rounded-[15px] shadow-[0px_18px_40px_0px_#77BBFF1F]">
      <InfoCarDetail
        price="325.000.000"
        title="مجموع درصد"
        bgColor="bg-[#D90000]"
      />
      <InfoCarDetail
        price="325.000.000"
        title="مجوع قیمت کسر شده"
        bgColor="bg-[#6AD2FF]"
      />
      <InfoCarDetail
        border="border-none"
        price="325.000.000"
        title="قیمت نهایی"
        bgColor="bg-[#00FF3A]"
      />
    </section>
  );
}
