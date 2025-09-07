"use client";
import React from "react";
import Image from "next/image";
import InquiryRecordsItem from "./components/InquiryRecordsItem";
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
      <header className=" m-[24px] mb-6 text-[20px] font-semibold text-[#505050] xl:text-[28px]">
        سوابق استعلام
      </header>
      <section className="mx-auto flex h-[79px] w-[90%] items-center justify-between	rounded-xl bg-[url('/assets/images/ba.png')] bg-[length:100%_79px] bg-no-repeat px-4 text-white md:w-[80%] md:bg-[length:100%_79px] md:px-8 xl:w-[1009px] xl:bg-[length:1009px_79px] xl:px-8">
        <section>
          <span className="border-l-[1px] pl-2 text-[12px] font-normal md:text-[16px] xl:pl-4 xl:text-[20px] xl:font-semibold">
            مجموع تراکنش‌ها
          </span>
          <span className="pr-2 text-[12px] font-normal xl:pr-4 xl:text-[16px] xl:font-semibold">
            10 مورد
          </span>
        </section>
        <span className="text-[14px] font-normal md:text-xl xl:text-[24px] xl:font-semibold">
          12,340,000 ریال
        </span>
      </section>

      <section className="relative mx-auto mb-6 mt-10 flex w-[90%] gap-2 md:w-[80%] xl:w-full xl:justify-between ">
        <input
          type="text"
          placeholder="جستجو کنید"
          className=" h-[48px] w-full rounded-[160px] p-[12px] pr-[40px] shadow-xl  xl:w-[324px]"
        />
        <Image
          src="/assets/images/search.png"
          width={24}
          height={24}
          className="absolute right-[12px] top-[50%] translate-y-[-50%]"
          alt=""
        />

        <section className="flex h-12 rounded-xl bg-[#4E94EA] p-[12px] text-white xl:w-[88px] xl:rounded-[20px]">
          <span className="hidden xl:block">فیلتر</span>
          <Image
            src="/assets/images/filter.png"
            width={24}
            height={24}
            alt=""
          />
        </section>
      </section>
      <section className="mx-auto grid gap-3 md:w-[90%] xl:gap-[16px]">
        <InquiryRecordsItem
          tilte="خلافی خودرو"
          date="00/08/15"
          plate="ایران 40-9843 م 59"
          price="52.000 ریال"
        />
        <InquiryRecordsItem
          tilte="وضعیت گواهینامه"
          date="00/08/15 "
          plate=" کد ملی 0023845010 "
          price="52.000 ریال"
        />
        <InquiryRecordsItem
          tilte="مالیات نقل و انتقال خودرو"
          date="00/08/15 "
          plate="ایران 40-9843 م 59"
          price="52.000 ریال"
        />
        <InquiryRecordsItem
          tilte="نمره منفی گواهینامه"
          date="00/08/15 "
          plate=" کد ملی 0023845010 "
          price="52.000 ریال"
        />
        <InquiryRecordsItem
          tilte="وضعیت مدارک خودرو"
          date="00/08/15 "
          plate="ایران 40-9843 م 59"
          price="52.000 ریال"
        />
      </section>
      <Image
        src="/assets/images/slider.png"
        width={194}
        height={32}
        alt="slider"
        className="mx-auto mt-7 hidden xl:block"
      />
    </>
  );
}
