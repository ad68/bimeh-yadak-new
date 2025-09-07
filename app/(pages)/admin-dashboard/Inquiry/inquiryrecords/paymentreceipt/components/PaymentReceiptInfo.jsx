"use client";
import React from "react";
import Image from "next/image";
import ReceiptInfo from "./ReceiptInfo";
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
      <section className="mx-auto flex w-full flex-col py-[32px] xl:w-[383px] xl:rounded-[12px] xl:border-[1px]">
        <Image
          src="/assets/images/Group 1000006405.png"
          width={306}
          alt=""
          height={200}
          className="mx-auto mb-12 hidden xl:block"
        />
        <ReceiptInfo />
        <button className="mx-auto hidden w-[280px] rounded-lg bg-[#0165E1] py-[10px] text-[18px] font-bold text-white xl:block">
          چاپ رسید
        </button>
      </section>
    </>
  );
}
