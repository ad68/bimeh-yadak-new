"use client";
import React from "react";
import PaymentReceiptBg from "./components/PaymentReceiptBg";
import PaymentReceiptInfo from "./components/PaymentReceiptInfo";
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
      <section className="w-full ">
        <header className="flex">
          <h2 className="border-l-[2px] pl-2 text-[16px] xl:text-[28px] font-semibold text-[#505050] mb-6 xl:mb-10">
            سوابق استعلام
          </h2>
          <h2 className="pr-2 text-[14px] xl:text-[24px] font-semibold text-[#0165E1]">
            رسید پرداخت
          </h2>
        </header>
        <section className="hidden xl:flex xl:gap-[24px]">
          <PaymentReceiptBg />
          <PaymentReceiptInfo />
        </section>
        <section className="grid xl:hidden">
          <PaymentReceiptInfo />
          <PaymentReceiptBg />
        </section>
      </section>
    </>
  );
}
