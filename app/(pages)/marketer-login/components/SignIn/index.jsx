"use client";
import { useForm, Controller } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CountDown from "./components/CountDown";
import { Button, ErrorMessage, TextBox } from "@/common";
import { IconChevronDown } from "@/common/icons";
import axios from "axios";
import { encrypt, notify } from "@/helper";
import { NotifyMessage } from "@/enums";
import { useAuthStore } from "@/store/auth/login";
import { useAxios } from "@/hooks";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  setPanelMode,
  mobileNumber,
  requestActiveCode,
  loginLoading,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const router = useRouter();
  const updateAuthInfo = useAuthStore((state) => state.updateAuthInfo);


  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [resendBtnState, setResendBtnState] = useState(false);
  const [reloadTimer, setReloadTimer] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [activeCode] = watch(["activeCode"]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const ReloadTimer = () => {
    setResendBtnState(false);
    setReloadTimer(!reloadTimer);
    requestActiveCode();
  };
  const login = (data) => {
    setActionLoading(true);
    let params = { mobileNumber, code: parseInt(data?.activeCode) };
    useAxios
      .post("https://api.tazminmashin.com/tazmin/users/login-or-signup", params)
      .then((res) => {
        setActionLoading(false);
        localStorage.token = `Bearer ${res?.data?.token}`;

        let roles = res.data.role;

        updateAuthInfo({ ...res?.data, dashboardLink: "/marketer-dashboard" });

        localStorage.ur = encrypt(roles.toString());
        router.push("/", { scroll: false });
      })
      .catch((err) => {
        setActionLoading(false);

      });
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (activeCode?.length === 5) {
      handleSubmit(login)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCode]);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="relative h-[325px] w-[300px] text-center">
      <button
        className=" mr-auto  flex items-center justify-center text-black"
        onClick={() => setPanelMode("activeCode")}
      >
        <span>بازگشت</span>
        <IconChevronDown />
      </button>

      <form
        onSubmit={handleSubmit((data) => login(data))}
        className="flex h-[325px] flex-col items-center justify-center"
      >
        <h2 className="title text-[16px]">کد فعالسازی را وارد نمایید</h2>
        <Controller
          control={control}
          name="activeCode"
          rules={{
            required: "کد فعالسازی را وارد کنید",
          }}
          render={({ field: { onChange, value } }) => (
            <TextBox
              onChange={onChange}
              type="password"
              className="mt-[35px]"
              /*   value={value} */
              placeholder="کد فعالسازی را وارد کنید"
            />
          )}
        />
        {errors.activeCode && (
          <ErrorMessage>{errors.activeCode.message}</ErrorMessage>
        )}
        <Button loading={actionLoading} className="mt-7 w-full">
          ورود
        </Button>
        <section className="relative flex items-center justify-center">
          <button
            onClick={ReloadTimer}
            className="duration-400 mt-5 text-blue transition-all disabled:text-silver"
            disabled={!resendBtnState}
          >
            ارسال مجدد
          </button>
          {loginLoading && <section className="resendCode_Loader"></section>}
        </section>
        <section className="mt-4">
          <CountDown
            totalCount={180}
            setResendBtnState={setResendBtnState}
            reload={reloadTimer}
            resendBtnState={resendBtnState}
          />
        </section>
      </form>
    </section>
  );
}
