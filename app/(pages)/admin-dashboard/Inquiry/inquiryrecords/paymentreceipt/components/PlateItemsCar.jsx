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
    <section className="h-auto xl:w-[410px] 2xl:w-[410px] max-w-full rounded-[5px] border border-solid border-[#8B929A36]">
      <section className="mt-4 mb-6 flex mx-4 items-center justify-between">
        
        <PlateCar platePart1={platePart1} platePart2={platePart2} platePart3={platePart3} platePart4={platePart4}/>
      </section>

    </section>
  );
}
