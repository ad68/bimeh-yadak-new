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
    <section
      className={`relative flex h-full w-full rounded-[15px] bg-white p-8  shadow-[0px_18px_40px_0px_#77BBFF1F]`}
    >
      {(coloredParts.includes(6) || replacedParts.includes(23)) && (
        <span
          id="سقف"
          className="absolute left-[94px] top-[30px] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(5) || replacedParts.includes(22)) && (
        <span
          id="کاپوت"
          className="absolute left-[94px] top-[71px] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      <Image
        alt=""
        src="/assets/images/GroupCar2.png"
        width={500}
        height={500}
        className="h-auto w-full"
      />
    </section>
  );
}
