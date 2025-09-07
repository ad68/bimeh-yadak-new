"use client";
import React from "react";
import CarRight from "./components/CarRight";
import CarFront from "./components/CarFront";
import CarBack from "./components/CarBack";
import CarLeft from "./components/CarLeft";
import { usePriceDropStore } from "@/store/tools/pricedrop";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const coloredParts = usePriceDropStore((state) => state.coloredParts);
  const replacedParts = usePriceDropStore((state) => state.replacedParts);
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="row-span-2  mt-4 grid h-[532px]  w-full grid-cols-2 gap-4  ">
      <CarRight replacedParts={replacedParts} coloredParts={coloredParts} />
      <CarFront replacedParts={replacedParts} coloredParts={coloredParts} />
      <CarBack replacedParts={replacedParts} coloredParts={coloredParts} />
      <CarLeft replacedParts={replacedParts} coloredParts={coloredParts} />

    </section>
  );
}
