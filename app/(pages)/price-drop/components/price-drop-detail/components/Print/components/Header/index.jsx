import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
    <section className="flex h-[80px] w-full items-center justify-between px-2">
      <h3 className="p-2 text-center font-bold">
        فرم افت قیمت شرکت ایرانیان پوشش
      </h3>
      <Image
        className="mt-[-5px]"
        src="/assets/images/logo.svg"
        width={110}
        height={15}
        alt="LogoDesktop"
      />
    </section>
  );
}
