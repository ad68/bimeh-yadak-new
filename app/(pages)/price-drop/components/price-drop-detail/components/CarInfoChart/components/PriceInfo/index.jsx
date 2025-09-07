"use client";
import React from "react";
import PriceItem from "./components/PriceItem";
import { numberWithCommas } from "@/helper";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ resultData }) {
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
        <section className="mt-10 flex h-[102px] w-full rounded-[15px] shadow-[0px_18px_40px_0px_#77BBFF1F]">
            <PriceItem
                price={numberWithCommas(resultData?.priceDown)}
                title="حداقل قیمت"
                bgColor="bg-[#D90000]"
            />
            <PriceItem
                price={numberWithCommas(resultData?.price)}
                title="قیمت کارشناسی"
                bgColor="bg-[#6AD2FF]"
            />
            <PriceItem
                border="border-none"
                price={numberWithCommas(resultData?.priceUp)}
                title="حداکثر قیمت"
                bgColor="bg-[#00FF3A]"
            />
        </section>
    );
}
