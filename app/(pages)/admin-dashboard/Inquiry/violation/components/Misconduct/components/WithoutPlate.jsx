"use client";
import React, { useState } from "react";
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
      <section className="flex h-[168px]  xl:w-[280px] max-w-full flex-col items-center justify-center gap-[11px] rounded-xl border border-dashed border-[#A6A9BD]">
        <Image
          src="/assets/icons/search-plate.svg"
          width={74}
          height={44.5}
          alt=""
          className="mt-[48.5px]"
        />
        <p className="text-center text-xs leading-[20.73px] text-[#9295A9] lg:text-start">
          شما تاکنون استعلامی انجام نداده‌اید.
        </p>
      </section>
    </>
  );
}
