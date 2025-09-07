"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/common";
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
      <section className="mb-[48px] h-auto w-full rounded-lg pb-8 shadow-[-4px_-4px_4px_0px_#F6F6FBCC,4px_4px_12px_0px_#F6F6FBCC] md:px-[79px] xl:mb-0 xl:h-[528px] xl:w-[407px] xl:px-8 xl:pb-0">
        <section className=" mx-auto mb-8 flex w-[90%]  items-start gap-2 pt-8 text-justify leading-[27.64px] xl:w-full xl:px-8">
          {/* <Image
            src="/assets/icons/Ellipse.svg"
            width={8}
            height={8}
            className="mt-[12px]"
            alt=""
          /> */}
          <section className="w-3 h-2 rounded-full bg-primary mt-3"></section>
          <p className="leading-[27.64px] text-[#3E4151]">
            اطلاعات مربوط به صاحب گواهینامه را تکمیل نمایید.
          </p>
        </section>
        <form className="mx-auto  w-[85%] xl:w-[280px]">
          <section className="mb-8 flex w-full flex-col ">
            <span className="mb-[2px] text-[14px] font-normal">
              شماره گواهینامه
            </span>
            <input
              type="text"
              placeholder="شماره گواهینامه را وارد کنید"
              className=" max-w-full rounded-xl border-[1px] py-[14px] pl-[24px] pr-[16px] text-[14px] xl:w-[280px]"
            />
          </section>
          <section className="mb-8 flex w-full flex-col ">
            <span className="mb-[2px] text-[14px] font-normal">
              کد ملی صاحب گواهینامه
            </span>
            <input
              type="text"
              placeholder="کد ملی صاحب گواهینامه را وارد کنید"
              className=" max-w-full rounded-xl border-[1px] py-[14px] pl-[24px] pr-[16px] text-[14px] xl:w-[280px]"
            />
          </section>
          <section className="mb-8 flex w-full flex-col ">
            <span className="mb-[2px] text-[14px] font-normal">
              تلفن همراه صاحب گواهینامه
            </span>
            <input
              type="text"
              placeholder="+98 | 9xx xxx xxxx"
              className=" ltr max-w-full rounded-xl border-[1px] py-[14px] pl-[12px] pr-[16px] text-[14px] xl:w-[280px]"
            />
          </section>
          <section className="text-center">
            <Button className="mx-auto w-full max-w-full xl:w-[280px]">
              ثبت
            </Button>
          </section>
        </form>
      </section>
    </>
  );
}
