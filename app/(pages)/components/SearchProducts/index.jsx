"use client";
import { useState, useEffect } from "react";
import Product from "./components/Product";
import MainFilter from "./components/MainFilter";
import Filters from "./components/Filters";
import Car1 from "../../../../public/assets/images/products/car1.png";
import Car2 from "../../../../public/assets/images/products/car2.png";
import Car3 from "../../../../public/assets/images/products/car3.png";
import Car4 from "../../../../public/assets/images/products/car4.png";
import Car5 from "../../../../public/assets/images/products/car5.png";
import Car6 from "../../../../public/assets/images/products/car6.png";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [filterType, setFilterType] = useState("2");
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    // console.log(filterType);
  }, [filterType]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="mt-10 md:mt-24 ">
      {/* <MainFilter /> */}
      <Filters setFilterType={setFilterType} filterType={filterType} />
      <section
        className={
          filterType === "2"
            ? "mt-12 gap-4 md:grid md:grid-cols-2"
            : "mt-12 gap-4 md:grid md:grid-cols-1"
        }
      >
        <Product pic={Car1} />
        <Product pic={Car2} />
        <Product pic={Car3} />
        <Product pic={Car4} />
        <Product pic={Car5} />
        <Product pic={Car6} />
        <Product pic={Car6} />
        <Product pic={Car5} />
      </section>
      <section className="mt-10 text-center">
        <button className="inline-flex h-12 min-w-[137px] items-center justify-center rounded-md bg-blue text-white ">
          مشاهده بیشتر
        </button>
      </section>
    </section>
  );
}
