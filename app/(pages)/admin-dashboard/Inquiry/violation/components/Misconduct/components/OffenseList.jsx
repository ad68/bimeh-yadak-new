"use client";
import React, { useState } from "react";
import Image from "next/image";
import { VehicleType } from "@/enums";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ data, setCurrentPlate }) {
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
      <section
        onClick={() => setCurrentPlate(data)}
        className="mt-2 flex h-[48px] max-w-full cursor-pointer items-center justify-between gap-[11px] rounded-[10px] border border-solid border-[#8B929A36] pl-[8.55px] pr-3 transition-all hover:bg-[#f3f5ff] xl:w-[279px]"
      >
        {data.vehicleClass === VehicleType.CAR && (
          <section className="ltr flex w-[155px] items-center justify-between text-xs leading-[20.73px] text-[#9295A9]">
            <span>{data.licenseCode1}</span>
            <span>{data.alphabetCode}</span>
            <span>{data.licenseCode2}</span>
            <span>-</span>
            <span>{data.provinceCode}</span>
            <span>شخصی ایران</span>
          </section>
        )}
        {data.vehicleClass === VehicleType.MOTOR && (
          <section className="ltr flex w-[135px] items-center justify-between text-xs leading-[20.73px] text-[#9295A9]">
            <span>{data.motorSecondSection}</span>
            <span>-</span>

            <span>{data.motorFirstSection}</span>
            <span>شخصی ایران</span>
          </section>
        )}

        <Image
          src="/assets/icons/arrow-left.svg"
          width={12}
          height={12}
          alt=""
        />
      </section>
    </>
  );
}
