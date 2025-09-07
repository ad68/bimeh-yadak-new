"use client";
import React from "react";
import ResalultTaxBg from "./ResalultTaxBg";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index(props) {
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
      <section className="mb-6 flex  items-center gap-2 xl:mb-[40px]">
        <h2 className="text-base font-semibold text-[#505050] xl:text-[28px]">
          لیست استعلام
          <span className="mr-2 text-[28px] text-[#8B929A36]">|</span>
        </h2>
        <h2 className="text-sm font-semibold text-[#0165E1] xl:text-2xl">
          نتایج استعلام مالیات نقل و انتقال
        </h2>
      </section>
      <section className=" mx-auto  mb-[112px] flex w-full flex-col xl:mb-0 xl:w-full  xl:flex-row xl:justify-between xl:gap-[24px] ">
        <section className="mx-auto h-auto w-full rounded-xl bg-[#F6F6FB] p-4 md:w-[90%] xl:h-[561px] xl:w-[602px]">
          <section className="h-full w-full rounded-xl bg-white">
            <section className="flex gap-3 border-b border-solid border-[#F6F6FB] py-[18px] pr-4 shadow-[0px_19.74px_44.42px_-12.83px_#AAAAAA29] xl:gap-4 ">
              <Image
                src="/assets/icons/table icon.svg"
                width={28}
                height={28}
                alt=""
              />
              <h2 className="text-base xl:text-lg">مالیات نقل و انتقال </h2>
            </section>
            <section className=" p-4  text-xs xl:text-base">
              <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-3 xl:px-4">
                <span className="text-[#A6A9BD] "> اطلاعات خودرو</span>
                <span className="text-[#3E4151]">{props.data}</span>
              </section>
              <section className="flex h-[48px] w-full  items-center justify-between rounded-lg px-4">
                <span className="text-[#A6A9BD] ">مدل خودرو </span>
                <span className="text-[#3E4151]">{props.model}</span>
              </section>
              <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
                <span className="text-[#A6A9BD] ">مالک خودرو </span>
                <span className="text-[#3E4151]">{props.owner}</span>
              </section>
              <section className="flex h-[48px] w-full  items-center justify-between rounded-lg px-4">
                <span className="text-[#A6A9BD] ">کدملی مالک</span>
                <span>{props.id}</span>
              </section>
              <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
                <span className="text-[#A6A9BD] ">شناسه نسیم</span>
                <span className="text-[#3E4151]">{props.num1}</span>
              </section>
              <section className="flex h-[48px] w-full  items-center justify-between rounded-lg px-4">
                <span className="text-[#A6A9BD] ">مبلغ کل</span>
                <span>{props.total}</span>
              </section>
              <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
                <span className="text-[#A6A9BD] ">مبلغ پرداخت شده</span>
                <span className="text-[#3E4151]">{props.paid}</span>
              </section>
              <section className="flex h-[48px] w-full  items-center justify-between rounded-lg px-4">
                <span className="text-[#A6A9BD] ">مبلغ قابل پرداخت</span>
                <span>{props.payable}</span>
              </section>
              <section className="flex h-[48px] w-full  items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
                <span className="text-[#A6A9BD] ">پیگیری مدارک</span>
                <section className="flex gap-1">
                  <span className="text-[#0165E1]">{props.follow}</span>
                  <Image alt="" src={props.src} width={20} height={20} />
                </section>
              </section>
            </section>
          </section>
        </section>
        <ResalultTaxBg
          date="1401/01/12"
          number2="فاقد بدهی"
          display="hidden"
          className=""
        />
      </section>
    </>
  );
}
