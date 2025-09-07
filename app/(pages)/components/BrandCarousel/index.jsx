import MainFilter from "./components/MainFilter";
import Brands from "./components/Brands";
import { IconSearch } from "@/common/icons";

import { useContext, useEffect } from "react";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="container mt-20 md:mt-[180px] ">
      <MainFilter />
      <section className="mb-10 mt-12 h-10 flex-col  items-center justify-between px-[13px] md:mb-0 md:mt-14 md:flex  md:flex-row ">
        <section className="my-4 text-[28px] font-semibold  md:my-0">
          جستجوی قیمت بر اساس برند
        </section>
        {/* ********************************************** */}
        <section
          className="relative mb-8 h-10 w-[364px] items-center  justify-between gap-3 rounded-full border border-solid border-gray-100 bg-white px-3 drop-shadow md:mb-0 md:w-[448px]

"
        >
          <span className="absolute inset-y-0 left-0 flex w-full items-center justify-between pr-4">
            <input
              aria-label="ar"
              type="text"
              className="text-base font-semibold text-[#A6A9BD] outline-none "
              placeholder="جستجوی نام برند"
            />
            <button
              type="submit"
              className="focus:shadow-outline p-1 pl-4 focus:outline-none"
            >
              <IconSearch
                className="ml-1 mt-1"
                color="#0165E1"
                fill="#0165E1"
                width={18}
                height={18}
                strokeWidth="0"
              />
            </button>
          </span>
        </section>
      </section>
      <section className="w-screen px-8 pt-20 md:container">
        <Brands />
      </section>
      {/* **************************************************** */}
    </section>
  );
}
