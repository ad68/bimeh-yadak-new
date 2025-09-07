import { usePlatesStore } from "@/store/dashboard/plates";
import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ total }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const showSideBar = usePlatesStore((state) => state.showSideBar);
  const clearRowData = usePlatesStore((state) => state.clearRowData);
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
      <section className="flex justify-between">
        <h2 className="text-[20px]  font-semibold text-[#505050] md:text-[28px] lg:hidden">
          پلاک‌های من
        </h2>
        <span className="hidden font-semibold text-[#9295A9] lg:block">
          {total} مورد
        </span>
        <section
          className="flex items-center  "
          onClick={() => {
            clearRowData();
            showSideBar();
          }}
        >
          <Image
            src="/assets/images/add.svg"
            width={10}
            height={10}
            className="m-[5px]"
            alt=""
          />
          <span className="cursor-pointer text-lg font-semibold text-[#0165E1]">
            افزودن پلاک جدید
          </span>
        </section>
      </section>
    </>
  );
}
