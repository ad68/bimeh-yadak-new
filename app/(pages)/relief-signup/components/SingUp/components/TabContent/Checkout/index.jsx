import { Button } from "@/common";
import { NotifyMessage } from "@/enums";
import { notify, numberWithCommas, scrollToTop } from "@/helper";
import { useAxios } from "@/hooks";
import { useEffect, useState } from "react";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ preRegisterData, preRegisterId, setActiveTab, plateMode, activeTab }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [actionLoading, setActionLoading] = useState(false)
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const requestPayment = () => {
        setActionLoading(true)
        useAxios.get("https://api.tazminmashin.com/tazmin/tazmin-mashin/payment/bimehyadak/" + preRegisterId).then(res => {
            location.href = res.data.url
        }).catch(err => {
            setActionLoading(false)

        })
    }
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        scrollToTop()
    }, [activeTab])
    const getPlatePercent = () => {
        if (plateMode === "normal") {
            return 0.05
        }
        else if (plateMode === "free") {
            return 0.1
        }
    }
    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return (
        <>
            <section className="w-[600px] max-w-[90%] m-auto mt-10 flex flex-col gap-1 bg-rose-100 rounded-md p-5">
                <strong className="text-red font-bold text-center text-lg">توجه:</strong>
                <p className="text-red text-center">
                    قبل از زدن دکمه پرداخت و ورود به درگاه پرداخت حتما <strong className="text-xl">VPN</strong> خود را خاموش کنید
                </p>
            </section>
            <section className="w-[600px] max-w-[90%] m-auto mt-2 flex flex-col gap-5 bg-[whitesmoke] p-5">
                <section>
                    <span>نوع سرویس:</span>
                    <span className="font-bold mr-1">بیمه امداد حمل رایگان</span>
                </section>
                <section>
                    <span>سقف تعهد:</span>
                    <span className="mr-1">{numberWithCommas(preRegisterData?.coverageAmount)} تومان</span>
                </section>
                <section >
                    <span>قیمت بیمه نامه :</span>
                    <span className="mr-1">{numberWithCommas(Number(preRegisterData?.coverageAmount) * getPlatePercent())} تومان</span>
                </section>
                <section >
                    <span>مالیات بر ارزش افزوده:</span>
                    <span className=" mr-1">{numberWithCommas((Number(preRegisterData?.coverageAmount) * getPlatePercent()) / 10)} تومان</span>
                </section>
                <hr />
                <section>
                    <span className="text-lg">مبلع قابل پرداخت:</span>
                    <span className="font-bold mr-1 text-lg xl:text-xl">{numberWithCommas((Number(preRegisterData?.coverageAmount) * getPlatePercent()) / 10 + Number(preRegisterData?.coverageAmount) * getPlatePercent())} تومان</span>
                </section>
                <section className="flex gap-2">
                    <Button onClick={() => setActiveTab(2)} className="w-[40%]" outlined={true}>مرحله قبل</Button>
                    <Button className="w-[60%]" loading={actionLoading} onClick={requestPayment}>پرداخت</Button>
                </section>
            </section>
        </>
    )
}



