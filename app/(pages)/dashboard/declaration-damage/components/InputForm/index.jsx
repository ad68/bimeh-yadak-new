"use client";
import React from "react";
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
      <section className="h-auto pb-8 xl:pb-0  mb-[48px] xl:mb-0 rounded-lg shadow-[-4px_-4px_4px_0px_#F6F6FBCC,4px_4px_12px_0px_#F6F6FBCC] xl:h-[560px] xl:w-[407px] xl:px-[48px] md:px-[79px] md:py-[32px]">
        <section className=" mb-6 xl:pt-0 flex items-start gap-2 xl:w-full w-[90%] mx-auto pt-8 text-justify leading-[27.64px] ">
          <Image
            src="/assets/icons/Ellipse.svg"
            width={8}
            height={8}
            className="mt-[12px]"
            alt=""
          />
          <p className="leading-[27.64px] text-[#3E4151]">
            با ثبت کردن مشخصات فرد مورد نظر، لینک اعلام خسارت و عکس‌برداری از
            خودرو برای ایشان ارسال خواهد شد.{" "}
          </p>
        </section>
        <form className="w-[85%]  xl:w-[280px] mx-auto">
          <section className="mb-8 flex flex-col w-full ">
            <span className="text-[14px] font-normal mb-[2px]">نام</span>
            <input
              type="text"
              placeholder="نام را وارد کنید"
              className=" max-w-full rounded-xl border-[1px] py-[14px] pl-[24px] pr-[16px] text-[14px] xl:w-[280px]"
            />
          </section>
          <section className="mb-8 flex flex-col w-full ">
            <span className="text-[14px] font-normal mb-[2px]">نام خانوادگی</span>
            <input
              type="text"
              placeholder="نام خانوادگی را وارد کنید"
              className=" max-w-full rounded-xl border-[1px] py-[14px] pl-[24px] pr-[16px] text-[14px] xl:w-[280px]"
            />
          </section>
          <section className="mb-8 flex flex-col w-full ">
            <span className="text-[14px] font-normal mb-[2px]">تلفن همراه</span>
            <input
              type="text"
              placeholder="+98 | 9xx xxx xxxx"
              className=" max-w-full ltr rounded-xl border-[1px] py-[14px] pl-[12px] pr-[16px] text-[14px] xl:w-[280px]"
            />
          </section>
          <section className="text-center">
            <button className="mx-auto mt-6 w-full leading-[27.9px] max-w-full rounded-xl bg-[#0165E1] py-[10px] text-center text-lg font-bold text-[#FFFFFF] xl:w-[280px]">
            ارسال لینک اعلام خسارت
            </button>
          </section>
        </form>
      </section>
    </>
  );
}
