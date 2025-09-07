"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import check from "../../../../../public/assets/svg/callbackCheck.svg";
import Error from "../../../../../public/assets/svg/callbackError.svg";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { correctPersianDate, numberWithCommas } from "@/helper";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const searchParams = useSearchParams();
  const actionType = searchParams.get("success");
  const purchaseId = searchParams.get("purchaseId");
  const amount = searchParams.get("amount");
  const pspName = searchParams.get("pspName");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {}, []);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="flex h-screen w-full items-center  justify-center bg-[#F6F6FB]">
      <section className="h-[711px] w-[718px] rounded-[24px] bg-white px-8">
        <Image src={check} className="m-auto mt-[32px]" alt="" />
        <span className="mt-5 block text-center text-xl font-semibold text-[#1CAE81]">
          پرداخت با موفقیت انجام شد
        </span>
        <section className="mt-[32px] h-2 border-t-[2px] border-dashed border-[#b9bbc0]"></section>
        <section className="mt-[24px]">
          <section className="flex items-center justify-between px-[24px] py-[18px]">
            <span className="text-lg font-semibold text-[#9295A9]">
              افزایش اعتبار جهت
            </span>
            <span className="text-lg font-semibold text-[#3E4151]">
              استعلام خلافی با جزئیات سواری
            </span>
          </section>
          <section className="flex items-center justify-between rounded-lg bg-[#F6F6FB] px-[24px] py-[18px]">
            <span className="text-lg font-semibold text-[#9295A9]">
              درگاه پرداخت اینترنتی
            </span>
            <span className="text-lg font-semibold text-[#3E4151]">
              {pspName}
            </span>
          </section>
          <section className="flex items-center justify-between px-[24px] py-[18px]">
            <span className="text-lg font-semibold text-[#9295A9]">
              تاریخ و ساعت
            </span>
            <span className="text-lg font-semibold text-[#3E4151]">
              {time.substring(0, 5)} - {correctPersianDate(date)}
            </span>
          </section>
          <section className="flex items-center justify-between rounded-lg bg-[#F6F6FB] px-[24px] py-[18px]">
            <span className="text-lg font-semibold text-[#9295A9]">مبلغ</span>
            <span className="text-lg font-semibold text-[#3E4151]">
              {numberWithCommas(amount)} ریال
            </span>
          </section>
          <section className="flex items-center justify-between px-[24px] py-[18px]">
            <span className="text-lg font-semibold text-[#9295A9]">
              کدپیگیری
            </span>
            <span className="text-lg font-semibold text-[#3E4151]">
              {purchaseId}
            </span>
          </section>
          <section className="flex items-center justify-between rounded-lg bg-[#F6F6FB] px-[24px] py-[18px]">
            <span className="text-lg font-semibold text-[#9295A9]">وضعیت</span>
            <span className="text-lg font-semibold text-[#1CAE81]">
              پرداخت شده
            </span>
          </section>
        </section>
        <Link
          href="/dashboard/Inquiry/violationList"
          className="m-auto mt-[48px] flex h-[48px] w-[280px] items-center justify-center rounded-lg bg-blue text-white"
        >
          بازگشت به وب سایت
        </Link>
      </section>

      {/* <section className='w-[718px] h-[615px] bg-white rounded-[24px] px-8'>
        <Image src={Error} className='m-auto mt-[32px]' alt='' />
        <span className='block text-xl font-semibold text-center mt-5 text-[#E14856]'>پرداخت ناموفق</span>
        <section className='border-t-[2px] border-[#b9bbc0] mt-[32px] border-dashed h-2'></section>
        <p className='text-lg font-semibold text-[#909090] mt-[32px] text-justify'>
          پرداخت ناموفق بوده است؛ در صورت کسر، مبلغ تا 72 ساعت آینده به حساب شما برمی‌گردد.
        </p>
        <section className='mt-[24px]'>
          <section className='flex justify-between bg-[#F6F6FB] rounded-lg items-center px-[24px] py-[18px]'>
            <span className='text-[#9295A9] text-lg font-semibold'>افزایش اعتبار جهت</span>
            <span className='text-[#3E4151] text-lg font-semibold'>استعلام خلافی با جزئیات سواری</span>
          </section>

          <section className='flex justify-between items-center px-[24px] py-[18px]'>
            <span className='text-[#9295A9] text-lg font-semibold'>کدپیگیری</span>
            <span className='text-[#3E4151] text-lg font-semibold'>71521354654</span>
          </section>
          <section className='flex justify-between bg-[#F6F6FB] rounded-lg items-center px-[24px] py-[18px]'>
            <span className='text-[#9295A9] text-lg font-semibold'>وضعیت</span>
            <span className='text-[#E14856] text-lg font-semibold'>پرداخت نشده</span>
          </section>
          <Link href='' className='bg-blue block w-[280px] text-white rounded-lg m-auto mt-[48px] px-[68.5px] py-[10px]'>
            بازگشت به وب سایت
          </Link>
        </section>
      </section> */}
    </section>
  );
}
