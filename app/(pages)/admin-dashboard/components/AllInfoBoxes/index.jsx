'use client'
import { useAxiosWithToken } from '@/hooks';
import Item from './components/Box'
import { api } from '@/api';

import { useEffect, useState } from 'react';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [allInfo, setAllInfo] = useState({})
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const getData = () => {
        useAxiosWithToken.get(api.dashboard.getAllInfoCount).then(res => {
            setAllInfo(res.data)
        })
    }
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        getData()
    }, [])
    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <section className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <Item count={allInfo?.totalInsurancePolicies} title="کل بیمه نامه ها" />
        <Item count={allInfo?.totalApprovedInsurance} title="بیمه نامه های خریداری شده" />
        <Item count={allInfo?.totalInitialInsurance} title="ثبت نام اولیه" />
        <Item count={allInfo?.totalCollaborationRequest} title="درخواست های همکاری بازاریاب" />
        <Item count={allInfo?.totalTechnicianRequest} title="درخواست های همکاری امدادگر" />
        <Item count={allInfo?.totalRoadSideAssistance} title="کل درخواست های امداد" />
    </section>;
}
