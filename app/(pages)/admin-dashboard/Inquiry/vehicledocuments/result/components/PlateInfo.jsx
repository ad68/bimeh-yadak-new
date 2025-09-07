"use client";
import React from "react";
import Image from "next/image";
import PlateItemsCar from "./PlateItemsCar";

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
      <section className="mx-auto w-[95%] rounded-[12px] p-8 shadow-md xl:w-[407px] xl:shadow-xl">
        <section className="mb-[32px]">
          <Image
            src="/assets/images/dot.png"
            width={8}
            height={8}
            alt=""
            className="ml-1 inline"
          />
          <p className="inline text-justify text-[16px] font-normal">
            کدملی و شماره موبایل مالک پلاک زیر را ثبت نمایید.
          </p>
        </section>
        <PlateItemsCar
          platePart1="11"
          platePart2="863"
          platePart3="الف"
          platePart4="68"
        />
        <form className="">
          <span className="text-[14px] font-normal xl:pr-[40px]">
            کد ملی صاحب گواهینامه
          </span>
          <section className="mb-6 text-center">
            <input
              type="text"
              placeholder="کد ملی را وارد کنید"
              className="w-[95%] max-w-full rounded-xl border-[1px] py-[14px] pl-[24px] pr-[16px] text-[14px] xl:w-[280px]"
            />
          </section>
          <span className="text-[14px] font-normal xl:pr-[40px]">
            تلفن همراه صاحب گواهینامه
          </span>
          <section className=" text-center">
            <input
              type="text"
              placeholder="+98 | 9xx xxx xxxx"
              className="w-[95%] max-w-full rounded-xl border-[1px] py-[14px] pl-[24px] pr-[16px] text-[14px] xl:w-[280px]"
              dir="ltr"
            />
          </section>
          <section className="text-center">
            <button className="mx-auto mt-6 w-[95%] max-w-full rounded-xl bg-[#0165E1] px-[125px] py-[10px] text-center text-xl font-semibold text-white hover:bg-[#99C1F3] hover:text-[#0165E1] xl:w-[280px]">
              ثبت
            </button>
          </section>
        </form>
      </section>
    </>
  );
}
