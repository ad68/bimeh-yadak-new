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

    <>
      <section className="flex mt-3">
        <CarRight replacedParts={replacedParts} coloredParts={coloredParts} />
        <CarLeft replacedParts={replacedParts} coloredParts={coloredParts} />
      </section>
      <section className="flex justify-around items-center mt-2">
        <CarFront replacedParts={replacedParts} coloredParts={coloredParts} />
        <CarBack replacedParts={replacedParts} coloredParts={coloredParts} />
      </section>
    </>
  );
}
