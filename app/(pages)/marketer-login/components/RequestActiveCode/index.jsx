'use client';
import { useForm, Controller } from 'react-hook-form'
import { Button, ErrorMessage, TextBox } from "@/common";
import { Regex } from '@/enums';
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ actionLoading, requestActiveCode }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (

    <section className="h-[325px] w-[300px] text-center transition-all duration-700 ease-in-out" >
      <h2 className="mb-[20px] text-[30px] font-semibold text-primary text-center">
        ورود بازاریابان
      </h2>

      <form
        className="mx-auto mb-8 flex w-[90%] max-w-full flex-col items-start md:w-full xl:mb-[181px] xl:w-[280px]"
        onSubmit={handleSubmit(data => requestActiveCode(data))}
      >
        <h2 className="title w-full mb-[35px] text-center">
          لطفا شماره موبایل خود را وارد کنید
        </h2>
        <Controller
          control={control}
          name="mobileNumber"
          rules={{
            required: "شماره موبایل اجباری است",
            pattern: {
              value: Regex.MOBILE,
              message: "لطفا شماره موبایل را به درستی وارد کنید",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <TextBox
              onChange={onChange}
              /*   value={value} */
              placeholder="شماره موبایل خود را وارد کنید"
            />
          )}
        />
        {errors.mobileNumber && (
          <ErrorMessage>{errors.mobileNumber.message}</ErrorMessage>
        )}
        <Button loading={actionLoading} className="w-full mt-7">تایید و دریافت کد</Button>
      </form>

    </section>
  );
}
