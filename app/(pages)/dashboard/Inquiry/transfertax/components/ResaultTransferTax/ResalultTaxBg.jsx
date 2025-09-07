"use client";
import React from "react";
import Image from "next/image";
import PlateCar from "../../../../components/PlateReadonly/plateCar";
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
    <section className="order-first mx-auto flex h-auto w-full flex-col  rounded-xl px-6 py-8 md:w-[62%] xl:order-last xl:mb-0 xl:h-auto xl:w-[383px] xl:border xl:border-solid  xl:border-[#8B929A36]">
      <Image
        src="/assets/images/Group maliat.png"
        width={288.04}
        height={189.05}
        alt=""
        className="mx-auto mb-[24.68px] hidden h-[152px] w-[60%] xl:mb-[53.95px] xl:block xl:h-[189.05px] xl:w-[288.04px] xl:pr-[16.63px]"
      />
      <section className=" flex  flex-col items-center rounded-xl shadow-[0px_19.74px_44.42px_-12.83px_#AAAAAA29]">
        <section className=" flex h-[64px] w-full items-center justify-center bg-[url('/assets/images/Groupbg.png')] bg-contain bg-no-repeat">
          <span className="text-lg font-semibold leading-[#3E4151] text-[#3E4151] xl:text-xl">
            صورتحساب پرداخت
          </span>
        </section>
        <section className="flex  w-[270.56px] flex-col items-center border-b border-dashed border-[#A6A9BD] pb-6 pt-5">
          <PlateCar
            platePart1="11"
            platePart2="863"
            platePart3="الف"
            platePart4="68"
          />
        </section>
        <section className="flex w-full justify-between px-[32px] pt-6 text-xs leading-[20.73px]">
          <section className="flex items-center gap-[3.56px] ">
            <Image
              src="/assets/images/Ellipse 1023.svg"
              width={8}
              height={8}
              alt=""
              className=""
            />
            <span>بدهی مالیاتی:</span>
          </section>

          <span className="ltr">{props.number2}</span>
        </section>
        <section className="flex w-full justify-between px-[32.33px] py-6 text-xs leading-[20.73px]">
          <section className="flex items-center gap-[3.56px] ">
            <Image
              src="/assets/images/Ellipse 1023.svg"
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
      <button
        className={`xljustify-items-end fixed bottom-[40px] w-[280px] self-center rounded-lg bg-[#0165E1] py-[10px] text-white xl:static ${props.display} xl:mt-[42px] `}
      >
        پرداخت بدهی مالیاتی
      </button>
    </section>
  );
}
