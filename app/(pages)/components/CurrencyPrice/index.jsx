import { api } from "@/api";
import { consoleLog_Blue, numberWithCommas } from "@/helper";
import { useFetch } from "@/hooks";
import { DollarOutlined, EuroCircleOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const [data] = useFetch(api.currency);
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-5">
      <section className="flex h-[50px] items-center justify-between rounded-md bg-white px-4 shadow-lg">
        <span className="flex items-center">
          <DollarOutlined className="ml-2 text-3xl text-orange-500" />
          قیمت روز دلار
        </span>
        <span className="font-bold">
          {numberWithCommas(data[0]?.value)} تومان
        </span>
      </section>
      <section className="flex h-[50px] items-center justify-between rounded-md bg-white px-4 shadow-lg">
        <span className="flex items-center">
          <EuroCircleOutlined className="ml-2 text-3xl text-blue" />
          قیمت روز یورو
        </span>
        <span className="font-bold">
          {numberWithCommas(data[1]?.value)} تومان
        </span>
      </section>
    </section>
  );
}
