import Image from "next/image";
import { consoleLog_BlackGreen, numberWithCommas } from "@/helper";
import Link from "next/link";
import { useEffect } from "react";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  pic,
  name,
  brand,
  year,
  factoryPrice,
  price,
  id,
  typeId,
  deviceType,
}) {
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
      <section className="dark:bg-blue-950 group m-6 hidden cursor-pointer flex-col items-center justify-start gap-6 rounded-xl bg-white p-6 shadow-[0_2px_6px_0px_rgba(0,0,0,0.14)] md:m-0 md:h-full xl:flex xl:flex-row ">
        <section className=" ">
          <Image
            className="block "
            src={pic === "null" ? "/assets/images/noCar.png" : pic}
            width={247}
            height={130}
            alt="Picture of the Desktop"
          />
        </section>
        <section className="flex w-full flex-col items-center justify-start gap-2">
          {/* ************************** */}
          <header className="flex w-full items-center justify-between ">
            <span className="text-2xl font-bold">{name}</span>
            {/* ************************** */}
          </header>
          {/* ************************** */}
          <section className="flex w-full items-center justify-start">
            <span>
              {brand} - {year}
            </span>
            <span className="pastDay mr-2 text-[#A6A9BD]">( دو روز پیش )</span>
          </section>
          {/* ************************** */}
          <section className="relative w-full">
            <Link
              href={
                deviceType === "CAR"
                  ? `/car/${id}?typeId=${typeId}`
                  : deviceType === "MOTORCYCLE"
                    ? `/motor-cycle/${id}`
                    : ""
              }
              className="absolute z-20 flex h-[48px] w-full items-center justify-center rounded-[8px] border border-blue text-[18px] font-semibold text-blue opacity-0 transition-all group-hover:opacity-100 "
            >
              مشاهده اطلاعات
            </Link>
            <section className="flex w-full items-center justify-between  transition-all group-hover:opacity-0">
              <span className="text-sm font-normal text-gray-200">
                قیمت بازار
              </span>
              <span>
                <strong className="mx-1 text-lg font-semibold text-[#262626]">
                  {numberWithCommas(price)}
                </strong>
                تومان
              </span>
            </section>
            {/* ************************** */}
            <section className="flex w-full items-center justify-between  transition-all group-hover:opacity-0">
              <span className="text-sm font-normal text-gray-200">
                قیمت کارخانه
              </span>
              <section>
                <strong className="mx-1 text-lg font-semibold text-[#262626]">
                  {numberWithCommas(factoryPrice)}
                </strong>
                <span className="mx-[6px] text-sm font-semibold text-[Green] ">
                  +12%
                </span>
                <span>تومان</span>
              </section>
            </section>
            {/* ************************** */}
          </section>
        </section>
      </section>
      <Link
        href={
          deviceType === "CAR"
            ? `/car/${id}?typeId=${typeId}`
            : deviceType === "MOTORCYCLE"
              ? `/motor-cycle/${id}`
              : ""
        }
        className="dark:bg-blue-950 group m-6 flex cursor-pointer flex-col items-center justify-start gap-6 rounded-xl bg-white p-6 shadow-[0_2px_6px_0px_rgba(0,0,0,0.14)] md:m-0 md:h-full xl:hidden  xl:flex-row "
      >
        <section className=" ">
          <Image
            className="block "
            src={pic === "null" ? "/assets/images/noCar.png" : pic}
            width={247}
            height={130}
            alt="Picture of the Desktop"
          />
        </section>
        <section className="flex w-full flex-col items-center justify-start gap-2">
          {/* ************************** */}
          <header className="flex w-full items-center justify-between ">
            <span className="text-2xl font-bold">{name}</span>
            {/* ************************** */}
          </header>
          {/* ************************** */}
          <section className="flex w-full items-center justify-start">
            <span>
              {brand} - {year}
            </span>
            <span className="pastDay mr-2 text-[#A6A9BD]">( دو روز پیش )</span>
          </section>
          {/* ************************** */}
          <section className="relative w-full">
            <section className="flex w-full items-center justify-between ">
              <span className="text-sm font-normal text-gray-200">
                قیمت بازار
              </span>
              <span>
                <strong className="mx-1 text-lg font-semibold text-[#262626]">
                  {numberWithCommas(price)}
                </strong>
                تومان
              </span>
            </section>
            {/* ************************** */}
            <section className="flex w-full items-center justify-between  ">
              <span className="text-sm font-normal text-gray-200">
                قیمت کارخانه
              </span>
              <section>
                <strong className="mx-1 text-lg font-semibold text-[#262626]">
                  {numberWithCommas(factoryPrice)}
                </strong>
                <span className="mx-[6px] text-sm font-semibold text-[Green] ">
                  +12%
                </span>
                <span>تومان</span>
              </section>
            </section>
            {/* ************************** */}
          </section>
        </section>
      </Link>
    </>
  );
}
