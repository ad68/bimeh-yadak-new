import { generateArray, notify, numberWithCommas, removeCommasAndConvertToNumber, scrollToTop } from "@/helper";
import Image from "next/image";
import Employ from '../../../../../public/assets/svg/employ.svg'
import Assistance from '../../../../../public/assets/svg/assistance.svg'
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage, Select, Button, Modal, FormatNumber, TextBox } from "@/common";
import Pdf from './pdf'
import { useAxios } from "@/hooks";
import { api } from "@/api";
import { useEffect, useState } from "react";
import AssistanceSign from '../AssistanceSignature'
import UserSignature from '../UserSignature'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
const LabelValue = ({ label, value }) => {
    return <section className="flex gap-2 text-[14px]">
        <label>{label}</label>
        <label className="font-bold">{value}</label>
    </section>
}
export default function Index({ info }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const userInfo = info?.registrationInsuranceOutputDTO
    const technicianInfo = info?.technicianOutputDTO
    const {
        handleSubmit,
        control,
        formState: { errors },
        watch
    } = useForm({

    });
    const [entranceFee] = watch(["entranceFee"]);
    const [preparationCost] = watch(["preparationCost"]);
    const [carPrice] = watch(["carPrice"]);
    const [stoppingCost] = watch(["stoppingCost"]);
    const [additionalEntryKm] = watch(["additionalEntryKm"]);
    const [additionalEntryFee] = watch(["additionalEntryFee"]);


    const entranceFeeList = generateArray(600000, 50000000, 100000);
    const preparationCostList = generateArray(500000, 10000000, 100000);
    const stoppingCostList = generateArray(200000, 700000, 100000);
    const extra10KmPrice = generateArray(15000, 60000, 5000);
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [actionLoading, setActionLoading] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [invoiceData, setInvoiceData] = useState()
    const [assistanceSign, setAssistanceSign] = useState()
    const [userSign, setUserSign] = useState()
    const [additionalEntryFinalFee, setAdditionalEntryFinalFee] = useState(0)
    // ─── Functions ──────────────────────────────────────────────────────────────────
    function calculatePrice(carPrice) {
        if (carPrice == null || carPrice <= 0) {
            carPrice = 0;
        }
        const hundredMillionUnits = Math.ceil(carPrice / 100_000_000);
        return hundredMillionUnits * 28_000;
    }
    const onInvalid = (errors) => {
        scrollToTop()
    };
    const getInvoice = (data) => {
        if (userSign && assistanceSign) {
            setActionLoading(true)
            let params = {
                entranceFee: data.entranceFee.value,
                preparationCost: data.preparationCost.value,
                stoppingCost: data.stoppingCost.value,
                carPrice: removeCommasAndConvertToNumber(carPrice),
                freeRegistrationCarTransportId: info?.registrationInsuranceOutputDTO?.id,
                technicianUniqueCode: technicianInfo?.uniqueCode,
                rescuerSignature: assistanceSign,
                personSignature: userSign,
                additionalEntryKm: removeCommasAndConvertToNumber(data?.additionalEntryKm),
                additionalEntryFee: data?.additionalEntryFee?.value,
                clinicalAssistanceEntryFee: removeCommasAndConvertToNumber(data?.clinicalAssistanceEntryFee),
                clinicalAndMobileRepairFee: removeCommasAndConvertToNumber(data?.clinicalAndMobileRepairFee),
                sparePartsFee: removeCommasAndConvertToNumber(data?.sparePartsFee),
                setupFee: removeCommasAndConvertToNumber(data?.setupFee),
                otherItemsFee: removeCommasAndConvertToNumber(data?.otherItemsFee),
                onSiteTireRepairFee: removeCommasAndConvertToNumber(data?.onSiteTireRepairFee),
                roundTripTireRepairFee: removeCommasAndConvertToNumber(data?.roundTripTireRepairFee),
                spareTireReplacementFee: removeCommasAndConvertToNumber(data?.spareTireReplacementFee),
                fuelDeliveryFee: removeCommasAndConvertToNumber(data?.fuelDeliveryFee),
                batterySaleFee: removeCommasAndConvertToNumber(data?.batterySaleFee),
                diagFee: removeCommasAndConvertToNumber(data?.diagFee),
                carDoorOpeningFee: removeCommasAndConvertToNumber(data?.carDoorOpeningFee),
                vehicleExtractionSandSnowEtcFee: removeCommasAndConvertToNumber(data?.vehicleExtractionSandSnowEtcFee),
                onSiteOilChangeFee: removeCommasAndConvertToNumber(data?.onSiteOilChangeFee),
                saleOfEngineOilBrakeFluidAntifreezeFee: removeCommasAndConvertToNumber(data?.saleOfEngineOilBrakeFluidAntifreezeFee),
            }

            useAxios.post(api.rescuerInvoice.getFreeTechnicianAndInsuranceReg, params).then(res => {
                setActionLoading(false)
                setSuccessModal(true)
                setInvoiceData(res?.data)
            }).catch(err => {
                setActionLoading(false)
                notify.Error("خطای نا مشخص")
            })
        }
        else {
            notify.Error("امضای کاربر و امدادگر را وارد کنید")
        }

    }
    useEffect(() => {
        if (additionalEntryKm && additionalEntryFee?.value) {
            setAdditionalEntryFinalFee(removeCommasAndConvertToNumber(additionalEntryKm) * additionalEntryFee?.value)
        }

    }, [additionalEntryKm, additionalEntryFee])


    // ─── Life Cycle ─────────────────────────────────────────────────────────────────


    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <section className="w-[1200px] max-w-full m-auto">
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <section className="grid grid-cols-1 gap-y-4 xl:grid-cols-2 relative border border-[#f7f7f7] bg-white shadow-xl p-5 pr-[80px] rounded-md">
                <section className="absolute shadow-lg right-[5px] top-[5px] bg-primary rounded-full p-4">
                    <Image className="w-[30px]" src={Employ} alt="" />
                </section>
                <span className="xl:col-span-2 font-bold text-lg">مشخصات امداد خواه</span>
                <LabelValue label="نام:" value={userInfo?.firstName} />
                <LabelValue label="نام خانوادگی:" value={userInfo?.lastName} />
                <LabelValue label="موبایل:" value={userInfo?.mobileNumber} />
                <LabelValue label="کد ملی:" value={userInfo?.nationalCode} />
                <LabelValue label="خودرو:" value={userInfo?.carModelName} />
                <LabelValue label="شماره پلاک:" value={userInfo?.licensePlate} />
            </section>
            <section className="grid grid-cols-1 xl:grid-cols-2 gap-y-4  relative border border-[#f7f7f7] bg-white shadow-xl p-5 pr-[80px] rounded-md">
                <section className="absolute shadow-lg right-[5px] top-[5px] bg-primary rounded-full p-4">
                    <Image className="w-[30px]" src={Assistance} alt="" />
                </section>
                <span className="xl:col-span-2 font-bold text-lg">مشخصات امدادگر</span>
                <LabelValue label="نام:" value={technicianInfo?.firstName} />
                <LabelValue label="نام خانوادگی:" value={technicianInfo?.lastName} />
                <LabelValue label="موبایل:" value={technicianInfo?.mobileNumber} />
                <LabelValue label="کد ملی:" value={technicianInfo?.nationalCode} />
                <LabelValue label="خودرو:" value={technicianInfo?.vehicleType} />
                <LabelValue label="شماره پلاک:" value={technicianInfo?.licensePlate} />
            </section>
        </section>
        <section>
            <form
                onSubmit={handleSubmit((data) => getInvoice(data), onInvalid)}
                className="grid grid-cols-1 xl:grid-cols-4 px-3 mt-10 gap-4 py-10"
            >
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">ورودی به ازای 10 کیلومتر (تومان)</label>
                    <Controller
                        control={control}
                        rules={{
                            required: "مبلغ ورودی اجباری است",
                        }}
                        name="entranceFee"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                options={entranceFeeList}
                                state={value}
                                setState={onChange}
                                optionValue="value"
                                optionTitle="label"
                                placeHolder="مبلغ را انتخاب کنید"
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.entranceFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">مقدار کیلومتر مازاد</label>
                    <Controller
                        control={control}
                        name="additionalEntryKm"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder=" مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.additionalEntryKm?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه مازاد بر 10 کیلومتر</label>
                    <Controller
                        control={control}
                        name="additionalEntryFee"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                options={extra10KmPrice}
                                state={value}
                                setState={onChange}
                                optionValue="value"
                                optionTitle="label"
                                placeHolder="مبلغ را انتخاب کنید"
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.additionalEntryFee?.message}</ErrorMessage>
                </section>
                <section>
                    <section className="flex gap-4 mt-9 text-[14px] xl:text-[18px]">
                        <span>هزینه مازاد:</span>
                        <span className="font-bold">
                            {numberWithCommas(additionalEntryFinalFee)} تومان
                        </span>
                    </section>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه آماده سازی (تومان)</label>
                    <Controller
                        control={control}
                        rules={{
                            required: "هزینه آماده سازی اجباری است",
                        }}
                        name="preparationCost"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                options={preparationCostList}
                                state={value}
                                setState={onChange}
                                optionValue="value"
                                optionTitle="label"
                                placeHolder="مبلغ را انتخاب کنید"
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.preparationCost?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px] text-sm">
                    <label className="pt-[6px]">هزینه توقف (تومان)</label>
                    <Controller
                        control={control}
                        rules={{
                            required: "هزینه توقف اجباری است",
                        }}
                        name="stoppingCost"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                options={stoppingCostList}
                                state={value}
                                setState={onChange}
                                optionValue="value"
                                optionTitle="label"
                                placeHolder="مبلغ را انتخاب کنید"
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.stoppingCost?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">ارزش خودروی امدادخواه</label>
                    <Controller
                        control={control}
                        name="carPrice"
                        rules={{
                            required: "ارزش خودروی امدادخواه اجباری است",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.carPrice?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">ورودی امداد بالینی</label>
                    <Controller
                        control={control}
                        name="clinicalAssistanceEntryFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.clinicalAssistanceEntryFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]"> اجرت تعمیر بالینی و سیار (تومان)</label>
                    <Controller
                        control={control}
                        name="clinicalAndMobileRepairFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.clinicalAndMobileRepairFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه لوازم یدکی (تومان)</label>
                    <Controller
                        control={control}
                        name="sparePartsFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.sparePartsFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه آماده سازی (تومان)</label>
                    <Controller
                        control={control}
                        name="setupFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.setupFee?.message}</ErrorMessage>
                </section>

                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">پنچرگیری درمحل (تومان)</label>
                    <Controller
                        control={control}
                        name="onSiteTireRepairFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.onSiteTireRepairFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">پنچرگیری رفت و برگشت (تومان)</label>
                    <Controller
                        control={control}
                        name="roundTripTireRepairFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.roundTripTireRepairFee?.message}</ErrorMessage>
                </section>

                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه تعویض زاپاس (تومان)</label>
                    <Controller
                        control={control}
                        name="spareTireReplacementFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.spareTireReplacementFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه سوخت رسانی (تومان)</label>
                    <Controller
                        control={control}
                        name="fuelDeliveryFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.fuelDeliveryFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه فروش باطری (تومان)</label>
                    <Controller
                        control={control}
                        name="batterySaleFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.batterySaleFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه دیاگ (تومان)</label>
                    <Controller
                        control={control}
                        name="diagFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.diagFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه بازکردن درب خودرو (تومان)</label>
                    <Controller
                        control={control}
                        name="carDoorOpeningFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.carDoorOpeningFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px] text-[11px]">هزینه بیرون کشیدن خودرو از ماسه و برف و غیره (تومان)</label>
                    <Controller
                        control={control}
                        name="vehicleExtractionSandSnowEtcFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.vehicleExtractionSandSnowEtcFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه تعویض روغن در محل (تومان)</label>
                    <Controller
                        control={control}
                        name="onSiteOilChangeFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.onSiteOilChangeFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px] text-[12px]">هزینه فروش روغن موتور و ترمز و ضدیخ (تومان)</label>
                    <Controller
                        control={control}
                        name="saleOfEngineOilBrakeFluidAntifreezeFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.saleOfEngineOilBrakeFluidAntifreezeFee?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px]  text-sm">
                    <label className="pt-[6px]">هزینه سایر موارد (تومان)</label>
                    <Controller
                        control={control}
                        name="otherItemsFee"
                        render={({ field: { onChange, value } }) => (
                            <FormatNumber
                                setState={onChange}
                                state={value}
                                placeholder="مبلغ را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.otherItemsFee?.message}</ErrorMessage>
                </section>
                <section className="xl:col-span-4 ">
                    <section className="flex gap-4  text-[14px] xl:text-[18px]">
                        <span>هزینه بیمه حمل:</span>
                        <span className="font-bold">
                            {numberWithCommas(calculatePrice(removeCommasAndConvertToNumber(carPrice)))} تومان
                        </span>
                    </section>
                    {entranceFee && stoppingCost && preparationCost && carPrice && <section className="flex gap-4 text-[14px] xl:text-[18px]">
                        <span>مالیات بر ارزش افزوده :</span>
                        <span className="font-bold">
                            {numberWithCommas((calculatePrice(removeCommasAndConvertToNumber(carPrice)) + entranceFee?.value + preparationCost?.value + stoppingCost?.value) * 0.1)} تومان
                        </span>
                    </section>}


                </section>
                <section className="xl:col-span-2 flex justify-center">
                    <AssistanceSign setSign={setAssistanceSign} />
                </section>
                <section className="xl:col-span-2 flex justify-center">
                    <UserSignature setSign={setUserSign} />
                </section>
                {/* -------------------Submit------------------- */}
                <section className="xl:col-span-4 flex gap-4">
                    <Button
                        loading={actionLoading}
                        className="mb-4 mt-[13px] h-[48px] w-[93%]  text-lg  leading-[27.9px]  xl:mb-0 xl:w-[280px]"
                    >
                        ذخیره
                    </Button>
                </section>
            </form>
        </section>
        <Modal width={800} open={successModal} onClose={() => setSuccessModal(false)} >
            <section className="flex justify-center">
                <Image src="/assets/icons/check.png" width={60} height={60} alt="" />
            </section>
            <span className="block text-[#26b126] mt-4 font-bold text-[20px] text-center">امدادگر عزیز، فاکتور شما با موفقیت ثبت گردید.</span>
            <span className="block my-2 text-center">جهت دانلود فاکتور روی دکمه زیر کلیک کنید</span>
            <section className="w-full  rounded-lg flex justify-center items-center xl:col-span-2  text-center">
                {/*   <Button>دانلود فاکتور</Button> */}
                <Pdf pdfData={invoiceData} />
            </section>
        </Modal>
    </section>
}
