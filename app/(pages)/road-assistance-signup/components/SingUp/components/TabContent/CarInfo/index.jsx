"use client";
import {
  Button,
  CarLicensePlate,
  DatePicker,
  ErrorMessage,
  Select,
  TextBox,
} from "@/common";
import { jalaliToGregorian, scrollToTop } from "@/helper";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ setActiveTab, activeTab, setCarInfo }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});
  const colors = [
    {
      "id": 8,
      "parameter": "سفید",
      "autoDepreciationTypeEnum": "COLOR",
      "needToCheckBox": false
    },
    {
      "id": 9,
      "parameter": "مشکی",
      "autoDepreciationTypeEnum": "COLOR",
      "needToCheckBox": false
    },
    {
      "id": 10,
      "parameter": "نوک مدادی",
      "autoDepreciationTypeEnum": "COLOR",
      "needToCheckBox": false
    },
    {
      "id": 11,
      "parameter": "قرمز",
      "autoDepreciationTypeEnum": "COLOR",
      "needToCheckBox": false
    },
    {
      "id": 12,
      "parameter": "نقره ای",
      "autoDepreciationTypeEnum": "COLOR",
      "needToCheckBox": false
    },
    {
      "id": 13,
      "parameter": "سایر رنگ ها",
      "autoDepreciationTypeEnum": "COLOR",
      "needToCheckBox": false
    }
  ]
  const carTypes = [
    {
      "id": 1,
      "parameter": "خودرو بر چرخگیر",
      "autoDepreciationTypeEnum": "COLOR",

    },
    {
      "id": 2,
      "parameter": "خودروبر یدک کش",
      "autoDepreciationTypeEnum": "COLOR",

    },
    {
      "id": 3,
      "parameter": "خودروبر تلسکوبی",
      "autoDepreciationTypeEnum": "COLOR",

    },
    {
      "id": 4,
      "parameter": "خودروبر خرچنگی",
      "autoDepreciationTypeEnum": "COLOR",

    },
    {
      "id": 5,
      "parameter": "خودروسوار وینچی",
      "autoDepreciationTypeEnum": "COLOR",

    },
    {
      "id": 6,
      "parameter": "خودروسوار تلسکوپی (جرثقیل)",
      "autoDepreciationTypeEnum": "COLOR",

    }
  ]
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [provinceCode, setProvinceCode] = useState();
  const [licenseCode2, setLicenseCode2] = useState();
  const [licenseCode1, setLicenseCode1] = useState();
  const [alphabetCode, setAlphabetCode] = useState();
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const preSignUp = (data) => {
    const expireDate = `${data?.insuranceThirdPersonExpireDate?.year}/${data?.insuranceThirdPersonExpireDate?.month}/${data?.insuranceThirdPersonExpireDate?.day}`;
    let params = {
      vehicleType: data?.vehicleType.label,
      alphabetCode: alphabetCode,
      licenseCode1: licenseCode1,
      licenseCode2: licenseCode2,
      provinceCode: provinceCode,
      chassisNumber: data?.chassisNumber,
      engineNumber: data?.engineNumber,
      color: data?.color.value,
      vin: data?.vin,
      insuranceThirdPersonExpireDate: jalaliToGregorian(expireDate)
    };
    setCarInfo(params)
    setActiveTab(3)

  };
  const onInvalid = (errors) => {
    scrollToTop()
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────


  useEffect(() => {
    scrollToTop()
  }, [activeTab])
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => preSignUp(data), onInvalid)}
        className="grid grid-cols-1 xl:grid-cols-4 px-3 mt-10 gap-4 py-10"
      >
        <section className="xl:col-span-4 mt-5">
          <span className="text-[24px] font-bold">مشخصات خودرو:</span>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">نوع وسیله نقلیه</label>
          <Controller
            control={control}
            rules={{
              required: "نوع وسیله نقلیه اجباری است",
            }}
            name="vehicleType"
            render={({ field: { onChange, value } }) => (
              <Select
                options={carTypes}
                state={value}
                setState={onChange}
                optionValue="parameter"
                optionTitle="parameter"
                placeHolder="نوع وسیله نقلیه"
              />
            )}
          />
          <ErrorMessage>{errors?.vehicleType?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">رنگ</label>
          <Controller
            control={control}
            rules={{
              required: "رنگ اجباری است",
            }}
            name="color"
            render={({ field: { onChange, value } }) => (
              <Select
                options={colors}
                state={value}
                setState={onChange}
                optionValue="parameter"
                optionTitle="parameter"
                placeHolder="رنگ"
              />
            )}
          />
          <ErrorMessage>{errors?.color?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px] text-sm">
          <label className="pt-[6px] ">شماره پلاک</label>
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
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">شماره شاسی</label>
          <Controller
            control={control}
            name="chassisNumber"
            rules={{
              required: "شماره شاسی اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="شماره شاسی را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.chassisNumber?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">شماره VIN</label>
          <Controller
            control={control}
            name="vin"
            rules={{
              required: "شماره VIN اجباری است",

            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="شماره VIN را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.vin?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">شماره موتور</label>
          <Controller
            control={control}
            name="engineNumber"
            rules={{
              required: "شماره موتور اجباری است",

            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="شماره موتور را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.engineNumber?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">تاریخ انقضای بیمه ثالث</label>
          <Controller
            control={control}
            name="insuranceThirdPersonExpireDate"
            rules={{
              required: "تاریخ انقضا اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <DatePicker value={value} onChange={onChange} />
            )}
          />
          <ErrorMessage>{errors?.insuranceThirdPersonExpireDate?.message}</ErrorMessage>
        </section>
        {/* -------------------Submit------------------- */}
        <section className="xl:col-span-4 flex gap-4">
          <Button
            onClick={() => setActiveTab(1)}
            type="button"
            outlined
            className="mb-4 mt-[13px] h-[48px] w-[93%]  text-lg  leading-[27.9px] xl:mb-0 xl:w-[280px]"
          >
            مرحله قبل
          </Button>
          <Button

            className="mb-4 mt-[13px] h-[48px] w-[93%]  text-lg  leading-[27.9px]  xl:mb-0 xl:w-[280px]"
          >
            ذخیره
          </Button>
        </section>
      </form>
    </>
  );
}

/* (e) => {
    setDatePicker(`${e?.year}/${e?.month}/${e?.day}`)
} */
