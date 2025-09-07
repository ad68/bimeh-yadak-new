"use client";
import { api } from "@/api";
import {
  Button,
  CardInput,
  DatePicker,
  ErrorMessage,
  Select,
  TextBox,
} from "@/common";
import { Regex } from "@/enums";
import { jalaliToGregorian, scrollToTop } from "@/helper";
import { useAxios } from "@/hooks";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ setActiveTab, activeTab, setBasicInfo }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({});
  const [province] = watch(["province"]);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [actionLoading, setActionLoading] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [provincesLoading, setProvincesLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  const preSignUp = (data) => {

    const dateOfBirth = `${data?.dateOfBirth?.year}/${data?.dateOfBirth?.month}/${data?.dateOfBirth?.day}`;
    let params = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      fatherName: data?.fatherName,
      nationalCode: data?.nationalCode,
      dateOfBirth: jalaliToGregorian(dateOfBirth),
      placeOfIssue: data?.placeOfIssue,
      mobileNumber: data?.mobileNumber,
      provinceName: data?.province?.label,
      cityName: data?.city?.label,
      postalCode: data?.postalCode,
      areaOfActivity: data?.areaOfActivity,
      address: data?.address,
      agencyCode: data?.agencyCode,
      bankName: data?.bankName,
      iban: data?.iban,
      cardNumber: data?.cardNumber,
      uniqueCode: data?.uniqueCode
    };
    setBasicInfo(params)
    setActiveTab(2)

  };
  const onInvalid = () => {
    scrollToTop()
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  const getProvinces = () => {
    setProvincesLoading(true);
    useAxios
      .get(api.location.getProvinces)
      .then((res) => {
        setProvincesLoading(false);
        setProvinces(res.data);
      })
      .catch((err) => {
        setProvincesLoading(false);
      });
  };
  const getCities = () => {
    setCitiesLoading(true);
    useAxios
      .get(api.location.getCities + "?provinceId=" + province?.value)
      .then((res) => {
        setCitiesLoading(false);
        setCities(res.data);
      })
      .catch((err) => {
        setCitiesLoading(false);
      });
  };
  useEffect(() => {
    getProvinces();
  }, []);
  useEffect(() => {
    if (province) {
      getCities();
      setValue("city", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [province]);
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
        className="grid grid-cols-1 xl:grid-cols-4 px-3 mt-2 gap-4 py-10"
      >
        <section className="xl:col-span-4 ">
          <span className="text-[24px] font-bold">اطلاعات فردی:</span>
        </section>
        <section className="flex  flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">شناسه امدادگر</label>
          <Controller
            control={control}
            name="uniqueCode"
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
          <ErrorMessage>{errors?.uniqueCode?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px] text-sm">
          <label className="pt-[6px]">نام</label>
          <Controller
            control={control}
            name="firstName"
            rules={{
              required: "نام اجباری است",
              minLength: {
                value: 3,
                message: "نام نباید کمتر از 3 کاراکتر باشد",
              },
              maxLength: {
                value: 15,
                message: "نام نباید بیشتر از 15 کاراکتر باشد",
              },
              pattern: {
                value: Regex.PERSIAN_NAME,
                message: "نام فقط باید شامل حروف فارسی باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder=" نام را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]   text-sm">
          <label className="pt-[6px]"> نام خانوادگی</label>
          <Controller
            control={control}
            name="lastName"
            rules={{
              required: "نام خانوادگی اجباری است",
              minLength: {
                value: 3,
                message: "نام خانوادگی نباید کمتر از 3 کاراکتر باشد",
              },
              maxLength: {
                value: 15,
                message: "نام خانوادگی نباید بیشتر از 15 کاراکتر باشد",
              },
              pattern: {
                value: Regex.PERSIAN_NAME,
                message: "نام خانوادگی فقط باید شامل حروف فارسی باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="نام خانوادگی را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]   text-sm">
          <label className="pt-[6px]">نام پدر</label>
          <Controller
            control={control}
            name="fatherName"
            rules={{
              required: "نام پدر اجباری است",
              minLength: {
                value: 3,
                message: "نام پدر نباید کمتر از 3 کاراکتر باشد",
              },
              maxLength: {
                value: 15,
                message: "نام پدر نباید بیشتر از 15 کاراکتر باشد",
              },
              pattern: {
                value: Regex.PERSIAN_NAME,
                message: "نام پدر فقط باید شامل حروف فارسی باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="نام پدر را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.fatherName?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
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
        <section className="flex w-full flex-col gap-[2px] text-sm">
          <label className="pt-[6px]">تاریخ تولد</label>
          <Controller
            control={control}
            name="dateOfBirth"
            rules={{
              required: "تاریخ تولد اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <DatePicker value={value} onChange={onChange} />
            )}
          />
          <ErrorMessage>{errors?.dateOfBirth?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">محل صدور</label>
          <Controller
            control={control}
            name="placeOfIssue"
            rules={{
              required: "محل صدور اجباری است",
              minLength: {
                value: 2,
                message: "محل صدور نباید کمتر از 2 کاراکتر باشد",
              },
              maxLength: {
                value: 15,
                message: "محل صدور نباید بیشتر از 15 کاراکتر باشد",
              },
              pattern: {
                value: Regex.PERSIAN_NAME,
                message: "محل صدور فقط باید شامل حروف فارسی باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder=" محل صدور را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.placeOfIssue?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">تلفن همراه </label>
          <Controller
            control={control}
            rules={{
              required: "تلفن همراه اجباری است",
              pattern: {
                value: Regex.MOBILE,
                message: "تلفن همراه را به درستی وارد کنید",
              },
            }}
            name="mobileNumber"
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="تلفن همراه را وارد کنید"

                className="  h-[48px]  rounded-lg border border-solid "
              />
            )}
          />
          <ErrorMessage>{errors?.mobileNumber?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">استان</label>
          <Controller
            control={control}
            rules={{
              required: " استان اجباری است",
            }}
            name="province"
            render={({ field: { onChange, value } }) => (
              <Select
                options={provinces}
                loading={provincesLoading}
                state={value}
                setState={onChange}
                optionValue="id"
                optionTitle="name"
                placeHolder="استان"
              />
            )}
          />
          <ErrorMessage>{errors?.province?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">شهر</label>
          <Controller
            control={control}
            rules={{
              required: " شهر اجباری است",
            }}
            name="city"
            render={({ field: { onChange, value } }) => (
              <Select
                options={cities}
                loading={citiesLoading}
                state={value}
                setState={onChange}
                optionValue="id"
                optionTitle="name"
                placeHolder="شهر"
              />
            )}
          />
          <ErrorMessage>{errors?.city?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">کد پستی</label>
          <Controller
            control={control}
            name="postalCode"
            rules={{
              required: "کد پستی اجباری است",

              pattern: {
                value: Regex.ZIP_CODE,
                message: "کد پستی فقط باید 10 رقم باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder=" کد پستی را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.postalCode?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">محدوده فعالیت</label>
          <Controller
            control={control}
            name="areaOfActivity"
            rules={{
              required: "محدوده فعالیت اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder=" محدوده فعالیت را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.areaOfActivity?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px] xl:col-span-4  text-sm">
          <label className="pt-[6px] ">آدرس محل سکونت</label>
          <Controller
            control={control}
            name="address"
            rules={{
              required: "آدرس محل سکونت اجباری است",

            }}
            render={({ field: { onChange, value } }) => (
              <textarea
                onChange={onChange}
                value={value}
                rows={4}
                placeholder="آدرس محل سکونت را وارد کنید "
                className="rounded-lg border p-4"
              />
            )}
          />
          <ErrorMessage>{errors?.address?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">کد نمایندگی</label>
          <Controller
            control={control}
            name="agencyCode"
            rules={{
              required: "کد نمایندگی اجباری است",
              pattern: {
                value: Regex.NUMBER,
                message: "کد نمایندگی باید عدد باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="کد نمایندگی را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.agencyCode?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px] text-sm">
          <label className="pt-[6px]">نام بانک</label>
          <Controller
            control={control}
            name="bankName"
            rules={{
              required: "نام بانک اجباری است",
              minLength: {
                value: 2,
                message: "نام بانک نباید کمتر از 2 کاراکتر باشد",
              },
              maxLength: {
                value: 15,
                message: "نام نباید بیشتر از 15 کاراکتر باشد",
              },
              pattern: {
                value: Regex.PERSIAN_NAME,
                message: "نام فقط باید شامل حروف فارسی باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder=" نام بانک را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.bankName?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px] text-sm">
          <label className="pt-[6px] ">شماره شبا</label>
          <Controller
            control={control}
            name="iban"
            rules={{
              required: "شماره شبا اجباری است",
              pattern: {
                value: Regex.SHEBA,
                message: "شماره شبا باید 24 رقم باشد",
              },
            }}
            render={({ field: { onChange } }) => (
              <TextBox
                onChange={onChange}
                placeholder="شماره شبا را وارد کنید"
                className="  h-[48px]  rounded-lg border border-solid "
              />
            )}
          />
          <ErrorMessage>{errors?.iban?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col xl:col-span-2 gap-[2px] text-sm">
          <label className="pt-[6px] ">شماره کارت</label>
          <Controller
            control={control}
            name="cardNumber"
            rules={{
              minLength: {
                value: 16,
                message: "شماره کارت نباید کمتر از 16 کاراکتر باشد",
              },
              pattern: {
                value: Regex.CARD_NUMBER,
                message: "شماره کارت را به درستی وارد کنید",
              },
            }}
            render={({ field: { onChange } }) => (
              <CardInput setCardNumber={onChange} />
            )}
          />
          <ErrorMessage>{errors?.cardNumber?.message}</ErrorMessage>
        </section>
        {/* -------------------Submit------------------- */}
        <section className="xl:col-span-4 flex gap-4">
          <Button
            loading={false}
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
