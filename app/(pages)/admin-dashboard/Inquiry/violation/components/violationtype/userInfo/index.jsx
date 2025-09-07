"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Checkbox } from "antd";
import PlateCar from "../../../../../components/PlateReadonly/plateCar";
import PlateCycle from "../../../../../components/PlateReadonly/plateCycle";
import { useViolationStore } from "@/store/dashboard/violation";
import { Regex, VehicleType } from "@/enums";
import { Button, ErrorMessage, Modal, TextBox } from "@/common";
import { useForm, Controller } from 'react-hook-form'
import InfoIcon from '../../../../../../../../public/assets/svg/information.svg'
import { useAxiosWithToken } from "@/hooks";
import { api } from "@/api";
import { consoleLog_BlackGreen, consoleLog_BlackRed } from "@/helper";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//


export default function Index({ setStep }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const plateInfo = useViolationStore((state) => state.plateInfo);
  const violationType = useViolationStore((state) => state.violationType)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [ruleModal, setRuleModal] = useState(false)
  const [ruleAccept, setRuleAccept] = useState(false)
  const [actionLoading, setActionLoading] = useState(false);
  const [finalData, setFinalData] = useState({})
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const goToNextStep = (data) => {

    let Params = {
      nationalID: data.nationalCode,
      mobileNumber: data.mobileNumber,
      left: plateInfo.licenseCode1,
      right: plateInfo.provinceCode,
      mid: plateInfo.licenseCode2,
      alphabet: plateInfo.alphabetCode,
      inquiryType: plateInfo?.vehicleType === VehicleType.CAR && violationType === "violationByDetail" ? "CARD" : plateInfo?.vehicleType === VehicleType.CAR && violationType === "violationAccumulative" ? "CARND" : plateInfo?.vehicleType === VehicleType.MOTOR && violationType === "violationByDetail" ? "MOTORD" : plateInfo?.vehicleType === VehicleType.MOTOR && violationType === "violationAccumulative" ? "MOTORND" : "",
    }
    setFinalData(Params)
    setRuleModal(true)

  }
  const requestPayment = () => {

    useAxiosWithToken.post(api.payment.requestPayment, finalData)
      .then(res => {
        setActionLoading(false)
        location.href = res?.data?.url
      }).catch(err => {
        setActionLoading(false)
      })
  }
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto mb-12 mt-[37px] flex  max-w-full flex-col items-center rounded-xl p-8 shadow-[-4px_-4px_4px_0px_#F6F6FBCC,4px_4px_12px_0px_#F6F6FBCC] md:w-[80%] md:px-[79px] xl:mb-0 xl:mr-6 xl:h-[681px] xl:w-[407px] xl:px-6 ">
        <section className="mx-auto mb-8 flex w-[90%] items-start gap-2 md:w-full">
          <Image
            src="/assets/icons/Ellipse.svg"
            width={8}
            height={8}
            className="mt-[12px]"
            alt=""
          />
          <p className="leading-[27.64px] text-[#3E4151]">
            روش استعلام خلافی مد نظر خود را انتخاب نمایید.
          </p>
        </section>
        <section className="mb-8 flex flex-col items-end">
          {plateInfo?.vehicleType === VehicleType.CAR && (
            <PlateCar
              platePart1={plateInfo?.licenseCode1}
              platePart2={plateInfo?.licenseCode2}
              platePart3={plateInfo?.alphabetCode}
              platePart4={plateInfo?.provinceCode}
            />
          )}
          {plateInfo?.vehicleType === VehicleType.MOTOR && (
            <PlateCycle
              platePart1={plateInfo?.motorFirstSection}
              platePart2={plateInfo?.motorSecondSection}
            />
          )}
        </section>
        <form
          className="mx-auto mb-8 flex w-[90%] max-w-full flex-col items-start md:w-full xl:mb-[181px] xl:w-[280px]"
          onSubmit={handleSubmit((data) => goToNextStep(data))}
        >
          <span className=" mr-1  self-start text-sm leading-[24.18px] text-[#3E4151]">
            کد ملی
          </span>
          <Controller
            control={control}
            name="nationalCode"
            rules={{
              required: "کد ملی اجباری است",
              pattern: {
                value: Regex.NATIONAL_CODE,
                message: "کد ملی باید 10 رقم باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="کد ملی را وارد کنید"
              />
            )}
          />
          {errors.nationalCode && (
            <ErrorMessage>{errors.nationalCode.message}</ErrorMessage>
          )}
          <span className="mb-[2px] mr-1 mt-[38px] self-start text-sm leading-[24.18px] text-[#3E4151]">
            تلفن همراه
          </span>
          <Controller
            control={control}
            name="mobileNumber"
            rules={{
              required: "شماره موبایل اجباری است",
              pattern: {
                value: Regex.MOBILE,
                message: "شماره موبایل را به درستی وارد کنید",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}

                value={value}
                placeholder="9xxxxxxxxx"
              />
            )}
          />
          {errors.mobileNumber && (
            <ErrorMessage>{errors.mobileNumber.message}</ErrorMessage>
          )}
          <section className="mt-8 flex items-center justify-between w-full text-sm font-semibold  md:w-full xl:mb-6 xl:text-lg ">
            <button className="flex items-center justify-center gap-[6.16px] text-[#4E94EA] "
              onClick={() => setStep(2)}
            >
              <Image
                src="/assets/svg/Vector.svg"
                width={7.1}
                height={15.84}
                className=""
                alt=""
              />
              بازگشت
            </button>
            <Button className=" w-[155px] rounded-lg bg-[#0165E1] py-[10px] text-white   ">
              استعلام خلافی
            </Button>
          </section>
        </form>

      </section>
      <Modal width={553} open={ruleModal} onClose={() => setRuleModal(false)} title="قوانین و مقررات">
        <Image src={InfoIcon} alt="" className="m-auto mt-10" />
        <section className="mt-[40px]">
          <section className="flex  items-center mt-[24px]">
            <span className="block w-[12px] h-[12px] bg-[#4E94EA] rounded-full ml-2"></span>
            هزینه ی هر بار استعلام خدمات پلیس 110,000 ریال می باشد
          </section>
          <section className="flex justify-center items-center mt-[24px]">
            <span className="block w-[12px] h-[12px] bg-[#4E94EA] rounded-full ml-2"></span>
            این مبلغ از سوی پلیس ناجی دریافت می‌شود و امکان بازگشت وجه پرداختی وجود ندارد.
          </section>
          <section className="flex justify-center items-center mt-[24px]">
            <span className="block w-[12px] h-[12px] bg-[#4E94EA] rounded-full ml-2"></span>
            در صورت پرداخت ناموفق، مبلغ کسر شده حداکثر تا ۷۲ ساعت به حساب شما بازگردانده می‌شود.</section>
          <section className="flex justify-center items-center mt-[24px]">
            <span className="block w-[12px] h-[12px] bg-[#4E94EA] rounded-full ml-2"></span>
            نتایج استعلام‌های شما در بخش سوابق خدمات پلیس ذخیره شده و در هر زمان قابل دسترسی است.
          </section>
        </section>
        <hr className="border-[#CCE0F9] mt-[32px]" />
        <section>
          <Checkbox onChange={(e) => setRuleAccept(e.target.checked)} className="mt-[32px]" value="withoutColoredPart">قوانین و مقررات را می پذیرم</Checkbox>
          <Button loading={actionLoading} disabled={!ruleAccept} onClick={requestPayment} className="mt-[32px] w-[280px] m-auto">پرداخت 110,000 ریال</Button>
        </section>
      </Modal>
    </>

  );
}
