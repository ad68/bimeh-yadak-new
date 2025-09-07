"use client";
import { api } from "@/api";
import { Button, DatePicker, ErrorMessage } from "@/common";
import { jalaliToGregorian, notify, numberWithCommas } from "@/helper";
import { useAxiosWithToken } from "@/hooks";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [data, setData] = useState({ totalPayAmount: 0, count: 0 });
  const [loading, setLoading] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const calculateIncome = (data) => {
    let params = {
      fromDate: jalaliToGregorian(`${data.fromDate?.year}/${data.fromDate?.month}/${data.fromDate?.day}`),
      toDate: jalaliToGregorian(`${data.toDate?.year}/${data.toDate?.month}/${data.toDate?.day}`),
    };
    setLoading(true);
    useAxiosWithToken
      .get(api.insurance.getTotalPayAmount, { params })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);

      });
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //

  ///////////////////////////////////////////////////////////////////////////////////////

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <form onSubmit={handleSubmit((data) => calculateIncome(data))} className="flex w-full items-center gap-2  ">
        <section className="flex gap-2 items-center">
          <section className="flex w-full flex-col gap-[2px] text-sm">
            <label>از تاریخ</label>
            <Controller
              control={control}
              name="fromDate"
              rules={{
                required: "از تاریخ اجباری است",
              }}
              render={({ field: { onChange, value } }) => <DatePicker value={value} onChange={onChange} />}
            />
            <ErrorMessage>{errors?.fromDate?.message}</ErrorMessage>
          </section>
        </section>
        <section className="flex gap-2 items-center">
          <section className="flex w-full flex-col gap-[2px] text-sm">
            <label>از تاریخ</label>
            <Controller
              control={control}
              name="toDate"
              rules={{
                required: "تا تاریخ اجباری است",
              }}
              render={({ field: { onChange, value } }) => <DatePicker value={value} onChange={onChange} />}
            />
            <ErrorMessage>{errors?.toDate?.message}</ErrorMessage>
          </section>
        </section>
        <Button loading={loading} className="mt-4">
          محاسبه
        </Button>
      </form>
      <section className="flex gap-5 mt-10">
        <section className="flex gap-1">
          <label>تعداد تراکنش:</label>
          <label className="text-red font-bold">{data.count}</label>
        </section>
        <section className="flex gap-1">
          <label>مبلغ واریزی:</label>
          <label className="text-[green] font-bold">{numberWithCommas(data.totalPayAmount)} ریال</label>
        </section>
      </section>
    </>
  );
}
