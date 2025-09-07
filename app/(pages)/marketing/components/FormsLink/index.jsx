
'use client'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

import { Button } from "@/common";
import Image from "next/image";

export default function Index({ text, icon, setActiveForm, activeForm, commingSoon }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <section className="w-[100%] border border-[#f7f7f7] h-[280px] relative p-2 leading-2 gap-5 bg-white shadow-2xl hover:shadow-yellow-300 rounded-md text-[14px] text-black flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-700 hover:scale-105">
        <Image className="w-[50px]" src={icon} alt="" />
        <span className="text-slate-700 text-[17px]">{text}</span>
        {commingSoon ? <Button className="h-[40px]">
            به زودی
        </Button> : <Button onClick={() => setActiveForm(activeForm)} className="h-[40px]">
            ثبت نام
        </Button>}



    </section>;
}
