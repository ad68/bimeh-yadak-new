"use client";
import React from "react";
import UserInfo from "./components/UsetInfo";
import CertificateList from "./components/CertificateList";
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
      <section className=" mb-10 flex items-center gap-2">
        <h2 className="text-[16px] font-semibold text-[#505050] xl:text-[28px]">
          لیست استعلام
        </h2>
        <section className="h-8 w-[1px] bg-[#8B929A36]"></section>
        <h2 className="text-[14px] font-semibold text-[#0165E1] xl:text-2xl">
          نتایج استعلام وضعیت گواهینامه
        </h2>
        <section className="hidden h-8 w-[1px] bg-[#8B929A36] xl:block"></section>
        <h2 className="hidden text-[12px] font-semibold text-[#0165E1] xl:block xl:text-xl">
          پست
        </h2>
      </section>
      <section className="hidden xl:flex xl:justify-between xl:gap-6">
        <CertificateList />
        <UserInfo />
      </section>
      <section className="grid gap-8 xl:hidden">
        <UserInfo />
        <CertificateList />
      </section>
    </>
  );
}
