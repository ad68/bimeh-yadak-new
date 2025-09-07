"use client";
import { title } from "process";
import React from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title, border, resultData, textColor, field, type }) {
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
      <section className="flex h-full w-full flex-col items-center justify-center gap-2">
        <section
          className={` w-full border-b border-solid  border-[#E9EDF7] pb-4 text-center text-xs font-medium text-[#A3AED0]`}
        >
          <span
            className={`${border ? border : "block w-full  border-l border-solid border-[#E9EDF7]"}`}
          >
            {title}
          </span>
        </section>
        <section
          className={`${border ? border : " border-l border-solid border-[#E9EDF7]"} mt-4 flex h-[104px] w-full flex-col  gap-4 text-sm `}
        >
          {resultData?.defectDetails?.map((item, index) => (<span key={index}
            className={`text-center ltr  ${textColor ? textColor : "text-[#2B3674]"}`}
          >
            {type === "percent" ? "-" + Math.trunc(parseInt(item[field])) + "%" : item[field]}
          </span>))}


        </section>
      </section>
    </>
  );
}
