"use client"
import { useState } from "react";
import SalesExpert from "../SalesExpert";
import Description from "../Description";
import FormsLink from '../FormsLink'
import Building from '../../../../../public/assets/svg/building.svg'
import Support from '../../../../../public/assets/svg/support.svg'
import { Button } from "@/common";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [activeForm, setActiveForm] = useState(false)
    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <>
        <section className="w-[1200px] max-w-[90%] m-auto  p-5 rounded-md">
            <section className="grid grid-cols-1 xl:grid-cols-2 gap-10  max-w-full">
                <section className="order-first">
                    {activeForm === false && <section className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:mt-28">
                        <FormsLink setActiveForm={setActiveForm} activeForm={1} icon={Support} text="ثبت نام شخص حقیقی به عنوان کارشناس فروش" />
                        <FormsLink commingSoon={true} setActiveForm={setActiveForm} activeForm={2} icon={Building} text="ثبت نام کارگزاری ها و نمایندگی های بیمه به عنوان کارشناسان فروش" />
                    </section>}
                    <section>
                        {activeForm !== false && <section className="flex justify-end">
                            <Button outlined={true} className="cursor-pointer h-[35px] text-[14px]" onClick={() => setActiveForm(false)}>بازگشت</Button>
                        </section>}
                        {activeForm === 1 && <SalesExpert />}
                    </section>
                </section>
                <Description />
            </section>
        </section>
    </>;
}
