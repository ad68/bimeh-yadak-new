"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../.././../../public/assets/images/logo.svg";
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
      <section className="mx-auto  mt-[112px] flex h-[33px] w-[1240px] justify-between">
        <h2 className="text-2xl font-bold text-[#3E4151]">بیمه یدک</h2>
        <Image
          className=""
          src="/assets/images/Vector-header.png"
          width={315}
          height={12}
          alt="LogoDesktop"
        />
        <span className="text-lg font-bold text-[#0165E1]">
          محاسبه افت قیمت
        </span>
        <Image
          className=""
          src="/assets/images/Vector-header.png"
          width={315}
          height={12}
          alt="LogoDesktop"
        />
        <Link href="/" className="  cursor-pointer">
          <Image
            className=" "
            src={logo}
            width={92}
            height={32}
            alt="LogoDesktop"
          />
        </Link>
      </section>
    </>
  );
}
