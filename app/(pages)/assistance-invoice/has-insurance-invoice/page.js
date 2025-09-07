'use client'
import { api } from "@/api";
import { ErrorMessage, TextBox, Button } from "@/common";
import { Regex } from "@/enums";
import { useAxios } from "@/hooks";
import Description from '../components/Description'
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import InvoiceInfoForm from '../components/InvoiceInfoForm'
import Link from "next/link";
import { notify } from "@/helper";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ setActiveForm }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    // ─── States ─────────────────────────────────────────────────────────────────────
    const [actionLoading, setActionLoading] = useState(false)
    const [showInfoForm, setShowInfoForm] = useState(false)
    const [invoiceData, setInvoiceData] = useState()
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const getInfo = (data) => {
        setActionLoading(true);
        useAxios
            .get(api.rescuerInvoice.getRescuerInvoice, { params: data })
            .then((res) => {
                setActionLoading(false);
                setShowInfoForm(true)
                setInvoiceData(res.data)
            })
            .catch((err) => {
                setActionLoading(false);

            });
    };
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return (
        <>

            {
                showInfoForm ? <InvoiceInfoForm info={invoiceData} /> : <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                    <section>
                        <form
                            className="grid grid-cols-1 gap-5 xl:grid-cols-1"
                            onSubmit={handleSubmit((data) => getInfo(data))}
                        >
                            <section className="flex  flex-col gap-[2px]  text-sm">
                                <label className="pt-[6px]">شناسه امدادگر</label>
                                <Controller
                                    control={control}
                                    name="technicianUniqueCode"
                                    rules={{
                                        required: "شناسه امدادگر ثالث اجباری است",
                                        pattern: {
                                            value: Regex.NUMBER,
                                            message: "شناسه امدادگر باید عدد باشد",
                                        },
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextBox
                                            onChange={onChange}
                                            value={value}
                                            placeholder="شناسه امدادگر را وارد کنید"
                                            className="h-[48px] rounded-lg "
                                        />
                                    )}
                                />
                                <ErrorMessage>{errors?.technicianUniqueCode?.message}</ErrorMessage>
                            </section>
                            <section className="flex  flex-col gap-[2px]  text-sm">
                                <label className="pt-[6px]">کد رهگیری بیمه نامه</label>
                                <Controller
                                    control={control}
                                    name="insurancePolicyNumberId"
                                    rules={{
                                        required: "کد رهگیری بیمه نامه اجباری است",
                                        pattern: {
                                            value: Regex.NUMBER,
                                            message: "شماره بیمه شخص ثالث باید عدد باشد",
                                        },
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextBox
                                            onChange={onChange}
                                            value={value}
                                            placeholder="کد رهگیری بیمه نامه را وارد کنید"
                                            className="h-[48px] rounded-lg "
                                        />
                                    )}
                                />
                                <ErrorMessage>{errors?.insurancePolicyNumberId?.message}</ErrorMessage>
                            </section>
                            <section className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                                <Link className="block w-[100%]" href="/assistance-invoice"><Button className="w-full" outlined={true}>بازگشت</Button></Link>

                                <Button loading={actionLoading} type="submit">استعلام</Button>
                            </section>
                        </form>
                    </section>
                    <Description />
                </section>
            }
        </>



    )



}




