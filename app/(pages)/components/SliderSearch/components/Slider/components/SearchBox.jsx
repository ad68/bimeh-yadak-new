"use client";
import MultiRangeSlider from "multi-range-slider-react";
import { IconSearch } from "@/common/icons";
import { useRef, useState } from "react";
import { Select, AsyncSelect } from "@/common";
import { api } from "@/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { consoleLog_BlackGreen } from "@/helper";

export default function FormRange() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const router = useRouter();

  const types = [
    { label: "خودرو", value: "CAR" },
    { label: "موتور", value: "MOTORCYCLE" },
    { label: "ماشین سنگین", value: "" },
  ];
  // ─── States ──────────────────────────────────────────────────────────────────
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(2000000000);
  const [type, setType] = useState(types[0]);
  const [brandId, setBrandId] = useState();
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const numberToText = (value) => {
    let res;
    if (value >= 1000000 && value < 1000000000) {
      res = (parseInt(value) / 1000000).toFixed(0) + "میلیون";
    } else if (value > 1000000 && value >= 1000000000) {
      res = (parseInt(value) / 1000000000).toFixed(1) + "میلیارد";
    } else {
      res = 0;
    }
    return res;
  };
  const goToSearchList = () => {
    if (type.value === "CAR") {
      router.push(
        `/car-category?brandId=${brandId?.value}&minValue=${minValue}&maxValue=${maxValue}`,
      );
    } else if (type.value === "MOTORCYCLE") {
      router.push(
        `/motor-category?brandId=${brandId?.value}&minValue=${minValue}&maxValue=${maxValue}`,
      );
    }
  };
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  return (
    <section className=" absolute mx-auto w-[90%] rounded-[7px] bg-[#f6f6fbb4] bg-white py-[30px] shadow-[0px_2px_6px_0px_#00000024] md:px-1 md:pb-8 xl:top-[80px] xl:h-[100px]  xl:w-[900px] xl:py-0 2xl:top-[10px] 2xl:w-[1000px] dark:bg-[#303643]">
      <section className="mx-auto flex w-[85%] flex-col md:grid md:w-full md:grid-cols-2  md:items-center md:justify-between md:gap-x-6 md:px-6 xl:flex xl:h-[100px] xl:w-full xl:flex-row">
        <section className="flex w-full flex-col items-start justify-center gap-2 text-sm font-normal">
          <span>نوع</span>
          <Select
            options={types}
            setState={setType}
            state={type}
            optionValue="value"
            optionTitle="label"
            placeHolder="برند"
          />
        </section>
        {/* *************************** */}
        <section className="flex w-full flex-col items-start justify-center gap-2 text-sm font-normal">
          <span>برند</span>
          <AsyncSelect
            api={
              api.brand.searchBrand +
              `?pageSize=100&id=&deviceType=${type.value}`
            }
            setState={setBrandId}
            state={brandId}
            condition={type.value}
            search={true}
            optionValue="id"
            optionTitle="name"
            placeHolder="برند"
            borderRadius="4px"
          />
        </section>
        {/* *************************** */}
        <section className="mt-4  flex w-full flex-col items-start justify-center gap-2 xl:mt-0 ">
          <section className="inline-flex w-full items-start justify-between text-sm font-normal xl:pl-2">
            <span className="">قیمت</span>
            <section className="flex w-[210px] justify-between">
              <strong>{numberToText(maxValue)}</strong>
              <strong>{numberToText(minValue)}</strong>
            </section>
          </section>
          <section className="relative mt-1 inline-block  h-[40px] w-full rounded-[4px] bg-white p-5 shadow-[0px_2px_6px_0px_#00000024] md:-ml-2 xl:w-[261px]">
            <MultiRangeSlider
              min={0}
              max={2000000000}
              step={100000000}
              label="false"
              ruler="false"
              barInnerColor="#0165E1"
              thumbLeftColor="white"
              thumbRightColor="white"
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                set_minValue(e.minValue);
                set_maxValue(e.maxValue);
              }}
            />
          </section>
        </section>
        {/* *************************** */}

        <button
          onClick={goToSearchList}
          className=" mx-auto mt-7 inline-flex h-[40px] w-full items-center justify-center rounded-md bg-blue  md:mx-0 md:mt-12 xl:mt-8 xl:w-[50%]"
        >
          <section className="flex items-center justify-center gap-2">
            <IconSearch
              className=""
              viewBox="0 0 18 18"
              fill="#fff"
              color="#fff"
              width={18}
              height={18}
              strokeWidth="0"
            />
            <span className="block text-sm font-semibold text-white ">
              جستجو
            </span>
          </section>
        </button>
      </section>
    </section>
  );
}
