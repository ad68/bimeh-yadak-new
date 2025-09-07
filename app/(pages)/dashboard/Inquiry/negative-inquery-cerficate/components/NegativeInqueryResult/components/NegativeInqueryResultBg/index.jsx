"use client";
import React from "react";
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
      <section className=" order-first mx-auto h-auto w-[90%] md:w-[62%] xl:order-last xl:h-[503.57px] xl:w-[383px]">
        <Image
          src="/assets/icons/Nomre manfi.svg"
          width={306}
          height={199.57}
          alt=""
          className="mx-[38.5px] mb-12 mt-8  hidden h-auto w-full xl:block xl:h-[199.57px] xl:w-[306px]"
        />
        <section className="mx-6 rounded-xl shadow-[0px_19.74px_44.42px_-12.83px_#AAAAAA29]">
          <section className=" flex h-[64px] w-full items-center justify-center bg-[url('/assets/images/Groupbg.png')] bg-contain bg-no-repeat">
            <span className="text-lg font-semibold leading-[#3E4151] text-[#3E4151] xl:text-xl">
              نتایج استعلام نمره منفی
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
              <span>کدملی:</span>
            </section>

            <span className="ltr">{props.number2}</span>
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

            <span className="ltr">{props.date}</span>
          </section>
        </section>
      </section>
    </>
  );
}
