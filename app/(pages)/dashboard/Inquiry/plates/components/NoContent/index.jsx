"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { usePlatesStore } from "@/store/dashboard/plates";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ openSideBar }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const showSideBar = usePlatesStore((state) => state.showSideBar);
  const clearRowData = usePlatesStore((state) => state.clearRowData);
  // ─── States ─────────────────────────────────────────────────────────────────────
  /*   const overlay = useRef(); */
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  /*   useEffect(() => {
    if (addPlate) {
      setTimeout(() => {
        overlay.current.style.opacity = 1;
      }, 50);
    }
  }, [addPlate]); */
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      {/*    {addPlate && (
        <section
          ref={overlay}
          onClick={closeSideBar}
          className={` glass fixed left-0 top-0 z-[999] h-full w-full bg-[#64646440] opacity-0 transition-all duration-700`}
        ></section>
      )} */}
      <section className="flex flex-col items-center">
        <Image
          src="/assets/svg/noplate.svg"
          width={289.39}
          height={235.12}
          className="mb-[9.88px] mt-[63px]"
          alt=""
        />
        <span className="mb-[33px] font-medium text-[#909090]">
          در حال حاضر پلاکی ثبت نشده است.
        </span>
        <section
          className=" flex cursor-pointer"
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
          <span className="text-lg font-semibold leading-[27.9px] text-[#0165E1]">
            افزودن پلاک جدید
          </span>
        </section>
      </section>
    </>
  );
}
