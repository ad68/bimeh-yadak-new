"use client";
import React, { useState } from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title }) {
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
      <section className="mx-auto flex h-[48px] w-full max-w-full items-center justify-between gap-[11px] rounded-[10px] border border-solid border-[#8B929A36] pl-[8.55px] pr-3 xl:w-[279px] ">
        <span className="text-xs leading-[20.73px] text-[#9295A9]">
          {title}
        </span>
        <Image
          alt=""
          src="/assets/icons/arrow-left.svg"
          width={12}
          height={12}
        />
      </section>
    </>
  );
}
