"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ coloredParts, replacedParts }) {
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
    <section className={`relative  flex h-full rounded-[15px] bg-white p-2`}>
      {(coloredParts.includes(6) || replacedParts.includes(23)) && (
        <span
          id="سقف"
          className="absolute left-[47%] top-[5%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl"
        ></span>
      )}
      {(coloredParts.includes(5) || replacedParts.includes(22)) && (
        <span
          id="کاپوت"
          className="absolute left-[47%] top-[44%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl "
        ></span>
      )}
      <Image
        alt=""
        src="/assets/images/GroupCar2.png"
        width={200}
        height={100}
        className="h-[110px] w-[160px]"
      />
    </section>
  );
}
