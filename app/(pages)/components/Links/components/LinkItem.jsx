import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ img, title, href, comingSoon }) {
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
    <Link
      href={href}
      className="xl:w-[122px] w-[69px] flex justify-center m-auto hover:scale-105 transition-all duration-300 relative"
    >
      {comingSoon && <span className="absolute top-1 left-9 w-[50px] rounded-md text-[10px] p-1 bg-red text-white text-center z-[1]">به زودی</span>}
      <section className="flex flex-col justify-center items-center">

        <section className="hex">
          <section className="absolute top-[6px] left-[-10px] flex justify-center items-center rotate-[330deg] z-30 w-[67px] h-[67px]">
            <Image
              className="xl:w-[60px] w-[48px] h-[48px] xl:h-[60px] absolute z-50"
              src={img}
              alt=""
            />
          </section>
        </section>
        <span className="block text-center mt-[5px] min-w-[100px] xl:w-[130px] h-[80px] text-[12px] xl:text-[18px] leading-[31px] flex-wrap text-[#303030]">
          {title}
        </span>
      </section>
    </Link>
  );
}
