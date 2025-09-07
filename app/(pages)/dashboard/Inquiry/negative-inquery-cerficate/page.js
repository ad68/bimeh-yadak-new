"use client";
import React from "react";
import NegativeResult from "./components/NegativeInqueryResult";
import NegativeScore from "./components/NegativeScoreInquery";
import Link from "next/link";
import Image from "next/image";
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
    <section>
    <Link href={'../'} className="text-blue text-[12px] flex gap-1 items-center mb-2">
    <Image src={'/assets/icons/arrow-left.svg'} className="size-3 rotate-180" width={12} height={12} alt=""/>
    <section>بازگشت</section></Link>
      <NegativeScore />
    </section>
      {/* <NegativeResult /> */}
    </>
  );
}
