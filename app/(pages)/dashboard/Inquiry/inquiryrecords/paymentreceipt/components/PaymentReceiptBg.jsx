"use client";
import React from "react";
import Image from "next/image";
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
      <section className="mx-auto">
        <section className="mx-auto grid w-[95%] gap-3 rounded-[12px] bg-[#F6F6FB] p-4 xl:w-[602px]">
          <section className="mx-auto grid w-[95%] gap-4 rounded-[12px] bg-white px-4 py-6 xl:w-[570px]">
            <section className="mx-auto flex gap-2 border-b-[1px] pb-4">
              <Image
                src="/assets/images/tick-circle.png"
                width={24}
                height={24}
                className="size-[24px]"
                alt=""
              />
              <p className="text-[12px] font-normal xl:text-[14px] xl:font-semibold">
                قبض خلافی خودرو، برای خودرو (50 ــ 573م59) با موفقیت از طریق
                بانک ملی پرداخت شد.
              </p>
            </section>

            <section className="flex gap-2">
              <Image
                src="/assets/images/tick-circle.png"
                width={24}
                height={24}
                className="size-[24px]"
                alt=""
              />
              <p className="text-[12px] font-normal xl:text-[14px] xl:font-semibold">
                قبض خلافی خودرو، برای خودرو (50 ــ 573م59) با موفقیت از طریق
                بانک ملی پرداخت شد.
              </p>
            </section>
          </section>
          <section className="mx-auto w-[95%] rounded-[12px] bg-white px-4 py-3 xl:w-[570px] xl:py-6 ">
            <header className="mb-4 flex gap-3 xl:gap-4 ">
              <Image
                src="/assets/images/table icon2.png"
                width={28}
                height={28}
                alt=""
              />
              <span className="text-[16px] font-semibold xl:text-[18px]">
                جزئیات رسید
              </span>
            </header>
            <section className="mx-auto flex w-[95%] justify-between rounded-lg bg-[#F6F6FB] px-3 py-[14px] xl:w-[538px] xl:px-4 xl:py-[10px]">
              <span className="text-[12px] text-[#A6A9BD] xl:text-[16px]">
                تاریخ پرداخت
              </span>
              <span className="xl:text-16 text-[12px]">1401/01/12 </span>
            </section>
            <section className="mx-auto flex w-[95%] justify-between rounded-lg px-3 py-[14px] xl:w-[538px] xl:px-4 xl:py-[10px]">
              <span className="text-[12px] text-[#A6A9BD] xl:text-[16px]">
                شناسه قبض
              </span>
              <span className="text-[12px] xl:text-[16px]">235467890</span>
            </section>
            <section className="mx-auto flex w-[95%] justify-between rounded-lg bg-[#F6F6FB] px-3 py-[14px] xl:w-[538px] xl:px-4 xl:py-[10px]">
              <span className="text-[12px] text-[#A6A9BD] xl:text-[16px]">
                شناسه پرداخت{" "}
              </span>
              <span className="text-[12px] xl:text-[16px]">234567</span>
            </section>
            <section className="mx-auto flex w-[95%] justify-between rounded-lg px-3 py-[14px] xl:w-[538px] xl:px-4 xl:py-[10px]">
              <span className="text-[12px] text-[#A6A9BD] xl:text-[16px]">
                مبلغ
              </span>
              <span className="text-[12px] xl:text-[16px]"> 500,000 ریال</span>
            </section>
            <section className="mx-auto flex w-[95%] justify-between rounded-lg bg-[#F6F6FB] px-3 py-[14px] xl:w-[538px] xl:px-4 xl:py-[10px]">
              <span className="text-[12px] text-[#A6A9BD] xl:text-[16px]">
                {" "}
                شماره پرونده{" "}
              </span>
              <span className="text-[12px] xl:text-[16px]">1092839</span>
            </section>
            <section className="mx-auto flex w-[95%] justify-between rounded-lg px-3 py-[14px] xl:w-[538px] xl:px-4 xl:py-[10px]">
              <span className="text-[12px] text-[#A6A9BD] xl:text-[16px]">
                کد پیگیری
              </span>
              <span className="text-[12px] xl:text-[16px]"> 142536457689</span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
