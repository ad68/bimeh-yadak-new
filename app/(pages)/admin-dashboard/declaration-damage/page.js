"use client";
import React from "react";
import InputForm from "./components/InputForm";
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
      <h2 className="mb-[35px] text-base font-semibold xl:mb-[42px] xl:text-[28px]">
        اعلام خسارت
      </h2>
      <section className="mx-auto mb-[44px] md:w-[80%] xl:mb-0 xl:flex xl:w-full xl:gap-[66px] xl:px-[29px]">
        <InputForm />
        <section className="flex h-auto w-full flex-col xl:h-[681px] xl:w-[460px] ">
          <Image
            src="/assets/images/Group crash.svg"
            width={460}
            height={300}
            alt=""
            className="mx-auto mb-[24.68px] h-[152px] w-[60%] xl:mb-[56px] xl:mt-[106px] xl:h-[300px] xl:w-full"
          />
          <section className="w-full border-r-[2px] border-solid border-[#4E94EA] pr-2 text-justify text-sm leading-[24.18px] text-[#505050] xl:text-base xl:leading-[27.64px]">
            بعد از وقوع تصادف، چه مقصر حادثه باشید و چه زیان‌دیده، می‌توانید از
            خدمات خسارت آنلاین استفاده نمایید. همچنین با ثبت مشخصات فرد مورد نظر
            لینک اعلام خسارت و عکس برداری از خودرو برای ایشان ارسال خواهد شد.
          </section>
        </section>
      </section>
    </>
  );
}
