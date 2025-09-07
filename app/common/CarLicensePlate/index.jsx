"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { isValue } from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  provinceCode,
  setProvinceCode,
  licenseCode2,
  setLicenseCode2,
  licenseCode1,
  setLicenseCode1,
  alphabetCode,
  setAlphabetCode,
  setPlateIsValid,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (setPlateIsValid) {
      if (
        provinceCode?.length === 2 &&
        licenseCode1?.length === 2 &&
        licenseCode2?.length === 3
      ) {
        setPlateIsValid(true);
      } else {
        setPlateIsValid(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provinceCode, licenseCode2, licenseCode1]);
  useEffect(() => {
    if (setAlphabetCode) {
      if (isValue(alphabetCode)) {
        setAlphabetCode(alphabetCode);
      } else {
        setAlphabetCode("الف");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto flex h-[48px]  w-full max-w-full rounded">
        <section className="flex  rounded-r  border-y-[0.4px] border-r-[0.4px] border-solid border-[#A6A9BD] ">
          <section className="flex h-full w-[46px] items-center justify-center border-l-[0.4px] border-solid border-[#A6A9BD] ">
            <section className="flex h-[32px] w-[30px] items-center justify-center rounded-[5px] border border-solid border-[#8B929A36] ">
              <input
                type="text"
                className=" h-[28px] w-[24px] pr-px outline-none"
                placeholder="50"
                value={provinceCode}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^\d۰-۹\u0660-\u0669]/g, "");
                  value = value.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));
                  value = value.replace(/[\u0660-\u0669]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1584));
                  setProvinceCode(value);
                }}
                maxLength={2}
              />
            </section>
          </section>
          <section className=" flex h-full w-[201px] items-center justify-center gap-2">
            <section className="flex h-[32px] w-[65px] items-center justify-center rounded-[5px] border border-solid border-[#8B929A36] ">
              <input
                type="text"
                className="h-[28px] w-[33px] outline-none"
                placeholder="345"
                value={licenseCode2}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^\d۰-۹\u0660-\u0669]/g, "");
                  value = value.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));
                  value = value.replace(/[\u0660-\u0669]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1584));
                  setLicenseCode2(value);
                }}
                maxLength={3}
              />
            </section>
            <section className="flex h-[32px] w-[52px] justify-center rounded-[5px] border border-solid border-[#8B929A36]">
              <select
                className="w-[48px] focus:outline-none"
                onChange={(e) => setAlphabetCode(e.target.value)}
                value={alphabetCode}

              >

                <option value={"الف"} selected>
                  الف
                </option>
                <option value={"ب"}>ب</option>
                <option value={"پ"}>پ</option>
                <option value={"ت"}>ت</option>
                <option value={"ث"}>ث</option>
                <option value={"ج"}>ج</option>
                <option value={"د"}>د</option>
                <option value={"ز"}>ز</option>
                <option value={"ژ"}>ژ</option>
                <option value={"س"}>س</option>
                <option value={"ش"}>ش</option>
                <option value="ص">ص</option>
                <option value={"ط"}>ط</option>
                <option value={"ع"}>ع</option>
                <option value={"ف"}>ف</option>
                <option value={"ق"}>ق</option>
                <option value={"ک"}>ک</option>
                <option value={"گ"}>گ</option>
                <option value={"ل"}>ل</option>
                <option value={"م"}>م</option>
                <option value={"ن"}>ن</option>
                <option value={"و"}>و</option>
                <option value={"ه"}>ه</option>
                <option value={"ی"}>ی</option>
                <option value={"معلولین"}>معلولین</option>
                <option value={"تشریفات"}>تشریفات</option>
                <option value="خاص">خاص</option>
                <option value={"D"}>D</option>
                <option value={"S"}>S</option>
              </select>
            </section>
            <section className="flex h-[32px] w-[52px] items-center justify-center rounded-[5px] border border-solid border-[#8B929A36] ">
              <input
                type="text"
                className="mr-px w-[22px] outline-none"
                placeholder="66"
                value={licenseCode1}
                onChange={(e) => {
                  let value = e.target.value.replace(/[^\d۰-۹\u0660-\u0669]/g, "");
                  value = value.replace(/[۰-۹]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1728));
                  value = value.replace(/[\u0660-\u0669]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 1584));
                  setLicenseCode1(value);
                }}
                maxLength={2}
              />
            </section>
          </section>
        </section>
        <Image
          src="/assets/images/plate.png"
          width={33.8}
          height={48.8}
          className=""
          alt=""
        />
      </section>
    </>
  );
}
