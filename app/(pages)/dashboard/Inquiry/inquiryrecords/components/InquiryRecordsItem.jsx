"use client";
import React from "react";
import Image from "next/image";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ tilte, date, plate, price }) {
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
      <section className="mx-auto flex h-[122px] w-[90%] justify-between rounded-xl p-4 shadow-lg md:px-6 xl:h-[126px] xl:w-full xl:px-6 xl:py-4">
        <section className="grid gap-1 xl:gap-3">
          <span className="text-[14px] font-normal xl:text-base">
            <Image
              alt=""
              src="/assets/images/table icon.png"
              width={28}
              height={28}
              className="ml-[8px] inline xl:ml-3"
            />{" "}
            {tilte}{" "}
          </span>
          <span className="text-[12px] font-normal text-[#9295A9] xl:text-[14px]">
            {date}{" "}
          </span>
          <span className="text-[12px] font-normal text-[#9295A9] xl:text-[14px]">
            {plate}
          </span>
        </section>
        <section className="grid grid-rows-2 justify-items-end gap-[36px]">
          <Image
            src="/assets/images/arrow-down.png"
            alt=""
            width={24}
            height={24}
            className="size-[20px] xl:size-6"
          />
          <span className="flex items-center justify-center rounded-lg bg-[#F6F6FB] p-2 text-[14px] font-semibold  xl:text-[16px]">
            {price}
          </span>
        </section>
      </section>
    </>
  );
}
