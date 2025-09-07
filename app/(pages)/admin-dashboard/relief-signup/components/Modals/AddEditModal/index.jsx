"use client";
import { api } from "@/api";
import {
  Button,
  CarLicensePlate,
  DatePicker,
  ErrorMessage,
  Notify,
  Select,
  TextBox,
} from "@/common";
import { NotifyMessage, Regex } from "@/enums";
import { jalaliToGregorian, notify, numberWithCommas } from "@/helper";
import { useAxios } from "@/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ reloadTable, closeModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
  } = useForm({});
  const generateArray = (start, end, step) => {
    return Array.from({ length: (end - start) / step + 1 }, (_, i) => {
      const value = start + i * step;
      return { label: numberWithCommas(value), value };
    });
  };
  const searchParams = useSearchParams();
  const warrantyList = generateArray(5000000, 25000000, 1000000);
  const [brandId] = watch(["brandId"]);
  const [modelId] = watch(["modelId"]);
  const [yearId] = watch(["yearId"]);
  const [province] = watch(["province"]);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [actionLoading, setActionLoading] = useState(false);
  const [provinceCode, setProvinceCode] = useState();
  const [licenseCode2, setLicenseCode2] = useState();
  const [licenseCode1, setLicenseCode1] = useState();
  const [alphabetCode, setAlphabetCode] = useState();
  const [brands, setBrands] = useState([]);
  const [brandLoading, setBrandLoading] = useState(false);
  const [models, setModels] = useState([]);
  const [modelLoading, setModelLoading] = useState(false);
  const [years, setYears] = useState([]);
  const [yearsLoading, setYearsLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [typesLoading, setTypesLoading] = useState(false);
  const [colors, setColors] = useState([]);
  const [colorsLoading, setColorsLoading] = useState(false);
  const [provinces, setProvinces] = useState([]);
  const [provincesLoading, setProvincesLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [citiesLoading, setCitiesLoading] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getBrands = () => {
    setBrandLoading(true);
    useAxios
      .get(api.brand.searchBrand + "?pageSize=100&id=&deviceType=CAR")
      .then((res) => {
        setBrandLoading(false);
        setBrands(res.data.elements);
      })
      .catch((err) => {
        setBrandLoading(false);
      });
  };
  const getModels = () => {
    setModelLoading(true);
    useAxios
      .get(api.car.searchCarModelByBrand + "?brandId=" + brandId.value)
      .then((res) => {
        setModelLoading(false);
        setModels(res.data.elements);
      })
      .catch((err) => {
        setModelLoading(false);
      });
  };
  const getYears = () => {
    setYearsLoading(true);
    useAxios
      .get(api.car.getCarYearByModelInfo + "/" + modelId.value)
      .then((res) => {
        setYearsLoading(false);
        setYears(res.data);
      })
      .catch((err) => {
        setYearsLoading(false);
      });
  };
  const getTypes = () => {
    setTypesLoading(true);
    useAxios
      .get(
        api.car.searchCarTypeByCarModelAndYear +
        `?carModelId=${modelId.value}&year=${yearId.value}`
      )
      .then((res) => {
        setTypesLoading(false);
        setTypes(res.data);
      })
      .catch((err) => {
        setTypesLoading(false);
      });
  };
  const getColors = () => {
    setColorsLoading(true);
    useAxios
      .get(api.colors.getColors)
      .then((res) => {
        setColorsLoading(false);
        setColors(res.data);
      })
      .catch((err) => {
        setColorsLoading(false);
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
  const preSignUp = (data) => {
    setActionLoading(true);
    const expireDate = `${data?.insuranceExpireDate?.year}/${data?.insuranceExpireDate?.month}/${data?.insuranceExpireDate?.day}`;
    let params = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      mobileNumber: data?.mobileNumber,
      nationalCode: data?.nationalCode,
      alphabetCode: alphabetCode,
      licenseCode1: licenseCode1,
      licenseCode2: licenseCode2,
      provinceCode: provinceCode,
      vehicleClass: "SAVARI",
      vin: data?.carShasi,
      modelYear: data?.yearId?.value,
      numberInsurance: data?.insuranceThird,
      expireDateInsurance: jalaliToGregorian(expireDate),
      provinceName: data?.province?.value,
      cityName: data?.province?.value,
      coverageAmount: data.amountWarranty.value,
      color: data?.colorId.value,
      referralCode: data?.referralCode,
    };
    useAxios
      .post(api.insurance.preRegistration, params)
      .then((res) => {
        setActionLoading(false);
        notify.Success("درخواست شما با موفقیت ثبت شد");
        reloadTable();
        closeModal();
      })
      .catch((e) => {

        setActionLoading(false);
      });
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getBrands();
    getColors();
    getProvinces();
  }, []);
  useEffect(() => {
    if (brandId) {
      getModels();
      setModels([]);
      setValue("modelId", "");
      setYears([]);
      setValue("yearId", "");
      setValue("typeId", "");
      setValue("colorId", "");
      setTypes([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandId]);
  useEffect(() => {
    if (modelId) {
      getYears();
      setYears([]);
      setValue("yearId", "");
      setTypes([]);
      setValue("typeId", "");
      setValue("colorId", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelId]);
  useEffect(() => {
    if (yearId) {
      getTypes();
      setTypes([]);
      setValue("typeId", "");
      setValue("colorId", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearId]);
  useEffect(() => {
    if (province) {
      getCities();
      setValue("city", "");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [province]);
  useEffect(() => {
    setValue("referralCode", searchParams.get("referralCode"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => preSignUp(data))}
        className="grid grid-cols-1 xl:grid-cols-4 px-3 mt-10 gap-4 py-10"
      >
        {/*  <section className="xl:col-span-4">
                <section className="p-4 w-[350px] m-auto rounded-md text-center bg-[whitesmoke]">
                    <span> کد معرف : </span>
                    <span className="font-bold">{searchParams.get("referralCode")}</span>
                </section>
            </section> */}
        <section className="xl:col-span-4 mt-5">
          <span className="text-[24px] font-bold">اطلاعات فردی:</span>
        </section>
        <section className="flex w-full flex-col gap-[2px] text-sm">
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
        <section className="xl:col-span-4 mt-5">
          <span className="text-[24px] font-bold">مشخصات خودرو:</span>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">برند</label>
          <Controller
            control={control}
            rules={{
              required: " برند اجباری است",
            }}
            name="brandId"
            render={({ field: { onChange, value } }) => (
              <Select
                options={brands}
                loading={brandLoading}
                setState={onChange}
                optionValue="id"
                optionTitle="name"
                placeHolder="برند"
                search={true}
              />
            )}
          />
          <ErrorMessage>{errors?.brandId?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">مدل</label>
          <Controller
            control={control}
            rules={{
              required: " مدل اجباری است",
            }}
            name="modelId"
            render={({ field: { onChange, value } }) => (
              <Select
                options={models}
                loading={modelLoading}
                state={value}
                setState={onChange}
                optionValue="id"
                optionTitle="name"
                placeHolder="مدل"
              />
            )}
          />
          <ErrorMessage>{errors?.modelId?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">سال ساخت</label>
          <Controller
            control={control}
            rules={{
              required: " سال ساخت اجباری است",
            }}
            name="yearId"
            render={({ field: { onChange, value } }) => (
              <Select
                options={years}
                loading={yearsLoading}
                state={value}
                setState={onChange}
                optionValue="id"
                optionTitle="name"
                placeHolder="سال ساخت"
                sameOption={true}
              />
            )}
          />
          <ErrorMessage>{errors?.yearId?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">تیپ</label>
          <Controller
            control={control}
            rules={{
              required: "تیپ اجباری است",
            }}
            name="typeId"
            render={({ field: { onChange, value } }) => (
              <Select
                options={types}
                loading={typesLoading}
                state={value}
                setState={onChange}
                optionValue="id"
                optionTitle="name"
                placeHolder="تیپ"
              />
            )}
          />
          <ErrorMessage>{errors?.typeId?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px] ">رنگ</label>
          <Controller
            control={control}
            rules={{
              required: "تیپ اجباری است",
            }}
            name="colorId"
            render={({ field: { onChange, value } }) => (
              <Select
                options={colors}
                loading={colorsLoading}
                state={value}
                setState={onChange}
                optionValue="id"
                optionTitle="parameter"
                placeHolder="رنگ"
              />
            )}
          />
          <ErrorMessage>{errors?.colorId?.message}</ErrorMessage>
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
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">شماره شاسی</label>
          <Controller
            control={control}
            name="carShasi"
            rules={{
              required: "شماره شاسی اجباری است",
              pattern: {
                value: Regex.CAR_SHASI,
                message: "شماره شاسی را به درستی وارد کنید",
              },
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
          <ErrorMessage>{errors?.carShasi?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">شماره بیمه ثالث</label>
          <Controller
            control={control}
            name="insuranceThird"
            rules={{
              required: "شماره بیمه ثالث اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="شماره بیمه ثالث را وارد کنید"
                className="h-[48px] rounded-lg "
              />
            )}
          />
          <ErrorMessage>{errors?.insuranceThird?.message}</ErrorMessage>
        </section>
        <section className="flex w-full flex-col gap-[2px]  text-sm">
          <label className="pt-[6px]">تاریخ انقضای بیمه ثالث</label>
          <Controller
            control={control}
            name="insuranceExpireDate"
            rules={{
              required: "تاریخ انقضا اجباری است",
            }}
            render={({ field: { onChange, value } }) => (
              <DatePicker value={value} onChange={onChange} />
            )}
          />
          <ErrorMessage>{errors?.insuranceExpireDate?.message}</ErrorMessage>
        </section>
        <section className="xl:col-span-4 mt-5">
          <span className="text-[24px] font-bold">مشخصات محل اقامت:</span>
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
        <section className="xl:col-span-4 mt-5">
          <span className="text-[24px] font-bold">تعیین سقف پوشش خدمات:</span>
        </section>
        <section className="flex w-full flex-col gap-[2px] xl:col-span-2  text-sm">
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
        <section className="flex w-full flex-col gap-[2px] xl:col-span-2  text-sm">
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
    </>
  );
}

/* (e) => {
    setDatePicker(`${e?.year}/${e?.month}/${e?.day}`)
} */
