"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { consoleLog_BlackOrange, consoleLog_Blue } from "@/helper";
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
      className={`relative col-span-2 flex h-full w-full rounded-[15px] bg-white p-2 `}
    >
      {/*   <span id="ستون" className="w-[10px] h-[10px] bg-red rounded-full block absolute top-[70px] left-[175px] shadow-xl shadow-rose-600"></span>
            <span id="رکاب" className="w-[10px] h-[10px] bg-red rounded-full block absolute top-[111px] left-[182px] shadow-xl shadow-rose-600"></span> */}
      {(coloredParts.includes(1) || replacedParts.includes(18)) && (
        <span
          id="گلگیر جلو"
          className="absolute right-[26%] top-[40%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(2) || replacedParts.includes(19)) && (
        <span
          id="گلگیر عقب"
          className="absolute left-[20%] top-[40%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(3) || replacedParts.includes(20)) && (
        <span
          id="درجلو"
          className="absolute left-[61%] top-[45%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      {(coloredParts.includes(4) || replacedParts.includes(21)) && (
        <span
          id="در عقب"
          className="absolute left-[41%] top-[45%] block h-[10px] w-[10px] rounded-full bg-red shadow-xl shadow-rose-600"
        ></span>
      )}
      <Image
        alt=""
        src="/assets/images/GroupCar1.png"
        width={300}
        height={100}
        className=" h-[100px] w-[300px]"
      />
    </section>
  );
}
