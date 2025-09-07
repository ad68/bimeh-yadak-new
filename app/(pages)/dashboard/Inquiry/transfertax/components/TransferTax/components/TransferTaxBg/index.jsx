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
    <section className="mb-[47.39px] flex h-auto w-full flex-col xl:mb-0 xl:h-[681px] xl:w-[460px] ">
      <Image
        src="/assets/images/Group maliat.png"
        width={460}
        height={300}
        alt=""
        className="mx-auto mb-[24.68px] h-auto w-[60%] xl:mb-[56px] xl:mt-[120.5px] xl:h-[300px] xl:w-full"
      />
      <section className="w-full border-r-[2px] border-solid border-[#4E94EA] pr-2 text-justify text-sm leading-[24.18px] text-[#505050] xl:text-base xl:leading-[27.64px]">
        برای پیگیری مدارک خودرو کافی است، شماره پلاک، کد ملی و تلفن همراه متعلق
        به کد ملی را وارد کنید تا وضعیت به‌روز صدور و ارسال مدارک خودرو را
        مشاهده کنید.
      </section>
    </section>
  );
}
