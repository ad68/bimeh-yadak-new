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
          alt=""
          className="mx-auto hidden w-[100%] xl:block"
        />
        <section className="mx-auto mb-12 w-[85%] max-w-full  rounded-xl shadow-lg xl:mt-12 ">
          <header className="w-full rounded-t-xl bg-[url('/assets/images/Group.png')]  bg-[length:335px_64px] bg-no-repeat py-[17px] text-center text-[18px] xl:text-xl xl:font-semibold">
            نتایج استعلام مدارک خودرو
          </header>
          <section className="flex flex-col gap-4 px-8 py-6">
            <KeyValue label="بارکد پستی" value="1298784306474" />
            <KeyValue label="تاریخ استعلام" value="1401/01/12" />
          </section>
        </section>
        <section className="text-center">
          <button className="mx-auto mt-6 hidden w-[95%] max-w-full rounded-xl bg-[#0165E1] py-[10px]  text-center text-xl font-semibold text-white hover:bg-[#99C1F3] hover:text-[#0165E1] xl:block xl:w-[280px]">
            پیگیری ارسال مدارک
          </button>
        </section>
      </section>
    </>
  );
}
