"use client";
import { title } from "process";
import React from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ price, title, bgColor, border }) {
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
      <section
        className={`  flex h-full w-full flex-col items-center justify-center gap-2  `}
      >
        <section className="flex  items-center gap-2 text-xs font-medium text-[#A3AED0]">
          <span className={`h-2 w-2 rounded-full ${bgColor}`}></span>
          {title}
        </section>
        <section
          className={`${border ? border : "border-l   border-solid border-[#E9EDF7]"} flex w-full flex-col items-center `}
        >
          {price}
          <span className="text-xs font-medium text-[#2B3674]">تومان</span>
        </section>
      </section>
    </>
  );
}
