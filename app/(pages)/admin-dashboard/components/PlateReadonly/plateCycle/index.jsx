"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ platePart1, platePart2 }) {
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
    <section className="flex h-[48px] w-[219.93px] max-w-full rounded bg-white">
      <section className="flex  rounded-r  border-y-[0.4px] border-r-[0.4px] border-solid border-[#A6A9BD]  ">
        <section className="flex h-full w-[113.45px] items-center justify-center border-l-[0.4px] border-solid border-[#A6A9BD] ">
          {platePart1}
        </section>
        <section className="flex h-full w-[73.64px] items-center justify-center border-l-[0.4px] border-solid border-[#A6A9BD] ">
          {platePart2}
        </section>
      </section>
      <Image
        src="/assets/images/plate.png"
        width={33.4}
        height={48.8}
        className=""
        alt=""
      />
    </section>
  );
}
