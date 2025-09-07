import React, { useState, useContext, useEffect } from "react";
import EditProfileActionSidebar from "../../../EditProfileActionSideBar";
import { Button, ComponentLoading, ErrorMessage, TextBox } from "@/common";
import { useForm, Controller } from "react-hook-form";
import { NotifyMessage, Regex } from "@/enums";
import { notify } from "@/helper";
import { api } from "@/api";
import { useAxiosWithToken } from "@/hooks";
import { useAuthStore } from "@/store/auth/login";
import { useSideBarStore } from "@/store/dashboard/sidebar";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const sideBarShow = useSideBarStore((state) => state.sideBarShow);
  const closeSideBar = useSideBarStore((state) => state.hideSideBar);
  const authInfo = useAuthStore((state) => state.authInfo);
  const updateAuthInfo = useAuthStore((state) => state.updateAuthInfo);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm(/* {
    defaultValues: {
      phone: "09120910782",
    },
  } */);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [userId, setUserId] = useState();
  const getUserInfo = () => {
    setLoading(true);
    useAxiosWithToken
      .get(api.user.getUserInfo)
      .then((res) => {
        setLoading(false);
        console.log(res?.data);
        setValue("mobileNumber", res.data?.mobileNumber);
        setValue("firstName", res.data?.firstName);
        setValue("lastName", res.data?.lastName);
        setValue("nationalCode", res.data?.nationalCode);
        setValue("email", res.data?.email);
        setUserId(res.data?.id);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const editUserInfo = (data) => {
    setActionLoading(true);
    let params = {
      mobileNumber: data.mobileNumber,
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      email: data.email,
      username: data.mobileNumber,
      password: data.mobileNumber,
    };
    useAxiosWithToken
      .put(api.user.editUserInfo + userId, params)
      .then((res) => {
        setActionLoading(false);
        updateAuthInfo({
          ...authInfo,
          firstName: data.firstName,
          lastName: data.lastName,
        });
        notify.Success(NotifyMessage.SUCCESS_ACTION);
        closeSideBar();
      })
      .catch((err) => {
        setActionLoading(false);
      });
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (sideBarShow) {
      getUserInfo();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sideBarShow]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <EditProfileActionSidebar >
      <section className="relative w-full px-6 ">
        {loading && <ComponentLoading type="cover" />}
        <h2 className="border-b-[1.5px]  border-solid border-[#F6F6FB] pb-[12px] font-bold text-[#505050]">
          ویرایش حساب کاربری
        </h2>
        <form
          onSubmit={handleSubmit((data) => editUserInfo(data))}
          className="flex w-full flex-col items-center gap-2 pt-3 xl:gap-8 xl:pt-[38px]"
        >
          <section className="flex w-full flex-col gap-[2px] px-[13px] text-sm">
            <label className="pt-[6px] text-[#A6A9BD]">تلفن همراه </label>
            <Controller
              control={control}
              name="mobileNumber"
              render={({ field: { onChange, value } }) => (
                <TextBox
                  onChange={onChange}
                  value={value}
                  disabled={true}
                  className="  h-[48px]  rounded-lg border border-solid border-[#F6F6F6] bg-[#F6F6F6] "
                />
              )}
            />
          </section>
          <section className="flex w-full flex-col gap-[2px] px-[13px] text-sm">
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
          <section className="flex w-full flex-col gap-[2px] px-[13px] text-sm">
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
          <section className="flex w-full flex-col gap-[2px] px-[13px] text-sm">
            <label className="pt-[6px]">کدملی </label>
            <Controller
              control={control}
              name="nationalCode"
              rules={{
                /* required: "کد ملی اجباری است", */
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
          <section className="flex w-full flex-col gap-[2px] px-[13px] text-sm">
            <label className="pt-[6px]">ایمیل </label>
            <Controller
              control={control}
              name="email"
              rules={{
                pattern: {
                  value: Regex.EMAIL,
                  message: " ایمیل را به درستی وارد کنید",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <TextBox
                  onChange={onChange}
                  value={value}
                  placeholder="ایمیل  را وارد کنید"
                  className="h-[48px] rounded-lg "
                />
              )}
            />
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          </section>
          <Button
            loading={actionLoading}
            className="mb-4 mt-[13px] h-[48px] w-[93%] border-none bg-blue text-lg font-bold leading-[27.9px] text-white xl:mb-0 xl:w-[280px]"
          >
            ویرایش
          </Button>
        </form>
      </section>
    </EditProfileActionSidebar>
  );
}
