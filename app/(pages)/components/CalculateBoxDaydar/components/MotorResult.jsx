import React, { useState, useContext, useEffect } from "react";
import { IconArrowRight } from "@/common/icons";
import { numberWithCommas } from "@/helper";
/* import Image from "next/image"; */
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ hideResult, result }) {
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
      <section className="flex justify-end">
        <span
          onClick={hideResult}
          className="flex w-[130px] cursor-pointer items-center justify-end text-lg text-white"
        >
          <IconArrowRight className="ml-2 mt-2" />
          <span>بازگشت</span>
        </span>
      </section>
      <section>
        <section className="mt-3 flex items-center justify-between">
          <section >
            <span className="flex text-xl gap-1 font-bold text-white">
              <span>نام موتور:</span>
              <span>
                {result?.brandName}
              </span>


            </span>
            {/*  <span className="block font-normal text-white">
                 {result?.colorName}
              مدل موتور
            </span> */}
          </section>
          {/*  {result?.imageUrl ? (
            <Image
              className="h-[125px] rounded-[10px] bg-white p-1"
              src={result?.imageUrl}
              width={200}
              height={200}
              loading="lazy"
              alt="car picture"
            />
          ) : (
            <section className="flex h-[125px] w-[200px] items-center justify-center rounded-md border text-white">
              بدون عکس
            </section>
          )} */}
        </section>
      </section>
      <section className="mt-[20px] ">
        <section className="mr-[9px] flex h-[40px]  flex-col items-center justify-between text-lg font-bold text-white">
          <span>قیمت کارشناسی ما :</span>
          <span className="text-md font-bold">
            {numberWithCommas(result?.basePrice)} تومان
          </span>
        </section>
      </section>
      <section className="mt-[17px] flex items-center justify-between text-white">
        <section className="mr-[70px] flex h-[40px] flex-col items-center justify-center text-[18px] font-bold text-[#FFD8D1]">
          <span>حداکثر قیمت در بازار:</span>
          <span className="mt-1">
            {numberWithCommas(result?.upperLimit)} تومان
          </span>
        </section>
        <section className="ml-[55px] flex h-[40px] flex-col items-center justify-center text-[18px] font-bold text-[#c6ffc6]">
          <span>حداقل قیمت در بازار:</span>
          <span className="mt-1">
            {numberWithCommas(result?.lowerLimit)} تومان
          </span>
        </section>
      </section>
      <section className="mt-[20px] rounded-[4px] bg-[#ff797926] p-1 px-4 text-[#fff2f1]">
        {result?.detailsOutputDtos?.map((item, index) => (
          <section key={index}>
            <span>{item.reason} : </span>
            <span>{numberWithCommas(item?.depreciationPrice)}</span>
          </section>
        ))}


      </section>
      <section className="mt-[20px] rounded-[4px] bg-[#ffffff26] p-1 px-4 text-[#fff2f1]">
        قیمت های نمایشی برای موتور سیکلت مربوط به آخرین مدل موجود در بازار می
        باشد
      </section>
    </>
  );
}
