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
      className={`relative col-span-2 flex h-full w-full rounded-[15px] bg-white p-2`}
    >
      {(coloredParts.includes(29) || replacedParts.includes(25)) && (
        <span
          id="گلگیر جلو"
          className="absolute left-[32%] top-[41%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(30) || replacedParts.includes(26)) && (
        <span
          id="گلگیر عقب"
          className="absolute right-[12%] top-[40%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(31) || replacedParts.includes(27)) && (
        <span
          id="درجلو"
          className="absolute left-[46%] top-[45%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(32) || replacedParts.includes(28)) && (
        <span
          id="در عقب"
          className="absolute right-[33%] top-[45%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      <Image
        alt=""
        src="/assets/images/GroupCar4.png"
        width={300}
        height={100}
        className="h-[100px] w-[300px]"
      />
    </section>
  );
}
