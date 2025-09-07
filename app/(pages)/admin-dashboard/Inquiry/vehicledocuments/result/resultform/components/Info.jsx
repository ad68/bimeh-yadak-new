import React from "react";
import Image from "next/image";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
      <section className="w-full max-w-full xl:h-[368px] xl:w-[602px]">
        <section className="flex flex-col rounded-xl bg-[#F6F6FB] p-4">
          <section className="mx-auto w-full rounded-xl bg-white px-3 py-5 xl:w-[570px]">
            <section className=" mb-4">
              <Image
                src="/assets/images/doc.png"
                width={28}
                height={28}
                className="ml-4 inline"
                alt=""
              />
              <span className="text-[16px] font-semibold xl:text-[18px] ">
                مدارک خودرو{" "}
              </span>
            </section>
            <section className="mx-auto flex h-[48px] items-center justify-between rounded-lg bg-[#F6F6FB] px-[16px] text-xs xl:w-[538px] xl:text-[16px]  ">
              <span className="text-[#A6A9BD]">وضعیت کارت </span>
              <span>تحویل داده شده به پست</span>
            </section>
            <section className="mx-auto flex h-[48px] items-center justify-between rounded-lg bg-white px-[16px] text-xs xl:w-[538px] xl:text-[16px]  ">
              <span className="text-[#A6A9BD]"> تاریخ چاپ کارت </span>
              <span>1397/01/04</span>
            </section>
            <section className="mx-auto flex h-[48px] items-center justify-between rounded-lg bg-[#F6F6FB] px-[16px] text-xs xl:w-[538px] xl:text-[16px]  ">
              <span className="text-[#A6A9BD]">وضعیت سند </span>
              <span> صادر شده</span>
            </section>
            <section className="mx-auto flex h-[48px] items-center justify-between rounded-lg bg-white px-[16px] text-xs xl:w-[538px] xl:text-[16px]  ">
              <span className="text-[#A6A9BD]">تاریخ چاپ سند </span>
              <span>1397/01/04</span>
            </section>
            <section className="mx-auto flex h-[48px] items-center justify-between rounded-lg bg-[#F6F6FB] px-[16px] text-xs xl:w-[538px] xl:text-[16px]  ">
              <span className="text-[#A6A9BD]"> بارکد پستی</span>
              <span className="text-[#0165E1]">
                {" "}
                524165461365
                <Image
                  src="/assets/images/copy.png"
                  width={20}
                  height={20}
                  className="mr-2 inline"
                  alt=""
                />
              </span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
