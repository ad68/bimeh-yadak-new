import React, { useState, useContext, useEffect } from "react";
import { IconArrowRight } from "@/common/icons";
import { numberWithCommas } from "@/helper";
import Image from "next/image";
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
      <section>
        <section className="mt-3">
          <section className="">
            <span className="flex gap-2 text-xl font-bold text-white">
              <span> نام موتور:</span>
              {result?.brandName}
            </span>
          </section>
          {result?.imageUrl ? (
            <Image
              className="mb-4 mt-4 block w-full rounded-[10px] bg-white p-1"
              src={result?.imageUrl}
              width={200}
              height={200}
              loading="lazy"
              alt="car picture"
            />
          ) : (
            <section className="mb-4 mt-4 flex h-[125px] w-full items-center justify-center rounded-md border text-white">
              بدون عکس
            </section>
          )}
        </section>
      </section>
      <section className="m-auto mt-[20px] w-[160px] max-w-full">
        <section className="mr-[9px] flex flex-col items-center justify-between border-b border-white py-[16px] text-sm font-bold text-white">
          <span>قیمت کارشناسی ما :</span>
          <span className="text-md font-bold">
            {numberWithCommas(result?.basePrice)}
          </span>
        </section>
        <section className="mr-[9px] flex flex-col items-center justify-between border-b border-white py-[16px] text-sm font-bold text-white">
          <span>حداکثر قیمت در بازار:</span>
          <span className="mt-1">{numberWithCommas(result?.upperLimit)}</span>
        </section>
        <section className="mr-[9px] flex flex-col items-center justify-between border-b border-white py-[16px] text-sm font-bold text-white">
          <span>حداقل قیمت در بازار:</span>
          <span className="mt-1">{numberWithCommas(result?.lowerLimit)}</span>
        </section>
      </section>
      <section className="mt-[20px] rounded-[4px] bg-[#ff797926] p-1 px-4 text-[#fff2f1]">
        {result?.detailsOutputDtos.map((item, index) => (
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
      <section className="flex justify-end">
        <span
          onClick={hideResult}
          className="mt-3 flex w-[130px] cursor-pointer items-center justify-end text-lg text-primary"
        >
          <IconArrowRight className="ml-2 mt-2" />
          <span>بازگشت</span>
        </span>
      </section>
    </>
  );
}
