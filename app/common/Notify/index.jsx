"use client";
import React from "react";
import { IconClose, IconNotifyCheck, IconSpcCheck } from "../icons";
import Icon from "@ant-design/icons/lib/components/Icon";

//
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
    <section
      id="myNotifyWrapper"
      className="fixed  top-[80px] z-[1000] hidden h-[64px] w-full items-center justify-center opacity-0 transition-all duration-300"
    >
      <section
        id="myNotifyBox"
        className="flex h-auto min-h-[50px] w-[300px] max-w-[90%] items-center rounded-xl border-2 bg-red-500 px-4"
      >
        <section
          id="myNotifyCheckIcon"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#1CAE81]"
        >
          <IconNotifyCheck width={30} height={30} color="white" />
        </section>
        <section
          id="myNotifyCloseIcon"
          className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-red-500"
        >
          <IconClose width={28} height={28} color="red" fill="white" />
        </section>

        <span
          id="myNotifyText"
          className="mr-3 text-sm font-normal text-black"
        ></span>
      </section>
    </section>
  );
}
