import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import MoreMenu from "./components/MoreMenu";
import PlateCar from "../../../../components/PlateReadonly/plateCar";
import PlateCycle from "../../../../components/PlateReadonly/plateCycle";
import { VehicleType } from "@/enums";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ item }) {
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
    <section className="relative mx-auto max-w-full rounded-[5px] border border-solid border-[#8B929A36] md:w-[80%] xl:w-[410px] 2xl:w-[410px] dark:bg-[#2a2c31]">
      <section className="flex justify-between border-b border-solid border-[#8B929A36] px-4 py-4">
        <section className="flex items-center gap-2">
          <Image
            alt=""
            src={`${item?.vehicleClass === VehicleType.MOTOR ? `/assets/icons/icon-cycle.svg` : `/assets/icons/table-icon.svg`}`}
            width={28}
            height={28}
          />
          <span className="font-semibold text-[#707070] dark:text-white">
            عنوان: {item?.title}
          </span>
        </section>
        <MoreMenu item={item} />
        {/* <Image
          alt=""
          className="cursor-pointer"
          src="/assets/icons/more.svg"
          width={23.88}
          height={24}
          onClick={() => {
            setMoreMenuShow(!moreMenuShow);
          }}
        /> */}
      </section>
      <section className="mx-4 mb-6 mt-4 flex items-center justify-between">
        <p className="text-sm dark:text-white">شماره پلاک</p>
        {item.vehicleClass === VehicleType.MOTOR ? (
          <PlateCycle
            platePart1={item?.motorFirstSection}
            platePart2={item?.motorSecondSection}
          />
        ) : item.vehicleClass === VehicleType.CAR ? (
          <PlateCar
            platePart1={item?.licenseCode1}
            platePart2={item?.licenseCode2}
            platePart3={item?.alphabetCode}
            platePart4={item?.provinceCode}
          />
        ) : (
          ""
        )}
      </section>
    </section>
  );
}
