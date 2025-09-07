"use client";
import { api } from "@/api";
import {
  Button,
  CarLicensePlate,
  DatePicker,
  ErrorMessage,
  Select,
  TextBox,
} from "@/common";
import { Regex } from "@/enums";
import { jalaliToGregorian, notify, numberWithCommas, scrollToTop } from "@/helper";
import { useAxios } from "@/hooks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ setActiveTab, setPreRegisterData, setPreRegisterId, setPlateMode }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch, setValue
  } = useForm({});
  const generateArray = (start, end, step) => {
    return Array.from({ length: (end - start) / step + 1 }, (_, i) => {
      const value = start + i * step;
      return { label: numberWithCommas(value), value };
    });
  };
  const searchParams = useSearchParams();
  const warrantyList = generateArray(5000000, 25000000, 1000000);
  const [province] = watch(["province"]);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [actionLoading, setActionLoading] = useState(false);
  const [provinceCode, setProvinceCode] = useState();
  const [licenseCode2, setLicenseCode2] = useState();
  const [licenseCode1, setLicenseCode1] = useState();
  const [alphabetCode, setAlphabetCode] = useState();
  const [referralCode, setReferralCode] = useState('')
  const [provinces, setProvinces] = useState([]);
  const [provincesLoading, setProvincesLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false);

  // ─── Functions ──────────────────────────────────────────────────────────────────

  const preSignUp = (data) => {
    setActionLoading(true);
    const dateOfBirth = `${data?.dateOfBirth?.year}/${data?.dateOfBirth?.month}/${data?.dateOfBirth?.day}`;
    let params = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      mobileNumber: data?.mobileNumber,
      nationalCode: data?.nationalCode,
      dateOfBirth: jalaliToGregorian(dateOfBirth),
      letter: alphabetCode,
      leftNumber: licenseCode1,
      rightNumber: licenseCode2,
      iranNumber: provinceCode,
      coverageAmount: data.amountWarranty.value,
      referralCode: referralCode,
      provinceName: data?.province?.label,
      cityName: data?.city?.label,
    };
    useAxios
      .post(api.insurance.preRegistrationCentral, params)
      .then((res) => {
        setActionLoading(false);
        notify.Success("درخواست شما با موفقیت ثبت شد");
        setActiveTab(3);
        setPreRegisterData(params)
        setPreRegisterId(res.data.id)
      })
      .catch((err) => {
        setActionLoading(false);

      });
  };
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
  const onInvalid = () => {
    scrollToTop()
  };
  useEffect(() => {
    setPlateMode("normal")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────


  useEffect(() => {
    setReferralCode(searchParams.get("referralCode"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  useEffect(() => {
    scrollToTop()
    getProvinces();
  }, [])
  useEffect(() => {
    if (province) {
      getCities();
      setValue("city", "");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [province]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-2 mt-5">
        <form
          onSubmit={handleSubmit((data) => preSignUp(data), onInvalid)}
          className="grid grid-cols-1 xl:grid-cols-4 px-3  gap-4"
        >
          <section className="xl:col-span-4 ">
            <span className="text-[24px] font-bold">اطلاعات فردی:</span>
          </section>
          <section className="flex w-full flex-col gap-[2px] text-sm xl:col-span-2">
            <label className="pt-[6px]">نام </label>
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
          <section className="flex w-full flex-col gap-[2px]  text-sm xl:col-span-2">
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
          <section className="flex w-full flex-col gap-[2px]  text-sm xl:col-span-2">
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
          <section className="flex w-full flex-col gap-[2px]  text-sm xl:col-span-2">
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
          <section className="flex w-full flex-col gap-[2px]  text-sm xl:col-span-2">
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
          <section className="flex w-full flex-col gap-[2px] xl:col-span-2  text-sm">
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
          <section className="flex w-full flex-col gap-[2px] xl:col-span-2  text-sm">
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
          <section className="xl:col-span-4 mt-5">
            <span className="text-[24px] font-bold">تعیین سقف پوشش خدمات:</span>
          </section>
          <section className="flex w-full flex-col gap-[2px] xl:col-span-4  text-sm">
            <label className="pt-[6px] ">
              میزان تعهدات درخواست امداد حمل رایگان را مشخص نمائید (تومان)
            </label>
            <Controller
              control={control}
              rules={{
                required: "میزان تعهد اجباری است",
              }}
              name="amountWarranty"
              render={({ field: { onChange, value } }) => (
                <Select
                  options={warrantyList}
                  state={value}
                  search={false}
                  setState={onChange}
                  optionValue="value"
                  optionTitle="label"
                  placeHolder="میزان تعهد"
                />
              )}
            />
            <ErrorMessage>{errors?.amountWarranty?.message}</ErrorMessage>
          </section>

          {/*   <section className="flex w-full flex-col gap-[2px] xl:col-span-4  text-sm">
            <label className="pt-[6px]">کد معرف</label>
            <Controller
              control={control}
              name="referralCode"
              render={({ field: { onChange, value } }) => (
                <TextBox
                  onChange={onChange}
                  disabled={searchParams.get("referralCode")}
                  value={value}
                  placeholder=" کد معرف را وارد کنید"
                  className="h-[48px] rounded-lg "
                />
              )}
            />
            <ErrorMessage>{errors?.referralCode?.message}</ErrorMessage>
          </section> */}

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
              loading={actionLoading}
              className="mb-4 mt-[13px] h-[48px] w-[93%]  text-lg  leading-[27.9px]  xl:mb-0 xl:w-[280px]"
            >
              ذخیره
            </Button>
          </section>
        </form>
        <section className=" border-[4px] p-5">
          <h1 className="font-bold text-[20px]">
            صاحبان و مالکین خودرو لطفا به موارد ذیل توجه فرمایید:
          </h1>
          <ul className="text-[14px] list-decimal leading-10 pr-[10px] xl:pr-[40px] text-justify">
            <li>
              در انتخاب تعهدات بیمه دقت نمایید هر مبلغی را که به عنوان بیمه امداد مشخص می‌کنید برای استفاده در طول سال است. پیشنهاد برای انتخاب تعهدات:
              <ul>
                <li>الف) برای خودروهای ایرانی از ۵ تا ۱۰ میلیون تومان یا بیشتر پوشش تعهدات انتخاب شود، مثال محاسباتی: برای ۵ میلیون پوشش تعهدات بیمه فقط مبلغ ۲۵۰ هزار تومان پرداخت می‌شود (یعنی ۵٪ تعهدات)</li>
                <li>ب) برای خودروهای شاسی خارجی و چینی و ایرانی از ۱۵ تا ۲۵ میلیون تومان پوشش تعهدات انتخاب شود. مثال محاسباتی: برای ۲۵ میلیون تومان پوشش تعهدات فقط مبلغ ۱۲۵۰۰۰۰ حق بیمه امداد پرداخت می‌شود. </li>
              </ul>
            </li>


            <li>
              طرح بیمه امداد در حمل خودرو برای اولین بار راه اندازی شده و هدف آن کوتاه کردن دستان افراد سودجو می‌باشد تا شما هزینه‌های هنگفت در زمان حمل به اجبار پرداخت ننمایید.
            </li>
            <li>
              تنها سامانه پیامکی <Link href="https://emdadkhodro1593.com/" className="text-blue underline">امدادخودرو</Link> کشور 98500031401 بوده و سایر پیامک‌های از سامانه‌های دیگر فاقد اعتبار می‌باشد.
            </li>
          </ul>
        </section>
      </section>

    </>
  );
}


