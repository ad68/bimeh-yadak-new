"use client";
import React, { useState } from "react";
import Image from "next/image";
import Plate from "./plate";
import OffenseList from "./OffenseList";
import WithoutPlate from "./WithoutPlate";
import { Button, CarLicensePlate } from "@/common";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [inputValue1, setInputValue1] = useState();
  const [inputValue2, setInputValue2] = useState();
  const [inputValue3, setInputValue3] = useState();
  const [mySelect, setMySelect] = useState();
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto w-full rounded-[12px] p-8 shadow-md md:w-[80%] md:px-[79px] xl:w-[407px] xl:px-8 xl:shadow-xl">
        <section className="mb-[32px] flex gap-2">
          {/* <Image
            src="/assets/images/dot.png"
            width={8}
            height={8}
            alt=""
            className="ml-1 inline"
          /> */}
          <section className="w-3 h-2 rounded-full bg-primary mt-2"></section>
          <p className="inline text-justify text-[16px] font-normal">
            برای پیگیری مدارک خودرو ، شماره پلاک خود را وارد کنید یا از لیست “
            پلاک‌های من” پلاک مد نظر را انتخاب نمایید.
          </p>
        </section>
        <section className="mx-auto mb-8 border-b-[1px] border-dashed pb-[32px] ">
          <h2 className="text-[14px] xl:pr-[32px]">شماره پلاک</h2>
          <CarLicensePlate
            inputValue1={inputValue1}
            setInputValue1={setInputValue1}
            inputValue2={inputValue2}
            setInputValue2={setInputValue2}
            inputValue3={inputValue3}
            setInputValue3={setInputValue3}
            mySelect={mySelect}
            setMySelect={setMySelect}
          />
        </section>

        <section className="mx-auto grid gap-[12px] xl:px-8">
          <h2 className="text-[14px] font-normal">پلاک‌های من</h2>
          <section className="mx-auto mb-6 flex w-full flex-col gap-3">
            <OffenseList title="شخصی ایران 40-9843 م 59" />
            <OffenseList title="شخصی ایران 40-9843 م 59" />
            <OffenseList title="شخصی ایران 40-9843 م 59" />
          </section>
        </section>
        {/* <WithoutPlate /> */}
        <section className="mx-auto xl:px-8">
          <Button className=" mt-6 h-[48px] w-full  max-w-full  xl:w-[280px]">
            ثبت
          </Button>
        </section>
      </section>
    </>
  );
}
