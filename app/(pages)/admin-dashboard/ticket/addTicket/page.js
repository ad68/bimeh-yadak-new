"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AsyncSelect, Button } from "@/common";
import { Controller, useForm } from "react-hook-form";
import { useAuthStore } from "@/store/auth/login";
import { api } from "@/api";
import { useAxiosWithToken } from "@/hooks";
import { useRouter } from "next/navigation";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const authInfo = useAuthStore((state) => state.authInfo);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const saveTicket = (data) => {
    setLoading(true);
    let params = {
      departmentId: data.departmentId?.value,
      ticketSubject: data.ticketSubject,
      initialMessage: data.initialMessage,
    };
    useAxiosWithToken
      .post(api.ticket.addTicket, params)
      .then((res) => {
        setLoading(false);
        router.push("/dashboard/ticket/ticketChat/" + res?.data?.id);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="box-shadow-[0px_4px_9px_0px_#0000000D] h-auto w-full rounded-[18px] border-[0.81px] border-solid border-[#FFFFFF] bg-[#FFFFFF]">
      <form onSubmit={handleSubmit((data) => saveTicket(data))}>
        <section className="mb-[58px] flex items-center justify-between  px-[34px] pt-8">
          <span className="text-lg font-bold text-[#3E4151]">
            ارسال تیکت جدید
          </span>
        </section>
        <section className="mr-[34px] h-auto w-[703px] pl-[47px]">
          <section className="flex items-center justify-between">
            <section className="mb-10 flex w-[316px] flex-col text-sm text-[#3E4151]">
              <span className="mb-1 mr-3">آدرس ایمیل</span>
              <input
                type="text"
                className="mb-[18px] h-[48px] w-full rounded-[10px] border border-[#E6E8E9] pr-3"
                value="useremail@gmail.com"
                disabled
              />
              <span className="mb-1 mr-3">نام و نام خانوادگی</span>
              <input
                type="text"
                className="mb-[18px] h-[48px] w-full rounded-[10px] border border-[#E6E8E9] pr-3"
                /*  placeholder="محسن زیوری" */
                value={
                  !authInfo.firstName
                    ? authInfo?.mobileNumber
                    : authInfo?.firstName + " " + authInfo?.lastName
                }
                disabled
              />
              <span className="mb-1">
                بخش<span className="text-[#ED1C24]">*</span>
                <Controller
                  control={control}
                  name="departmentId"
                  rules={{
                    required: "انتخاب بخش اجباری است",
                    /*  pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              }, */
                  }}
                  render={({ field: { onChange, value } }) => (
                    <AsyncSelect
                      auth={true}
                      setState={onChange}
                      optionValue="id"
                      optionTitle="departmentName"
                      api={api.ticket.searchDepartments}
                      borderRadius="10px"
                    />
                  )}
                />
              </span>
              {errors.department && (
                <span className="font-normal text-[red]">
                  {errors.department.message}
                </span>
              )}

              <span className="mb-1  mr-3 mt-[18px]">
                موضوع<span className="text-[#ED1C24]">*</span>
              </span>
              <input
                type="text"
                {...register("ticketSubject", { required: "موضوع اجباری است" })}
                className="h-[48px] w-full rounded-[10px] border border-[#E6E8E9] pr-3 "
                placeholder="اینجا بنویسید"
              />
              {errors.subject && (
                <span className="font-normal text-[red]">
                  {errors.subject.message}
                </span>
              )}
              <span className="mb-1 mr-3 mt-[18px]">
                پیام<span className="text-[#ED1C24]">*</span>
              </span>
              <textarea
                {...register("initialMessage", {
                  required: "موضوع اجباری است",
                })}
                placeholder="اینجا بنویسید"
                className="h-[69px] w-full  rounded-[10px] border border-[#E6E8E9] pr-3 pt-4 text-sm "
              ></textarea>
              {errors.message && (
                <span className="font-normal text-[red]">
                  {errors.message.message}
                </span>
              )}
            </section>
            <Image
              alt=""
              src="/assets/icons/icons8-send-mail-100.png"
              width={200}
              height={200}
              quality={100}
            />
          </section>
        </section>

        <section className=" ml-[47px] mr-[34px] flex justify-end">
          <Button loading={loading} className="h-12 w-[228px] leading-[26px] ">
            ارسال تیکت
          </Button>
        </section>

        {/* <input type="submit" /> */}
      </form>
    </section>
  );
}
