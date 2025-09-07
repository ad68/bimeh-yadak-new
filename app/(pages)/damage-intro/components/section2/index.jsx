"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <section className="mx-auto flex h-auto w-[90%] flex-col items-center rounded-[16px] bg-white px-6 pt-8 text-[#3E4151]  shadow-[0px_5px_22px_-8px_#0000001A] md:w-[80%] md:px-7 xl:h-[449px] xl:w-[1182px] xl:px-20">
      <h2 className="mb-8 text-lg font-semibold xl:text-[28px]">
        فرم اعلام خسارت
      </h2>
      <section className="mb-8 h-[1px] w-full bg-[#8B929A36]"></section>
      <section className="flex flex-col justify-start ">
        <section className="mb-[56px] flex items-start justify-start gap-2 md:px-7 xl:items-center">
          <Image
            src="/assets/icons/Ellipse.svg"
            width={8}
            height={8}
            className="mt-2 xl:mt-0"
            alt=""
          />
          <p className="text-justify text-sm leading-[27.64px] text-[#3E4151] xl:text-base ">
            شما می‌توانید با ثبت مشخصات فرد مورد نظر، لینک اعلام خسارت و
            عکس‌برداری از خودرو را برای ایشان ارسال کنید.
          </p>
        </section>
        <section className=" mx-auto mb-16 flex flex-col justify-center gap-[91px] text-sm leading-[24.18px] text-[#3E4151] md:mb-8 md:w-[55%] md:gap-8 xl:flex-row">
          <section className="flex flex-col gap-[2px] ">
            <span>نام</span>
            <input
              type="text"
              placeholder="نام را وارد کنید"
              className="w-full rounded-lg border border-solid  border-[#C2C2C2] py-[14px] pr-4 xl:w-[280px]"
            />
          </section>
          <section className="flex flex-col gap-[2px]">
            <span>نام‌ خانوادگی</span>
            <input
              type="text"
              placeholder="نام خانوادگی را وارد کنید"
              className="w-full rounded-lg border border-solid  border-[#C2C2C2] py-[14px] pr-4 xl:w-[280px]"
            />
          </section>
          <section className="flex flex-col gap-[2px]">
            <span>تلفن همراه</span>
            <input
              type="text"
              placeholder="+98 | 9xx xxx xxxx"
              className="ltr w-full rounded-lg border border-solid  border-[#C2C2C2] py-[14px] pl-4 xl:w-[280px]"
            />
          </section>
        </section>
        <button className="mx-auto mb-8 w-full self-end rounded-lg bg-[#0165E1] py-[10px] font-semibold text-white md:w-[55%] xl:mb-0 xl:w-[223px] xl:text-lg xl:leading-[27.9px] ">
          ارسال لینک
        </button>
      </section>
    </section>
  );
}
