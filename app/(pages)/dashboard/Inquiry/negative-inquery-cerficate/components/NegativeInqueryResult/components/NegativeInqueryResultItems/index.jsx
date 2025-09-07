"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index(props) {
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
      <section className="mx-auto md:w-[80%]  h-[296px] w-[90%] rounded-xl bg-[#F6F6FB] p-4 xl:h-[304px] xl:w-[602px]">
        <section className="h-full w-full rounded-xl bg-white">
          <section className="flex gap-3 xl:gap-4 border-b border-solid border-[#F6F6FB] py-[18px] pr-4 shadow-[0px_19.74px_44.42px_-12.83px_#AAAAAA29] ">
            <Image
              src="/assets/icons/table icon.svg"
              width={28}
              height={28}
              alt=""
            />
            <h2 className="text-base xl:text-lg">نمره منفی</h2>
          </section>
          <section className=" p-4  text-xs xl:text-base">
            <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-3 xl:px-4">
              <span className="text-[#A6A9BD] ">شماره گواهینامه</span>
              <span className="text-[#3E4151]">{props.number}</span>
            </section>
            <section className="flex h-[48px] w-full  items-center justify-between rounded-lg px-4">
              <span className="text-[#A6A9BD] ">وضعیت گواهینامه </span>
              <span style={{color:props.color1}}   className="text-[#3E4151]">{props.status}</span>
            </section>
            <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
              <span className="text-[#A6A9BD] ">شناسه قانون</span>
              <span className="text-[#3E4151]">{props.id}</span>
            </section>
            <section className="flex h-[48px] w-full  items-center justify-between rounded-lg px-4">
              <span className="text-[#A6A9BD] ">مقدار نمره منفی</span>
              <span style={{color:props.color2}} className="text-[#3E4151]">{props.score}</span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
