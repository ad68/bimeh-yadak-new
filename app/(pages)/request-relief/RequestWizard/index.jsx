'use client'
import { useState } from "react";
import RequestForm from './components/Steps/RequestForm'
import SelectPlate from './components/Steps/SelectPlate'

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [active, setActive] = useState(1)
    const [userInfo, setUserInfo] = useState([])

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <>
        {active === 1 && <section className="w-full">
            <RequestForm setActive={setActive} setUserInfo={setUserInfo} />
        </section>}
        {active === 2 && <section className="w-full">
            <SelectPlate userInfo={userInfo} />
        </section>}


    </>;
}
