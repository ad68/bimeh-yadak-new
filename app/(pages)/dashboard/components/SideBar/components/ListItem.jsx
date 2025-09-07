import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ link, title, isActive }) {
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
    <Link href={link} className="mr-6 flex w-full items-center gap-[16px] ">

      <section className="w-2 h-2 rounded-full bg-[#c3b722]"></section>
      <span
        className={`${isActive ? "text-[#c3b722]" : "text-gray"}  w-[150px] text-sm dark:text-white`}
      >
        {title}
      </span>
    </Link>
  );
}
