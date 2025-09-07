import React from "react";
import Image from "next/image";
import KeyValue from "./KeyValue";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ label, value }) {
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
      <section className=" max-w-full xl:w-[383px] xl:rounded-xl xl:border-[1px] xl:px-[24px] xl:py-[32px]">
        <Image
          src="/assets/images/Group 1000006236.png"
          width={306}
          height={195}
          className="mx-auto hidden w-[100%] xl:block"
          alt=""
        />
        <section className="mx-auto w-[85%] max-w-full rounded-xl  shadow-lg xl:mt-12 xl:w-[335px] ">
          <header className="w-full rounded-t-xl bg-[url('/assets/images/Group.png')]  bg-[length:335px_64px] bg-no-repeat py-[17px] text-center text-[18px] xl:text-xl xl:font-semibold">
            نتایج استعلام مدارک خودرو
          </header>
          <section className="flex flex-col gap-4 px-5 py-6 xl:px-8">
            <KeyValue label=" شماره مرسوله" value="12987843064744523" />
            <KeyValue label="نامه‌رسان " value="محمدحسین احمدی" />
          </section>
        </section>
      </section>
    </>
  );
}
