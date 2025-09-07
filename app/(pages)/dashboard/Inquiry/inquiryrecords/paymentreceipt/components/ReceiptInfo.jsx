"use client";
import React from "react";
import Image from "next/image";
import PlateItemsCar from "./PlateItemsCar";
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
      <section className="mx-auto flex w-[80%] flex-col rounded-xl border-[1px] xl:mb-[72px] xl:w-[335px]">
        <header className="rounded-t-xl bg-[url('/assets/images/www.png')] bg-[length:315px_60px] bg-no-repeat px-4 py-4 text-center xl:bg-[length:335px_64px]">
          <h2 className="text-[18px] font-semibold xl:text-[20px]">
            رسید پرداخت
          </h2>
        </header>

        <section className="">
          <PlateItemsCar
            platePart1="11"
            platePart2="863"
            platePart3="الف"
            platePart4="68"
          />
        </section>

        <section className="mx-auto mb-6 mt-4 grid w-[90%] gap-4 xl:mt-[28px] xl:w-[271px]">
          <section className="flex justify-between text-[12px]">
            <section>
              <Image
                src="/assets/images/Ellipse.png"
                width={8}
                height={8}
                className="ml-2 inline"
                alt=""
              />
              <span>خلافی پرداخت شده:</span>
            </section>
            <span className="text-[16px] font-semibold text-[#1CAE81]">
              59.864.000 ریال
            </span>
          </section>
          <section className="flex justify-between text-[12px]">
            <section>
              <Image
                src="/assets/images/Ellipse.png"
                width={8}
                height={8}
                className="ml-2 inline"
                alt=""
              />
              <span> تاریخ پرداخت:</span>
            </section>
            <span className="text-[16px] font-semibold">1401/01/12</span>
          </section>
        </section>
      </section>
    </>
  );
}
