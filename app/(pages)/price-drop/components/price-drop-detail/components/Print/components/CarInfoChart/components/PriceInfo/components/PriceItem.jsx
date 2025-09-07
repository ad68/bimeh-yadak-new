"use client";
import { title } from "process";
import React from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ price, title, border }) {
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
        <>
            <section
                className={`  flex h-full w-full flex-col items-center justify-center gap-2  `}
            >
                <section className="flex  items-center gap-2 text-[10px] font-medium text-[#A3AED0]">

                    {title}
                </section>
                <section
                    className={`${border ? border : "border-l   border-solid border-[#E9EDF7]"} flex w-full flex-col items-center `}
                >
                    <span className="text-[11px] text-[#2B3674]">{price}</span>
                    <span className="text-[11px] font-medium text-[#2B3674]">تومان</span>
                </section>
            </section>
        </>
    );
}
