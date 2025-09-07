import Image from "next/image";
import React from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  src,
  badge,
  title,
  currentFilter,
  filter,
  setActiveFilter,
}) {
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
    <section className="cursor-pointer" onClick={() => setActiveFilter(filter)}>
      <section
        className={`relative flex h-[84px] w-[84px] items-center  justify-center rounded-[10px] border ${filter === currentFilter ? "border-[#0165E1] shadow-[0px_2px_6px_0px_#0165e14d]" : "border-[#0165E1]"}`}
      >
        <span className="absolute right-[-10px] top-[-10px] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-blue text-white">
          {badge ? badge : 0}
        </span>
        <Image src={src} alt="" width={50} height={50} quality={100} />
      </section>
      <span className="mt-[24px] block text-center text-sm font-semibold text-blue">
        {title}
      </span>
    </section>
  );
}
