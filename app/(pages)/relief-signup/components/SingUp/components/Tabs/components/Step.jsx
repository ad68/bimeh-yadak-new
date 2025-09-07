import { useState, useContext, useEffect } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ stepNumber, activeType }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────
    const getStepStyle = () => {
        if (activeType === "active") {
            return "border-primary text-primary bg-white"
        }
        if (activeType === "passed") {
            return "border-primary text-[black] bg-primary"
        }
        if (activeType === "notActive") {
            return "border-black text-[black] bg-white"
        }
    }
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <span className={`w-[50px] h-[50px] ${getStepStyle()} flex border border-1   rounded-full  justify-center items-center`}>
        {stepNumber}
    </span>;
}
