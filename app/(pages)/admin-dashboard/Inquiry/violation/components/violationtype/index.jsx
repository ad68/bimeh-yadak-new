"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import PlateCar from "../../../../components/PlateReadonly/plateCar";
import PlateCycle from "../../../../components/PlateReadonly/plateCycle/";
import { Radio } from "antd";
import { useViolationStore } from "@/store/dashboard/violation";
import { VehicleType } from "@/enums";
import { Button } from "@/common";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setStep }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const plateInfo = useViolationStore((state) => state.plateInfo);
  const updateViolationType = useViolationStore(
    (state) => state.updateViolationType,
  );
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [violationType, setViolationType] = useState(1);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const goToNextStep = () => {
    updateViolationType(
      violationType === 1
        ? "violationByDetail"
        : violationType === 2
          ? "violationAccumulative"
          : "",
    );
    setStep(3);
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="mx-auto mt-8 flex h-auto w-full max-w-full flex-col items-center rounded-xl pt-8  shadow-[-4px_-4px_4px_0px_#F6F6FBCC,4px_4px_12px_0px_#F6F6FBCC] md:w-[80%]  xl:mr-6 xl:h-[681px] xl:w-[407px]">
      <section className=" mb-8 flex items-start gap-2 px-8">
        <Image
          src="/assets/icons/Ellipse.svg"
          width={8}
          height={8}
          className="mt-[12px]"
          alt=""
        />
        <p className="leading-[27.64px] text-[#3E4151]">
          روش استعلام خلافی مد نظر خود را انتخاب نمایید.
        </p>
      </section>
      <section className="mb-8 flex flex-col items-end">
        {/*  <button className="mb-[2px] text-xs text-[#4E94EA] ">
          ویرایش پلاک
        </button> */}
        {plateInfo?.vehicleType === VehicleType.CAR && (
          <PlateCar
            platePart1={plateInfo?.licenseCode1}
            platePart2={plateInfo?.licenseCode2}
            platePart3={plateInfo?.alphabetCode}
            platePart4={plateInfo?.provinceCode}
          />
        )}
        {plateInfo?.vehicleType === VehicleType.MOTOR && (
          <PlateCycle
            platePart1={plateInfo?.motorFirstSection}
            platePart2={plateInfo?.motorSecondSection}
          />
        )}
      </section>
      <section className="mb-[56px] w-[280px]">
        <Radio.Group
          onChange={(e) => setViolationType(e.target.value)}
          className="mt-3 flex flex-col"
          value={violationType}
        >
          <section
            className={`border-[2px] border-solid text-sm leading-[24.8px] ${violationType === 1 ? "border-[#4E94EA]" : "border-[#8B929A36]"}  mb-6 rounded-[5px] py-3 pl-6 pr-3`}
          >
            <Radio value={1} className="text-justify">
              <p className="mb-2 text-base text-[#0165E1]">خلافی با جزئیات</p>
              در صورت داشتن اطلاعات مالک، می‌توانید مجموع مبلغ جرایم وسیله نقلیه
              مورد نظر خود را مشاهده کنید.
            </Radio>
          </section>
          <section
            className={`border-[2px] border-solid text-sm leading-[24.8px]  ${violationType === 2 ? "border-[#4E94EA]" : "border-[#8B929A36]"} rounded-[5px] py-3 pl-6 pr-3`}
          >
            <Radio value={2} className="text-justify">
              <p className="mb-2 text-base text-[#0165E1]">خلافی تجمیعی</p>
              در صورت نداشتن اطلاعات مالک، می‌توانید مجموع مبلغ جرایم وسیله
              نقلیه مورد نظر خود را مشاهده کنید.
            </Radio>
          </section>
        </Radio.Group>
      </section>
      <section className="mb-8 flex items-center gap-[70px] text-lg font-semibold leading-[27.9px] xl:mb-0 xl:gap-[73px]">
        <button className="flex items-center justify-center gap-[6.16px] text-[#4E94EA] "
          onClick={() => setStep(1)}
        >
          <Image
            src="/assets/svg/Vector.svg"
            width={7.1}
            height={15.84}
            className=""
            alt=""
          />
          بازگشت
        </button>
        <Button onClick={goToNextStep} className=" w-[155px] rounded-lg bg-[#0165E1] py-[10px] text-white   ">
          استعلام خلافی
        </Button>
      </section>
    </section>
  );
}
