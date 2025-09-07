
'use client'
import PlateCar from '@/(pages)/dashboard/components/PlateReadonly/plateCar'
import InfoItem from './components/InfoItem'
import { numberWithCommas } from '@/helper'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import CheckIcon from '../../../../../../../public/assets/icons/check.png'
import SelectLocation from '../SelectLocation'
import { useAxios } from '@/hooks'
import { api } from '@/api'
import { Button, Modal } from '@/common'
import Link from 'next/link'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ userInfo }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [currentPlate, setCurrentPlat] = useState({})
    const [actionLoading, setActionLoading] = useState(false)
    const [longData, setLongData] = useState(-308.5904);
    const [latData, setLatData] = useState(35.7249);
    const [address, setAddress] = useState("")
    const [showSuccess, setShowSuccess] = useState(false)
    // ─── Functions ──────────────────────────────────────────────────────────────────
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        if (userInfo.length > 0) {
            setCurrentPlat(userInfo[0])
        }
    }, [userInfo])
    const saveInfo = () => {
        setActionLoading(true)
        let params = {
            registrationInsuranceId: currentPlate.id,
            latitude: latData,
            longitude: longData,
            address: address
        }
        useAxios.post(api.roadSideAssistance.addRoadSideAssistance, params).then(res => {
            setShowSuccess(true)
            setActionLoading(false)
        }
        ).catch(err => {
            setActionLoading(false)
        })
    }
    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <section className='w-[900px] max-w-[90%] m-auto'>
        <section className='text-center border border-silver rounded-lg p-4 text-green-600'>
            کاربر گرامی، پلاک‌های زیر دارای بیمه‌نامه معتبر هستند. لطفاً پلاک موردنظر خود را برای درخواست <Link href="https://emdadkhodro1593.ir/" className="text-blue underline">امدادخودرو</Link>
            انتخاب کرده و سپس موقعیت مکانی خود را روی نقشه مشخص کنید.
        </section>
        <section className='grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-0 mt-[80px]'>
            <section className='flex flex-col gap-4 items-center xl:items-start'>
                {userInfo?.map((item, index) => (<section className='cursor-pointer' key={index} onClick={() => setCurrentPlat(item)}>
                    <section className={`${item.id === currentPlate.id ? `opacity-100` : `opacity-50`} flex relative justify-center transition-all items-center gap-1`}>
                        <section className='w-[20px] h-[20px]'>
                            {
                                item.id === currentPlate.id && <Image className='w-[20px] h-[20px]' alt='' src={CheckIcon} />
                            }
                        </section>
                        <PlateCar platePart1={item.licenseCode1} platePart2={item.alphabetCode} platePart3={item.licenseCode2} platePart4={item.provinceCode} />
                    </section>
                </section>))}
            </section>
            <section className='flex flex-col gap-4 mt-30 bg-[whitesmoke] p-3 rounded-lg'>
                <InfoItem label="نام" value={currentPlate?.firstName} />
                <InfoItem label="نام خانوادگی" value={currentPlate?.lastName} />
                <InfoItem label="کد ملی" value={currentPlate?.nationalCode} />
                <InfoItem label="شماره موبایل" value={currentPlate?.mobileNumber} />
                <InfoItem label="شماره بیمه نامه" value={currentPlate?.numberInsurance} />
                <InfoItem label="سقف تعهد" value={`${numberWithCommas(currentPlate?.coverageAmount)} تومان`} />
                <InfoItem label="باقی سقف تعهد" value={`${numberWithCommas(currentPlate?.remainingCoverageAmount)} تومان`} />
            </section>
            <section className='preReg xl:col-span-2 mt-4'>
                <SelectLocation longData={longData} setLongData={setLongData} latData={latData} setLatData={setLatData} />
            </section>
            <section className='xl:col-span-2 mt-10'>
                <label>آدرس:</label>
                <textarea onChange={(e) => setAddress(e.target.value)} rows={4} className='border-2 p-5 w-full mt-2 rounded-lg'></textarea>
            </section>
            <section className='xl:col-span-2'>
                <Button loading={actionLoading} className='w-full mt-10' onClick={saveInfo}>ثبت درخواست</Button>
            </section>
        </section>
        <Modal open={showSuccess} >
            <Image src={CheckIcon} alt="" className="w-[80px] h-[80px] m-auto" />
            <p className='text-[green] text-center mt-5 font-bold'>کاربر گرامی درخواست شما با موفقیت ثبت شد.</p>
            <p className="text-grey text-center mt-4">
                امدادگران ما در اسرع وقت با شما تماس گرفته و به محل اعزام خواهند شد
            </p>
            <Link href="/">
                <Button className="m-auto mt-10">
                    بازگشت به سایت
                </Button>
            </Link>
        </Modal>



    </section>
}
