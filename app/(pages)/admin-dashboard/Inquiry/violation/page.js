"use client";
import React, { useState } from "react";
import Misconduct from "./components/Misconduct";
import MisconductBg from "./components/MisconductBg";
import UserInfo from "./components/violationtype/userInfo";
import ViolationType from "./components/violationtype";
import SendOtp from "./components/violationtype/sendotp";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [step, setStep] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className='mx-6 flex items-center gap-2 xl:mx-0 '>
        <h2 className='font-semibold text-[#505050] xl:text-[28px]'>لیست استعلام</h2>
        <section className='h-8 w-[1px] bg-[#8B929A36]'></section>
        <h2 className='text-sm font-semibold text-[#0165E1] xl:text-2xl'>استعلام خلافی</h2>
      </section>
      <section className='flex  flex-wrap gap-[48px] xl:gap-[93px]'>
        {step === 1 ? (
          <Misconduct setStep={setStep} />
        ) : step === 2 ? (
          <ViolationType setStep={setStep} />
        ) : step === 3 ? (
          <UserInfo setStep={setStep} />
        ) : step === 4 ? (
          <SendOtp />
        ) : (
          ""
        )}
        <MisconductBg />
      </section>
    </>
  );
}
