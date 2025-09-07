import React from "react";
import Image from "next/image";

//
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
    <section className=" mt-[37px] max-w-full rounded-[12px] p-[32px]  shadow-[-4px_-4px_4px_0px_#F6F6FBCC,4px_4px_12px_0px_#F6F6FBCC] md:px-[79px] md:py-8 xl:mr-6 xl:h-[416px] xl:w-[407px] xl:px-8">
      <section className="mb-8 flex items-start gap-2">
        <Image
          src="/assets/icons/Ellipse.svg"
          width={8}
          height={8}
          className="mt-[12px]"
          alt=""
        />
        <p className="leading-[27.64px] text-[#3E4151]">
          برای مشاهده وضعیت گواهینامه اطلاعات ذیل را تکمیل نمایید.
        </p>
      </section>
      <form className="">
        <span className="text-[14px] font-normal xl:pr-[40px]">
          کد ملی صاحب گواهینامه
        </span>
        <section className="mb-6 text-center">
          <input
            type="text"
            placeholder="کد ملی صاحب گواهینامه را وارد کنید"
            className="w-full max-w-full rounded-xl border-[1px] py-[14px] pl-[24px] pr-[16px] text-[14px] xl:w-[280px]"
          />
        </section>
        <span className="text-[14px] font-normal xl:pr-[40px]">
          تلفن همراه صاحب گواهینامه
        </span>
        <section className=" text-center">
          <input
            type="text"
            placeholder="+98 | 9xx xxx xxxx"
            className="w-full max-w-full rounded-xl border-[1px] py-[14px] pl-[24px] pr-[16px] text-[14px] xl:w-[280px]"
            dir="ltr"
          />
        </section>
        <section className="text-center">
          <button className="mx-auto mt-6 w-full max-w-full rounded-xl bg-[#0165E1] px-[125px] py-[10px] text-center text-xl font-semibold text-white hover:bg-[#99C1F3] hover:text-[#0165E1] xl:w-[280px]">
            ثبت
          </button>
        </section>
      </form>
    </section>
  );
}
