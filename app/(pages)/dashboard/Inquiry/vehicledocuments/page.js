"use client";
import React from "react";
import PlateInfo from "./components/PlateInfo";
import MisconductBg from "./components/MisconductBg";
import Link from "next/link";
import Image from "next/image";


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
    <>
      <section className="w-full ">
      <Link href={'../'} className="text-blue text-[12px] flex gap-1 items-center mb-2">
    <Image src={'/assets/icons/arrow-left.svg'} className="size-3 rotate-180" width={12} height={12} alt=""/>
    <section>بازگشت</section></Link>
        <header className="m-[24px] xl:mb-10 flex items-center gap-2">
          <h2 className="text-[16px] font-semibold text-[#505050] xl:text-[28px]">
            لیست استعلام
          </h2>
          <section className="h-8 w-[1px] bg-[#8B929A36]"></section>
          <h2 className="text-[14px] font-semibold text-primary xl:text-2xl">
            استعلام مدارک خودرو
          </h2>
        </header>
        <section className="grid gap-[48px] xl:flex w-full xl:gap-[71px] xl:px-12 mx-auto">
          <PlateInfo />
          <MisconductBg />
       
        </section>
      </section>
    </>
  );
}
