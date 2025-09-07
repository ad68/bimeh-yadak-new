"use client";
import React from "react";
import UserInfo from "./components/UsetInfo";
import Info from "./components/Info";
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
      <section className="w-full ">
        <section className="m-[24px] mb-10 flex items-center gap-2">
          <h2 className="text-[16px] font-semibold text-[#505050] xl:text-[28px]">
            لیست استعلام
          </h2>
          <section className="h-8 w-[1px] bg-[#8B929A36]"></section>
          <h2 className="text-[14px] font-semibold text-[#0165E1] xl:text-2xl">
            استعلام وضعیت گواهینامه
          </h2>
        </section>
        <section className="hidden xl:flex xl:justify-between xl:gap-6">
          <Info />
          <UserInfo />
        </section>
        <section className="xl:hidden">
        <UserInfo />
        <Info />
        <section className=" text-center">
          <button className="fixed  bottom-[40px] left-[50%] translate-x-[-50%] xl:hidden mt-6 w-[315px] max-w-full rounded-xl bg-[#0165E1]  py-[10px] text-center text-xl font-semibold text-white xl:w-[280px] hover:bg-[#99C1F3] hover:text-[#0165E1]">
          پیگیری ارسال مدارک
          </button>
        </section>
        </section>
      </section>
    </>
  );
}
