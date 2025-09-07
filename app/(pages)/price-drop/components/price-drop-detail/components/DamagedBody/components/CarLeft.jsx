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
      className={`relative col-span-2 flex h-full w-full rounded-[15px] bg-white p-8  shadow-[0px_18px_40px_0px_#77BBFF1F]`}
    >
      {(coloredParts.includes(29) || replacedParts.includes(25)) && (
        <span
          id="گلگیر جلو"
          className="absolute left-[130px] top-[75px] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(30) || replacedParts.includes(26)) && (
        <span
          id="گلگیر عقب"
          className="absolute right-[80px] top-[70px] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(31) || replacedParts.includes(27)) && (
        <span
          id="درجلو"
          className="absolute right-[221px] top-[83px] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(32) || replacedParts.includes(28)) && (
        <span
          id="در عقب"
          className="absolute right-[150px] top-[83px] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      <Image
        alt=""
        src="/assets/images/GroupCar4.png"
        width={500}
        height={500}
        className="h-auto w-full"
      />
    </section>
  );
}
