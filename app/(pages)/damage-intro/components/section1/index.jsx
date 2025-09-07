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
      <Image
        src="/assets/images/shape.png"
        width={987}
        height={903}
        className="absolute right-[-60px] top-[63px] z-[-1] md:h-auto md:w-[70%] lg:top-[-26px] lg:h-[738px] lg:w-[778px] 2xl:top-[-98px] 2xl:h-[903px] 2xl:w-[987px]"
        alt=""
      />

      <section className="container mx-auto mb-[24px] flex flex-col justify-between xl:mb-[48px] xl:mt-[77px] xl:flex-row">
        <h2 className=" mx-auto mb-[57px] mt-[77px] w-[90%] text-xs  font-normal xl:hidden">
          آخرین به روز رسانی:&quotدیروز
        </h2>
        <section className=" order-last mx-auto flex w-[90%]  flex-col text-[#3E4151] xl:order-first xl:w-[542px]">
          <section className="hidden   gap-[0.3rem] pt-8 text-xs xl:flex">
            <a href="#">بیمه یدک</a>
            <span>/</span>
            <a href="#" className=" text-[#0165E1]">
              اعلام خسارت
            </a>
          </section>
          <h2 className="mb-[5.75rem] mt-5 hidden text-base font-normal xl:block">
            آخرین به روز رسانی: دیروز
          </h2>
          <section className=" order-last mx-auto flex w-[90%]  flex-col text-[#3E4151] md:w-[80%] xl:order-first xl:w-[542px] ">
            <section className="hidden items-center gap-[0.3rem] pt-8 text-xs xl:flex">
              <a href="#">بیمه یدک</a>
              <span>/</span>
              <a href="#" className="text-sm text-[#0165E1]">
                اعلام خسارت
              </a>
            </section>
            <h2 className="mb-[5.75rem] mt-5 hidden text-base font-normal xl:block">
              آخرین به روز رسانی: دیروز
            </h2>
            <h2 className="mb-6 text-[28px] font-bold md:text-[40px] xl:text-[40px]">
              اعلام خسارت
            </h2>
            <p className="mb-[48px] text-justify text-sm leading-[24.18px] xl:mb-0 xl:text-base xl:leading-[27.64px]">
              در صورتی که دچار حادثه رانندگی شده باشید، می‌توانید از خودروی خود
              به دو طریق کارشناسی انجام دهید: خودتان کارشناسی کنید یا درخواست
              اعزام کارشناس انجام دهید.
              <br />
              هم‌چنین در صورت وجود طرفین حادثه، شما می‌توانید از خودروی طرفین
              حادثه نیز عکس‌برداری نمایید در غیر این صورت می‌توانید لینک اعلام
              خسارت را برای ایشان ارسال نمایید. در این حالت لینک اعلام خسارت و
              کارشناسی از خودرو برای طرفین حادثه ارسال می‌شود و فرد مورد نظر
              می‌تواند با استفاده از آن نسبت به نحوه کارشناسی از خودروی خود
              تصمیم‌گیری نماید.
            </p>
          </section>
        </section>
        <Image
          src="/assets/images/Mask damage.png"
          width={681}
          height={400}
          alt=""
          className="mx-auto mb-3 h-[222px] w-[90%] xl:mt-[125px] xl:h-[400px] xl:w-[681px]"
        />
      </section>
    </>
  );
}
