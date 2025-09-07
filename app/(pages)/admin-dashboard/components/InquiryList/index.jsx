"use client";
import React, { useState } from "react";
import ListItem from "./components/ListItem";

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
      <header className="mx-[24px] mb-6 text-[20px] font-semibold xl:mb-10 xl:text-[28px]">
        داشبورد
      </header>
      <section className="mx-[24px] grid gap-4 md:mx-auto md:w-[80%] xl:w-full xl:grid-cols-3  xl:gap-6">
        {/*   <ListItem
          link={"/dashboard/Inquiry/violation"}
          title="استعلام خلافی"
          img="/assets/images/khalafi-M.png"
        /> */}
        {/*  <ListItem
          link={"/dashboard/Inquiry/negative-inquery-cerficate"}
          title="استعلام نمره منفی"
          img="/assets/images/nomre manfi.png"
        />
        <ListItem
          link={"/dashboard/Inquiry/inquiryrecords"}
          title="سوابق استعلام"
          img="/assets/images/maliat.png"
        />
        <ListItem
          link={"/dashboard/Inquiry/vehicledocuments"}
          title="استعلام مدارک خودرو"
          img="/assets/images/madarek.png"
        />
        <ListItem
          link={"/dashboard/Inquiry/certificate"}
          title="استعلام گواهینامه"
          img="/assets/images/vaziat.png"
        />
        <ListItem
          link={"/dashboard/Inquiry/plates"}
          title="پلاک های من"
          img="/assets/images/vaziat.png"
        /> */}
      </section>
    </>
  );
}
