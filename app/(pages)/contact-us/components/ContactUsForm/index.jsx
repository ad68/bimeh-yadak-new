"use client";
import { Button, ErrorMessage, TextBox } from "@/common";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { NotifyMessage, Regex } from "@/enums";
import { useAxios } from "@/hooks";
import { api } from "@/api";
import { notify } from "@/helper";
import Recaptcha from '../../components/FormWithRecaptcha'

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const onSubmit = (data) => {
    let params = {
      firstName: data.name,
      lastName: data.family,
      mobileNumber: data.phone,
      email: data.email,
      description: data.description,
      contactUsType: "BIME_YADAK",
    };
    setLoading(true);
    useAxios
      .post(api.contactUs.addContactUs, params)
      .then((res) => {
        setLoading(false);
        reset();
        notify.Success(NotifyMessage.SUCCESS_ACTION);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="z-[2000]  mx-auto mt-11 flex h-auto  w-[90%] flex-col items-start gap-2 rounded-xl bg-white p-4 shadow-[0px_4px_8px_0px_#0000000F,0px_0px_4px_0px_#0000000A] xl:grid xl:w-[860px] xl:grid-cols-2  xl:gap-4 xl:p-8"
      >
        <section className="relative w-full">
          <label className="text-sm font-bold text-[#A6A9BD] xl:text-base">
            نام:
          </label>
          <input
            {...register("name", {
              required: "فیلد نام نباید خالی باشد", pattern: {
                value: Regex.PERSIAN_NAME,
                message: "نام  فقط باید شامل حروف فارسی باشد",
              },
            })}
            type="text"
            placeholder="نام"
            className="mt-[5px] h-[40px] w-full rounded-lg border border-solid border-[#8B929A36] px-8 text-sm xl:h-[48px]"
          />
          <Image
            alt=""
            src="/assets/icons/User RoundedComment.svg"
            width={24}
            height={24}
            className="absolute right-2 top-[40px] h-5 w-5 xl:h-6 xl:w-6"
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </section>

        <section className="relative w-full">
          <label className="text-sm font-bold text-[#A6A9BD] xl:text-base">
            نام خانوادگی:
          </label>
          <input
            {...register("family", {
              required: "فیلد نام خانوادگی نباید خالی باشد",
              pattern: {
                value: Regex.PERSIAN_NAME,
                message: "نام خانوادگی فقط باید شامل حروف فارسی باشد",
              },
            })}
            type="text"
            placeholder="نام خانوادگی"
            className="mt-[5px] h-10 w-full rounded-lg border border-solid border-[#8B929A36] px-8 text-sm xl:h-[48px]"
          />
          <Image
            alt=""
            src="/assets/icons/User RoundedComment.svg"
            width={24}
            height={24}
            className="absolute right-2 top-[40px] h-5 w-5 xl:h-6 xl:w-6"
          />

          {errors.family && (
            <ErrorMessage>{errors.family.message}</ErrorMessage>
          )}
        </section>

        <section className="relative w-full">
          <label className="text-sm font-bold text-[#A6A9BD] xl:text-base">
            تلفن:
          </label>
          <input
            {...register("phone", {
              required: "فیلد تلفن نباید خالی باشد",
              pattern: {
                value: Regex.MOBILE,
                message: "لطفا شماره موبایل را به درستی وارد کنید",
              },
            })}
            type="text"
            placeholder="تلفن"
            className="mt-[5px] h-10 w-full rounded-lg border border-solid border-[#8B929A36] px-8 text-sm xl:h-[48px]"
          />
          <Image
            alt=""
            src="/assets/icons/Phone Roundedcomment.svg"
            width={24}
            height={24}
            className="absolute right-2 top-[40px] h-5 w-5 xl:h-6 xl:w-6"
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </section>

        <section className="relative w-full">
          <label className="text-sm font-bold text-[#A6A9BD] xl:text-base">
            ایمیل:
          </label>
          <input
            {...register("email", {
              required: "فیلد ایمیل نباید خالی باشد",
              pattern: {
                value: Regex.EMAIL,
                message: "لطفا ایمیل را به درستی وارد کنید",
              },
            })}
            type="text"
            placeholder="ایمیل"
            className="mt-[5px] h-10 w-full rounded-lg border border-solid border-[#8B929A36] px-[35px] text-sm xl:h-[48px]"
          />
          <Image
            alt=""
            src="/assets/icons/Lettercomment.svg"
            width={24}
            height={24}
            className="absolute right-2 top-[40px] h-5 w-5 xl:h-6 xl:w-6"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </section>

        <section className="relative w-full xl:col-span-2">
          <label className="text-sm font-bold text-[#A6A9BD] xl:text-base">
            توضیحات:
          </label>
          <textarea
            {...register("description", {
              required: "فیلد توضیحات نباید خالی باشد",

            })}
            placeholder="توضیحات"
            className="mt-[5px] h-[78px] w-full rounded-lg border border-solid border-[#8B929A36] px-2 py-2 text-sm"
          />
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
        </section>
        {/* <Recaptcha setIsVerified={setCaptcha} /> */}
        <section className="col-span-2 flex w-full justify-end ">
          <Button
            loading={loading}
            className=" h-[48px] w-full rounded-lg  bg-blue font-bold text-white xl:w-[200px]"
          /*  disabled={!captcha} */
          >
            ثبت
          </Button>
        </section>
      </form>
    </>
  );
}
