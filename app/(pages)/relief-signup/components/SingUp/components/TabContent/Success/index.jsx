'use client'
import { useAxios } from '@/hooks';
import Pdf from './components/Pdf'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
import Image from "next/image";
import Link from "next/link";
import { api } from '@/api';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { notify, scrollToTop } from '@/helper';
import { NotifyMessage } from '@/enums';
export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    /* const pdfData = {
        alphabetCode: "ک",
        cityId: 843,
        color: "رنگ نقره ای",
        coverageAmount: 8000000,
        expireDateInsurance: "2025-02-23",
        firstName: "مهدی",
        lastName: "درگاهی",
        licenseCode1: "99",
        licenseCode2: "448",
        mobileNumber: "09365544221",
        modelYear: 1401,
        nationalCode: "0013654785",
        numberInsurance: "0013654987",
        provinceCode: "27",
        provinceId: 23,
        referralCode: null,
        vehicleClass: "SAVARI",
        vin: "1HGCM82633A123456"
    }; */
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [pdfData, setPdfData] = useState()
    const [pdfLoading, setPdfLoading] = useState(false)
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const getInfo = () => {
        setPdfLoading(true)
        useAxios.get(api.preRegistrationInsurance.getPreRegistrationInfoById + id).then(res => {
            setPdfData(res.data)
            setPdfLoading(false)
        }).catch(err => {
            setPdfLoading(false)

        })
    }
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        getInfo()
        scrollToTop()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <>
        <h2 className="text-[18px] xl:text-[25px] font-bold text-center mt-[100px] flex justify-center gap-3 items-center relative">
            <Image src="/assets/icons/check.png" width={40} height={40} alt="" />
            <span>اطلاعات شما با موفقیت ثبت شد</span>
        </h2>
        <h2 className="text-[16px] px-4 xl:text-[20px] text-center mt-5">
            کاربر گرامی از طریق دکمه زیر  می توانید اقدام به دریافت بیمه نامه خود نمایید.
        </h2>
        {pdfData && <Pdf pdfData={pdfData} />}
        {pdfLoading && <section className='flex justify-center mt-10'>
            <section className='pdfLoader'></section>
        </section>}
        <Link className='block w-[200px] text-center m-auto mt-10 underline text-primary' href="/">بازگشت به صفحه اصلی</Link>
    </>
}
