"use client";
import React from "react";
import Image from "next/image";
import { numberWithCommas } from "@/helper";
import { Button } from "@/common";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ data, sum }) {
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
      <section className="order-first mx-auto h-auto w-[90%] rounded-[12px] border md:w-[62%] xl:order-last xl:h-[675px] xl:w-[383px]">
        <Image
          src="/assets/images/car-group.png"
          width={306}
          height={199.57}
          alt=""
          className="mx-[38.5px] mb-12 mt-8  hidden h-auto w-full xl:block xl:h-[199.57px] xl:w-[306px]"
        />
        <section className="mx-6  rounded-xl shadow-[0px_19.74px_44.42px_-12.83px_#AAAAAA29]">
          <section className=" flex h-[64px] w-full items-center justify-center bg-[url('/assets/images/Groupbg.png')] bg-contain bg-no-repeat">
            <span className="text-lg font-semibold leading-[#3E4151] text-[#3E4151] xl:text-xl">
              صورتحساب پرداخت
            </span>
          </section>
          <section className="flex justify-between px-[32.33px] pt-6 text-xs leading-[20.73px]">
            <section className="flex items-center gap-[3.56px] ">
              <Image
                src="/assets/images/Ellipse.png"
                width={8}
                height={8}
                alt=""
                className=""
              />
              <span>هزینه کلی خلافی:</span>
            </section>
            <span className="rtl font-bold">
              {numberWithCommas(data?.elements[0]?.totalAmount) + " ریال"}
            </span>
          </section>
          <section className="flex justify-between px-[32.33px] py-6 text-xs leading-[20.73px]">
            <section className="flex items-center gap-[3.56px] ">
              <Image
                src="/assets/images/Ellipse.png"
                width={8}
                height={8}
                alt=""
                className=""
              />
              <span>تاریخ استعلام:</span>
            </section>
            <span className="ltr"></span>
          </section>
        </section>
        <Button
          disabled={sum === 0}
          className="m-auto mt-[72px] w-[280px]"
        >{`پرداخت ${numberWithCommas(sum)} ریال`}</Button>
      </section>
    </>
  );
}
