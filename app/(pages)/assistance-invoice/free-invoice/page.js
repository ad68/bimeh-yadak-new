'use client'
import { api } from "@/api";
import { ErrorMessage, TextBox, Button, FreeOriginPlate, CarLicensePlate, Notify } from "@/common";
import { NotifyMessage, Regex } from "@/enums";
import { useAxios } from "@/hooks";
import Description from '../components/Description'
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FreeInvoiceForm from './components/FreeInvoiceForm'
import InvoiceInfoForm from '../components/FreeInvoiceInfoForm'
import Link from "next/link";
import { notify } from "@/helper";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const {
        handleSubmit,
        control,
        formState: { errors },
        watch
    } = useForm();
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [actionLoading, setActionLoading] = useState(false)
    const [showInfoForm, setShowInfoForm] = useState(0)
    const [invoiceData, setInvoiceData] = useState()
    const [technicianUniqueCode, setTechnicianUniqueCode] = useState()
    const [provinceCode, setProvinceCode] = useState();
    const [licenseCode2, setLicenseCode2] = useState();
    const [licenseCode1, setLicenseCode1] = useState();
    const [alphabetCode, setAlphabetCode] = useState();
    const [freeOriginLeftPart, setFreeOriginLeftPart] = useState('')
    const [freeOriginRightPart, setFreeOriginRightPart] = useState('')
    const [plateMode, setPlateMode] = useState("normal")
    const [nationalCode] = watch(["nationalCode"]);
    const [mobileNumber] = watch(["mobileNumber"]);
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const getInfo = (data) => {
        setActionLoading(true);
        let params = {
            technicianUniqueCode: data?.technicianUniqueCode,
            mobileNumber: data?.mobileNumber,
            nationalCode: data?.nationalCode,
            licenseCode1: licenseCode1,
            licenseCode2: licenseCode2,
            provinceCode: provinceCode,
            alphabetCode: alphabetCode
        };
        let params1 = {
            technicianUniqueCode: data?.technicianUniqueCode,
            mobileNumber: data?.mobileNumber,
            nationalCode: data?.nationalCode,
            freeLicenseCode: freeOriginLeftPart,
            freeLicenseProvinceCode: freeOriginRightPart,
        };
        useAxios
            .get(api.rescuerInvoice.getRescuerInvoice, { params: plateMode === "normal" ? params : params1 })
            .then((res) => {
                setActionLoading(false);
                if (res.data.freeRegistrationCarTransportOutputDTO === null) {
                    setShowInfoForm(1)
                    setTechnicianUniqueCode(res?.data?.technicianOutputDTO?.uniqueCode)
                }
                else {
                    setShowInfoForm(2)
                    setInvoiceData({
                        registrationInsuranceOutputDTO: res?.data?.freeRegistrationCarTransportOutputDTO,
                        technicianOutputDTO: res?.data?.technicianOutputDTO
                    })
                }
            })
            .catch((err) => {
                setActionLoading(false);
                notify.Error(NotifyMessage.GLOBAL_ERROR)
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
            <section className={`${showInfoForm === 1 ? "block" : "hidden"}`}>
                <FreeInvoiceForm firstNationalCode={nationalCode} firstMobileNumber={mobileNumber} firstLicenseCode1={licenseCode1} firstLicenseCode2={licenseCode2} firstAlphabetCode={alphabetCode} firstProvinceCode={provinceCode} setInvoiceData={setInvoiceData} setShowInfoForm={setShowInfoForm} technicianUniqueCode={technicianUniqueCode} />
            </section>
            <section className={`${showInfoForm === 2 ? "block" : "hidden"}`}>
                <InvoiceInfoForm info={invoiceData} />
            </section>
            <section className={`${showInfoForm === 0 ? "grid" : "hidden"}  grid-cols-1 gap-5 xl:grid-cols-2`}>
                <section>
                    <form
                        className="grid grid-cols-1 gap-5 xl:grid-cols-1"
                        onSubmit={handleSubmit((data) => getInfo(data))}
                    >
                        <section className="flex flex-col gap-[2px] text-sm">
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
                        {/* <section className="flex flex-col gap-[2px] text-sm">
                                <label className="pt-[6px]">کد ملی امدادگر</label>
                                <Controller
                                    control={control}
                                    name="technicianNationalCode"
                                    rules={{
                                        required: "کد ملی امدادگر ثالث اجباری است",
                                        pattern: {
                                            value: Regex.NUMBER,
                                            message: "کد ملی امدادگر باید عدد باشد",
                                        },
                                    }}
                                    render={({ field: { onChange, value } }) => (
                                        <TextBox
                                            onChange={onChange}
                                            value={value}
                                            placeholder="کد ملی امدادگر را وارد کنید"
                                            className="h-[48px] rounded-lg "
                                        />
                                    )}
                                />
                                <ErrorMessage>{errors?.technicianUniqueCode?.message}</ErrorMessage>
                            </section> */}
                        <section className="flex  flex-col gap-[2px]  text-sm">
                            <label className="pt-[6px] ">تلفن همراه امداد خواه </label>
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
                                        placeholder="شماره همراه را وارد کنید"
                                        className="  h-[48px] rounded-lg border"
                                    />
                                )}
                            />
                            <ErrorMessage>{errors?.mobileNumber?.message}</ErrorMessage>
                        </section>
                        <section className="flex  flex-col gap-[2px] text-sm">
                            <label className="pt-[6px]">کد ملی امداد خواه</label>
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
                        {plateMode === "normal" && <section className="flex w-full flex-col gap-[2px] text-sm">
                            <section className="flex">
                                {/*  <label className="">شماره پلاک</label> */}
                                <section className="flex items-center gap-2 mr-2">
                                    <span>نوع پلاک:</span>
                                    <span onClick={() => setPlateMode("normal")} className={`${plateMode === "normal" ? `bg-red text-white` : `bg-[whitesmoke] text-black`} rounded-md p-1 border border-[gray] cursor-pointer`}>پلاک عادی</span>
                                    <span onClick={() => setPlateMode("free")} className={`${plateMode === "free" ? `bg-red text-white` : `bg-[whitesmoke] text-black`}  rounded-md border p-1 border-[gray] cursor-pointer`}>پلاک مناطق آزاد</span>
                                </section>
                            </section>
                            <Controller
                                control={control}
                                name="CarLicensePlate"
                                rules={{
                                    required: "فیلدهای پلاک را به درستی پر کنید",
                                }}
                                render={({ field: { onChange } }) => (
                                    <CarLicensePlate
                                        provinceCode={provinceCode}
                                        setProvinceCode={setProvinceCode}
                                        licenseCode2={licenseCode2}
                                        setLicenseCode2={setLicenseCode2}
                                        licenseCode1={licenseCode1}
                                        setLicenseCode1={setLicenseCode1}
                                        alphabetCode={alphabetCode}
                                        setAlphabetCode={setAlphabetCode}
                                        setPlateIsValid={onChange}
                                    />
                                )}
                            />
                            <ErrorMessage>{errors?.CarLicensePlate?.message}</ErrorMessage>
                        </section>}

                        {plateMode === "free" && <section className="flex w-full flex-col gap-[2px]  text-sm">
                            <section className="flex items-center gap-2 mr-2">
                                <span>نوع پلاک:</span>
                                <span onClick={() => setPlateMode("normal")} className={`${plateMode === "normal" ? `bg-red text-white` : `bg-[whitesmoke] text-black`} rounded-md p-1 border border-[gray] cursor-pointer`}>پلاک عادی</span>
                                <span onClick={() => setPlateMode("free")} className={`${plateMode === "free" ? `bg-red text-white` : `bg-[whitesmoke] text-black`} rounded-md border p-1 border-[gray] cursor-pointer`}>پلاک مناطق آزاد</span>
                            </section>
                            <Controller
                                control={control}
                                name="FreeOriginLicensePlate"
                                rules={{
                                    required: "فیلدهای پلاک را به درستی پر کنید",
                                }}
                                render={({ field: { onChange } }) => (
                                    <FreeOriginPlate
                                        setPlateIsValid={onChange}
                                        freeOriginLeftPart={freeOriginLeftPart}
                                        setFreeOriginLeftPart={setFreeOriginLeftPart}
                                        freeOriginRightPart={freeOriginRightPart}
                                        setFreeOriginRightPart={setFreeOriginRightPart}
                                    />
                                )}
                            />
                            <ErrorMessage>{errors?.FreeOriginLicensePlate?.message}</ErrorMessage>
                        </section>}
                        <section className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                            <Link className="block w-[100%]" href="/assistance-invoice"><Button className="w-full" outlined={true}>بازگشت</Button></Link>
                            <Button loading={actionLoading} type="submit">استعلام</Button>
                        </section>
                    </form>
                </section>
                <Description />
            </section>

        </>



    )



}




