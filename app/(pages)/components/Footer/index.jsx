"use client";

import Link from "next/link";
import React, { useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToTop } from "@/helper";
import Image from "next/image";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const pathName = usePathname();

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
      {pathName === "/" ||
        pathName === "/login" ||
        pathName === "/dashboard" ||
        pathName === "/price-calculate-daydar" ||
        pathName.startsWith("/dashboard/") ? (
        ""
      ) : (
        <footer className="w-full xl:pt-[56px] pr-6 pt-[32px] bg-[#FFC727] xl:mt-[139px] mt-[59px]  xl:block relative rounded-t-[60px]  xl:rounded-t-[100px] h-auto max-w-full m-auto   ">
          <button
            onClick={scrollToTop}
            className="xl:w-[98px] w-[45px] h-[45px] flex justify-center items-center bg-[#FFC727] xl:h-[98px] rounded-full xl:border-[8px] border-[3px]  absolute -top-[2%] xl:-top-[10%] xl:left-[48%] left-[45%] border-[#fafafa]"
          >
            <Image
              src={"/icons/arrow-up-04-stroke-rounded 1.svg"}
              width={40}
              height={40}
              className="xl:size-[40px] size-6"
              alt=""
            />
          </button>
          <section className="xl:flex grid xl:pb-[60px] pb-[30px] border-b  border-[#D9DBE9] xl:gap-[153px] gap-4 xl:w-[1440px] w-[90%]  mx-auto ">
            <section className="xl:w-[310px] w-[90%] ">
              <Link href="/" className="flex gap-3 items-center ">
                <Image
                  src="/icons/logo.svg"
                  width={133.89}
                  height={89}
                  alt=""
                  className="xl:w-[133.89px] xl:h-[89px] w-[40px] h-[48px]"
                />
                <h2 className="xl:text-[32px] text-[24px] font-bold  xl:mr-[-20px]">
                  بیمه یدک
                </h2>
              </Link>
              <p className="xl:mt-6 mt-3 text-justify xl:leading-9 leading-[30px] xl:text-sm text-[12px] font-medium xl:pr-0 ">
                بیمه یدک یک محصول و خدمت جديد بیمه‌ای است که توسط کارگزاری رسمی بيمه برخط مباشر شماره پروانه فعالیت ١٨٧٨ تحت نظارت بیمه مرکزی‌ جمهوری اسلامی ایران با همکاری انجمن <Link href="https://emdadkhodro1593.ir/" className="text-blue underline">امدادخودرو</Link>
                کشوری و شرکت <Link href="https://sanaap.com/" className="text-blue underline">سناپ</Link> (سامانه نواوری ایرانیان پوشش)  راه اندازی شده است.
              </p>
              <section className="xl:flex xl:mt-8 mt-4 xl:gap-6 gap-4 items-center hidden">
                <button className="hover:scale-110 hover:transition-all ">
                  <Image
                    src={"/icons/YouTube.svg"}
                    width={30}
                    height={30}
                    className="xl:size-[20px] size-4"
                    alt=""
                  />
                </button>
                <button className="hover:scale-110 hover:transition-all ">
                  <Image
                    src={"/icons/LinkedIn.svg"}
                    width={30}
                    height={30}
                    className="xl:size-[20px] size-4"
                    alt=""
                  />
                </button>
                <button className="hover:scale-110 hover:transition-all ">
                  <Image
                    src={"/icons/Instagram.svg"}
                    width={30}
                    height={30}
                    className="xl:size-[20px] size-4"
                    alt=""
                  />
                </button>
                <button className="hover:scale-110 hover:transition-all ">
                  <Image
                    src={"/icons/Twitter.svg"}
                    width={30}
                    height={30}
                    className="xl:size-[20px] size-4"
                    alt=""
                  />
                </button>
                <button className="hover:scale-110 hover:transition-all ">

                  <Image
                    src={"/icons/Facebook.svg"}
                    width={30}
                    height={30}
                    className="xl:size-[20px] size-4"
                    alt=""
                  />
                </button>
              </section>
            </section>
            <section>
              <h2 className="text-[#170F49] xl:text-[16px] text-[14px] font-bold leading-[22px]">
                خدمات
              </h2>
              <nav className="xl:mt-10 mt-4 xl:flex flex-col xl:gap-6 grid gap-4 xl:text-[16px] text-[14px]  font-medium leading-[20px]">
                <Link href="/relief-signup" className="hover:opacity-50">
                  خرید بیمه‌نامه
                </Link>
                <Link href="/request-relief" className="hover:opacity-50">
                  درخواست امداد خودرو
                </Link>
                <Link href="/marketing" className="hover:opacity-50">
                  مشاور و کارشناس فروش
                </Link>

                <Link href="/price-calculate" className="hover:opacity-50">
                  ارزش روز خودرو
                </Link>

                <Link href="/price-drop-insurance" className="hover:opacity-50">
                  محاسبه افت بیمه خودرو
                </Link>
              </nav>
            </section>
            <section className="xl:w-[100px]">
              <h2 className="text-[#170F49]  xl:text-[16px] text-[14px] font-bold leading-[22px]">
                آشنایی با ما
              </h2>
              <ul className="xl:mt-10 mt-4 flex flex-col xl:gap-6 gap-4 xl:text-[16px]  text-[14px]  font-medium leading-[20px]">
                <li>
                  <Link className="hover:opacity-50" href="/about">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <button className="hover:opacity-50">اخبار</button>
                </li>
                <li>

                  <Link href="/article" className="hover:opacity-50">
                    مقالات
                  </Link>
                </li>
              </ul>
            </section>
            <section className="">
              <h2 className="text-[#170F49]  xl:text-[16px] text-[14px] font-bold leading-[22px]">
                تماس با ما
              </h2>
              <ul className="xl:mt-10 mt-4 flex flex-col xl:w-[286px] xl:gap-6 gap-4 xl:text-[16px] text-[14px]  font-medium leading-[20px]">
                <li className="flex xl:gap-[6px] gap-[3px] items-center">
                  <Image
                    src={"/icons/Email.svg"}
                    width={30}
                    height={30}
                    className="xl:size-[30px] size-6"
                    alt=""
                  />
                  info@emdadkhodro1593.ir
                </li>
                <li className="flex xl:gap-[6px] gap-[3px] items-center">
                  <Image
                    src={"/icons/Phone.svg"}
                    width={30}
                    height={30}
                    className="xl:size-[30px] size-6"
                    alt=""
                  />
                  02191306421
                </li>
                <li className="flex xl:gap-[6px] gap-[3px]  items-start  leading-[32px]">
                  <Image
                    src={"/icons/Mark.svg"}
                    width={30}
                    height={30}
                    className="xl:size-[30px] size-6"
                    alt=""
                  />

                  <span className="xl:w-[260px] ">
                    آدرس: تهران یوسف اباد میدان سلماس خیابان شهریار بالاتر از خیابان چهاردهم پلاک 39 ساختمان سناپ
                  </span>
                </li>
              </ul>

              <section className="flex items-center justify-center gap-2">
                <Image
                  src={"/icons/photo_2025-02-23_19-18-27.jpg"}
                  width={80}
                  height={80}
                  className="xl:w-[80px] xl:h-[110px] w-[60px] h-[75px] place-self-end mt-2"
                  alt=""
                />
                <Image
                  src={"/icons/ase.png"}
                  width={80}
                  height={80}
                  className="xl:w-[80px] xl:h-[110px] w-[60px] h-[75px] place-self-end mt-2"
                  alt=""
                />
                <Image
                  src={"/icons/mobasher.png"}
                  width={110}
                  height={110}
                  className="xl:h-[110px] xl:w-[110px] w-[75px]  h-[75px] place-self-end mt-2"
                  alt=""
                />
                <section className="bg-white h-[75px] xl:h-[110px] mt-2">
                  <Image
                    src={"/icons/sanap.svg"}
                    width={110}
                    height={110}
                    className="xl:h-[100px] xl:w-[110px] w-[75px]  h-[60px] place-self-end mt-2"
                    alt=""
                  />
                </section>

              </section>
            </section>
            <section className="flex  mt-4 gap-[32px] justify-center items-center xl:hidden">
              <button className="hover:scale-110 hover:transition-all ">
                <Image
                  src={"/icons/YouTube.svg"}
                  width={30}
                  height={30}
                  className="xl:size-[20px] size-4"
                  alt=""
                />
              </button>
              <button className="hover:scale-110 hover:transition-all ">
                <Image
                  src={"/icons/LinkedIn.svg"}
                  width={30}
                  height={30}
                  className="xl:size-[30px] size-4"
                  alt=""
                />
              </button>
              <button className="hover:scale-110 hover:transition-all ">
                <Image
                  src={"/icons/Instagram.svg"}
                  width={30}
                  height={30}
                  className="xl:size-[30px] size-4"
                  alt=""
                />
              </button>
              <button className="hover:scale-110 hover:transition-all ">
                <Image
                  src={"/icons/Twitter.svg"}
                  width={30}
                  height={30}
                  className="xl:size-[30px] size-4"
                  alt=""
                />
              </button>
              <button className="hover:scale-110 hover:transition-all">
                <Image
                  src={"/icons/Facebook.svg"}
                  width={30}
                  height={30}
                  className="xl:size-[30px] size-4"
                  alt=""
                />
              </button>
            </section>
          </section>
          <span className="block w-full text-center py-4 !border-t !border-primary">
            توسعه دهنده گروه برنامه نویسی بیمه یدک در <Link href="https://sanaap.com/" className="text-blue underline">سناپ</Link>
          </span>
        </footer>
      )}
    </>
  );
}
