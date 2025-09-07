
import React, { useState, useContext, useEffect } from 'react'
import Header from './components/Header'
import CarInfoChart from './components/CarInfoChart'
import DamagedBody from './components/DamagedBody'
import DamageListBody from './components/DamageList'
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
        <>
            <Header />
            <CarInfoChart />
            <DamagedBody />
            <DamageListBody />
            <section className='w-full h-[60px]  p-3 text-xs flex items-center mt-2'>
                محل مهر شرکت
            </section>
        </>

    )
}
