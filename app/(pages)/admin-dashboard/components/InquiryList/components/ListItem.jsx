"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ img, title, link }) {
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
      <Link
        href={link}
        className="flex items-center justify-between rounded-xl border-[1px] px-3 py-5 shadow-lg md:px-6 xl:px-4 xl:py-6 "
      >
        <section className="">
          <Image
            src={img}
            width={64}
            height={65}
            alt=""
            className="ml-3 inline size-[56px] xl:size-[65px]"
          />
          <span className="text-[16px] font-semibold xl:text-[18px] xl:font-bold">
            {title}
          </span>
        </section>
        <Image
          alt=""
          src="/assets/images/arrow-down.png"
          width={24}
          height={24}
          className="size-[24px]"
        />
      </Link>
    </>
  );
}
