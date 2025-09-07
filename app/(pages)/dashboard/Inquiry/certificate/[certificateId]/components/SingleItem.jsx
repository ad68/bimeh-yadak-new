"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index(props) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto h-auto w-[90%] rounded-xl bg-[#F6F6FB] p-4 xl:h-[464px] xl:w-[602px]">
        <section className="h-full w-full rounded-xl bg-white">
          <section className="flex gap-3 border-b border-solid border-[#F6F6FB] py-[18px] pr-4 shadow-[0px_19.74px_44.42px_-12.83px_#AAAAAA29] xl:gap-4 ">
            <Image src="/assets/images/car.svg" width={28} height={28} alt="" />
            <h2 className="text-base xl:text-lg"> پایه سوم</h2>
          </section>
          <section className=" p-4  text-xs xl:text-base">
            <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-3 xl:px-4">
              <span className="text-[#A6A9BD] ">بارکد گواهینامه </span>
              <span className="text-[#3E4151]">20472000017007729597</span>
            </section>
            <section className="flex h-[48px] w-full  items-center justify-between rounded-lg px-4">
              <span className="text-[#A6A9BD] ">شماره گواهینامه </span>
              <span style={{ color: props.color1 }} className="text-[#3E4151]">
                9603251382
              </span>
            </section>
            <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
              <span className="text-[#A6A9BD] "> نوع </span>
              <span className="text-[#3E4151]">پایه سوم</span>
            </section>
            <section className="flex h-[48px] w-full  items-center justify-between rounded-lg px-4">
              <span className="text-[#A6A9BD] ">تاریخ صدور</span>
              <span style={{ color: props.color2 }} className="text-[#3E4151]">
                00/08/15 ؛ 10:35{" "}
              </span>
            </section>
            <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
              <span className="text-[#A6A9BD] ">مدت اعتبار </span>
              <span className="text-[#3E4151]">10 سال </span>
            </section>
            <section className="flex h-[48px] w-full  items-center justify-between rounded-lg px-4">
              <span className="text-[#A6A9BD] ">وضعیت </span>
              <span style={{ color: props.color2 }} className="text-[#3E4151]">
                اسکن شده ناجی پاس
              </span>
            </section>
            <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
              <span className="text-[#A6A9BD] ">پیگیری مدارک </span>
              <span className="text-[#0165E1]">
                {" "}
                پیگیری از پست{" "}
                <Image
                  alt=""
                  src="/assets/images/post2.png"
                  width={20}
                  height={20}
                  className="inline size-6"
                />
              </span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
