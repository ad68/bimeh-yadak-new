"use client";
import React from "react";
import Image from "next/image";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  title,
  platePart1,
  platePart2,
  platePart3,
  platePart4,
}) {
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
    <section className="mx-auto mt-8 flex   h-auto w-full max-w-full flex-col items-center rounded-xl pt-8 shadow-[-4px_-4px_4px_0px_#F6F6FBCC,4px_4px_12px_0px_#F6F6FBCC]  md:w-[80%] md:px-[79px]  xl:mr-6 xl:h-[681px] xl:w-[407px] xl:px-[32px]">
      <section className="mx-auto mb-8 flex w-[90%] items-start gap-2 xl:w-full">
        <Image
          src="/assets/icons/Ellipse.svg"
          width={8}
          height={8}
          className="mt-[12px]"
          alt=""
        />
        <p className="text-sm leading-[27.64px] text-[#3E4151] xl:text-base">
          کد تأیید ارسال شده برای شماره <span>09194337892</span> را وارد کنید.
        </p>
      </section>

      <button className=" mb-8 flex justify-center gap-2 text-[#4E94EA]">
        <Image src="/assets/svg/Mask group.svg" width={20} height={20} alt="" />
        <span>09194337892</span>
      </button>

      <section className="mx-auto mb-8 flex  w-[90%] max-w-full flex-col items-center  xl:w-[280px]  ">
        <span className="mb-[2px] mr-1 self-start text-sm leading-[24.18px] text-[#3E4151] ">
          کد تأیید
        </span>
        <input
          type="text"
          className=" h-12 w-full rounded-lg border border-solid border-[#C2C2C2] pr-4 text-sm  xl:w-[280px]"
          placeholder="کد تأیید را وارد کنید"
        />
      </section>
      <section className=" mx-auto  w-[90%] xl:w-full xl:pr-6">
        <p className="txet-[#505050] mb-4 text-sm leading-[24.18px]">
          آیا کد تأیید را دریافت نکرده‌اید؟ جهت ارسال مجدد کد اقدام نمایید.
        </p>
        <section className="mb-6 flex items-center gap-2 text-sm text-[#4E94EA]">
          <Image
            src="/assets/svg/sms.svg"
            width={24}
            height={24}
            className=""
            alt=""
          />
          ارسال از طریق پیامک
        </section>
        <section className="mb-8 flex items-center gap-2 text-sm text-[#4E94EA] xl:mb-[179px]">
          <Image
            src="/assets/svg/call.svg"
            width={24}
            height={24}
            className=""
            alt=""
          />
          دریافت از طریق تماس تلفنی
        </section>
      </section>
      <button className="mx-auto mb-8 w-[90%] max-w-full rounded-lg bg-[#0165E1] py-[10px] text-white  xl:w-[280px]">
        استعلام خلافی
      </button>
    </section>
  );
}
