"use client";
import React, { useState } from "react";
import Image from "next/image";
import PlateCar from './PlateCar';
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  platePart1,platePart2,platePart3,platePart4
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="h-auto w-[219.93px] mx-auto   max-w-full ">
      <section className="mt-4 mb-6 grid ">
        <h3 className="text-left text-[12px] text-[#4E94EA]">ویرایش پلاک</h3>
        <PlateCar platePart1={platePart1} platePart2={platePart2} platePart3={platePart3} platePart4={platePart4}/>
      </section>

    </section>
  );
}
