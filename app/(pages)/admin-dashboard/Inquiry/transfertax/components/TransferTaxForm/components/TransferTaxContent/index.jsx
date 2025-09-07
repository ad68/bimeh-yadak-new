"use client";
import React from "react";
import PlateCar from "../../../../../../components/PlateReadonly/plateCar";
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
      <section className="mb-12  mt-[37px] flex max-w-full flex-col items-center rounded-xl p-8 shadow-[-4px_-4px_4px_0px_#F6F6FBCC,4px_4px_12px_0px_#F6F6FBCC] md:px-[79px] xl:mb-0 xl:mr-6 xl:h-[681px] xl:w-[407px] xl:px-6 ">
        <section className="mx-auto mb-8 flex w-[90%] items-start gap-2">
          <Image
            src="/assets/icons/Ellipse.svg"
            width={8}
            height={8}
            className="mt-[12px]"
            alt=""
          />
          <p className="leading-[27.64px] text-[#3E4151]">
            کدملی و شماره موبایل مالک پلاک زیر را ثبت نمایید.
          </p>
        </section>
        <section className="mb-8 flex flex-col items-end">
          <button className="mb-[2px] text-xs text-[#4E94EA] ">
            ویرایش پلاک
          </button>
          <PlateCar
            platePart1="11"
            platePart2="863"
            platePart3="الف"
            platePart4="68"
          />
        </section>
        <section className="mx-auto mb-8 flex w-[90%] max-w-full flex-col  items-center xl:mb-[181px] xl:w-[280px]">
          <span className="mb-[2px] mr-1  self-start text-sm leading-[24.18px] text-[#3E4151]">
            کد ملی
          </span>
          <input
            type="text"
            className="mb-8 h-12 w-full rounded-lg border border-solid border-[#C2C2C2] pr-4 text-sm xl:mb-[45px] xl:w-[280px]"
            placeholder="کد ملی مالک را وارد کنید"
          />
          <span className="mb-[2px] mr-1 self-start  text-sm leading-[24.18px] text-[#3E4151]">
            تاریخ تولد مالک
          </span>
          <input
            type="text"
            className="ltr h-12 w-full rounded-lg border border-solid border-[#C2C2C2] pl-4 text-sm xl:w-[280px]"
            placeholder="+98 | 9xx xxx xxxx"
          />
        </section>

        <button className=" mx-auto mb-8 w-[90%] rounded-lg bg-[#0165E1] py-[10px] text-lg font-semibold leading-[27.9px] text-white xl:mb-6  xl:gap-[73px] ">
          ثبت
        </button>
      </section>
    </>
  );
}
