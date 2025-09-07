"use client";
import { useEffect, useState } from "react";
import MainFilter from "./components/MainFilter";
import CarsProduct from "./components/CarsProduct";
import MotorCycleProduct from "./components/MotorCycleProduct";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [typeProduct, setTypeProduct] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ────────────────────────────────────────  ──────────────────────────
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="mx-auto mt-60 md:mt-[180px] md:w-[95%] xl:mt-60 2xl:mt-40 ">
      <MainFilter typeProduct={typeProduct} setTypeProduct={setTypeProduct} />
      {typeProduct === 1 ? <CarsProduct /> : <></>}
      {typeProduct === 2 ? <MotorCycleProduct /> : <></>}
      {typeProduct === 3 ? (
        <h1 className="mt-12 text-center text-[40px]">بزودی</h1>
      ) : (
        <></>
      )}
    </section>
  );
}
