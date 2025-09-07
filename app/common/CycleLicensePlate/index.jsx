"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  motorSecondSection,
  motorFirstSection,
  setPlateIsValid,
  setMotorFirstSection,
  setMotorSecondSection,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (setPlateIsValid) {
      if (motorSecondSection?.length === 3 && motorFirstSection?.length === 5) {
        setPlateIsValid(true);
      } else {
        setPlateIsValid(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [motorFirstSection, motorSecondSection]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="flex h-[48px] w-[90%] max-w-full rounded xl:w-[280px] ">
        <section className="flex  rounded-r  border-y-[0.4px] border-r-[0.4px] border-solid border-[#A6A9BD] ">
          <section className="flex h-full w-[142px] items-center justify-center border-l-[0.4px] border-solid border-[#A6A9BD] ">
            <section className="flex h-[32px] w-[125px] items-center justify-center rounded-[5px] border border-solid border-[#8B929A36] ">
              <input
                type="text"
                className=" h-[28px] w-[56px] outline-none "
                placeholder="45678"
                value={motorFirstSection}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  setMotorFirstSection(value);
                }}
                maxLength={5}
              />
            </section>
          </section>
          <section className="flex h-full w-[105px] items-center justify-center border-l-[0.4px] border-solid border-[#A6A9BD] ">
            <section className="flex h-[32px] w-[89px] items-center justify-center rounded-[5px] border border-solid border-[#8B929A36] ">
              <input
                type="text"
                className="mr-1 h-[28px] w-[33px] outline-none "
                placeholder="123"
                value={motorSecondSection}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  setMotorSecondSection(value);
                }}
                maxLength={3}
              />
            </section>
          </section>
        </section>
        <Image
          src="/assets/images/plate.png"
          width={33.4}
          height={48.8}
          className=""
          alt=""
        />
      </section>
    </>
  );
}
