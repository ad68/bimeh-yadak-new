"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  platePart1,
  platePart2,
  platePart3,
  platePart4,
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
    <>
      <section className="mx-auto flex h-[48px] w-[219.93px] max-w-full rounded">
        <section className="flex  rounded-r  border-y-[0.4px] border-r-[0.4px] border-solid border-[#A6A9BD] ">
          <section className="flex h-full w-[43.79px] max-w-full items-center justify-center border-l-[0.4px] border-solid border-[#A6A9BD] ">
            {platePart1}
          </section>
          <section className=" flex h-full w-[143.3px]  items-center justify-center gap-2">
            <section className="mr-[11.3px]">{platePart2}</section>
            <section className="flex h-[32px] w-[52px]  items-center justify-center">
              {platePart3}
            </section>
            <section className="flex h-[32px]  w-[52px] items-center justify-center">
              {platePart4}
            </section>
          </section>
        </section>
        <Image
          src="/assets/images/plate.png"
          width={32.84}
          height={48.8}
          className=""
          alt=""
        />
      </section>
    </>
  );
}
