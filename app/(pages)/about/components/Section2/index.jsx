"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title, text, src, position, titlePositin }) {
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
      <section className="mx-auto my-[80px] h-[384.39px] w-[1141px]">
        <h2 className={`${titlePositin} mb-3 px-28 text-[32px] text-[#3e3e3e]`}>
          {title}
        </h2>
        <section
          className={`flex h-[330px] w-full items-center justify-between rounded-[15px] bg-[#f7f7f7] px-[50px] leading-[35px]`}
        >
          <section
            className={`${position}  w-[45%]  text-justify  text-[#4c4c4c]`}
          >
            {text}
          </section>
          <Image
            alt=""
            src={src}
            width={450}
            height={400}
            className="mt-[-150px] rounded-[5px]"
          />
        </section>
      </section>
    </>
  );
}
