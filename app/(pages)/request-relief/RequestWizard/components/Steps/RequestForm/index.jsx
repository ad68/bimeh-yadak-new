"use client";
import { api } from "@/api";
import { Button, ErrorMessage, Modal, TextBox } from "@/common";
import { Regex } from "@/enums";
import { useAxios } from "@/hooks";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Warning from '../../../../../../../public/assets/icons/warning.svg'
import Image from "next/image";

export default function Index({ setUserInfo, setActive }) {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const [actionLoading, setActionLoading] = useState(false);
    const [showError, setShowError] = useState(false)
    const onSubmit = (data) => {
        let params = {
            mobileNumber: data.mobileNumber,
            nationalCode: data.nationalCode,
        };
        setActionLoading(true);
        useAxios
            .get(api.preRegistrationInsurance.searchList, { params: { ...params } })
            .then((res) => {
                setUserInfo(res.data)
                setActionLoading(false);

                setActive(2)
            })
            .catch((err) => {
                setActionLoading(false);
                if (err.status === 404) {
                    setShowError(true)
                }
            });
    };

    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 w-[900px] max-w-full m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full  xl:w-[350px]">
                <section className="flex flex-col xl:gap-6 justify-center">
                    <section className="flex  flex-col gap-[2px]  text-sm">
                        <label className="pt-[6px] ">تلفن همراه </label>
                        <Controller
                            control={control}
                            name="mobileNumber"
                            rules={{
                                required: "شماره همراه اجباری است",
                                pattern: {
                                    value: Regex.MOBILE,
                                    message: "شماره همراه  را به درستی وارد کنید",
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextBox
                                    onChange={onChange}
                                    value={value}
                                    placeholder="شماره همراه حود راوارد کنید"
                                    className="  h-[48px]  rounded-lg border"
                                />
                            )}
                        />
                        <ErrorMessage>{errors?.mobileNumber?.message}</ErrorMessage>
                    </section>
                    <section className="flex  flex-col gap-[2px] text-sm">
                        <label className="pt-[6px]">کدملی </label>
                        <Controller
                            control={control}
                            name="nationalCode"
                            rules={{
                                required: "کد ملی اجباری است",
                                pattern: {
                                    value: Regex.NATIONAL_CODE,
                                    message: "کد ملی را به درستی وارد کنید",
                                },
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextBox
                                    onChange={onChange}
                                    value={value}
                                    placeholder="کد ملی را وارد کنید"
                                    className="h-[48px] rounded-lg "
                                />
                            )}
                        />
                        <ErrorMessage>{errors?.nationalCode?.message}</ErrorMessage>
                    </section>
                    <section className="flex justify-center mt-6">
                        <Button
                            loading={actionLoading}
                            className=" h-[48px] w-full border-none text-lg  leading-[27.9px] xl:mb-0  "
                        >
                            مرحله بعد
                        </Button>
                    </section>
                </section>


                <Modal open={showError} onClose={() => setShowError(false)}>
                    <Image src={Warning} alt="" className="w-[100px] h-[100px] m-auto" />
                    <p className="text-red text-center">کابر گرامی بیمه نامه ای برای شما یافت نشد</p>
                    <p className="text-grey text-center mt-5">
                        لطفا قبل از درخواست <Link href="https://emdadkhodro1593.com/" className="text-blue underline">امدادخودرو</Link> برای وسیله نقلیه خود بیمه نامه تهیه کنید
                    </p>
                    <Link href="/relief-signup" className="w-full p-4 bg-primary text-white block rounded-md mt-5 text-center" >خرید بیمه نامه</Link>
                </Modal>

            </form>
            <section className="order-first xl:order-last">
                <Image src="/assets/images/Group crash.svg" width={460} height={300} alt="" className="mx-auto h-[152px] w-full  xl:h-[200px]" />
                <section className="mt-10">
                    <span className="text-primary font-bold block text-center text-[20px]">
                        کاربر گرامی!
                    </span>
                    <p className="text-justify font-light mt-5">
                        فقط در صورت داشتن بیمه نامه قادر خواهید بود از این سرویس استفاده کنید.پس از ثبت درخواست امدادگران ما در اسرع وقت با شما تماس گرفته و به محل اعزام خواهند شد.

                    </p>
                </section>
            </section>
        </section>
    );
}
