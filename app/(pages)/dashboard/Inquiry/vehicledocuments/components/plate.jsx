"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Radio } from "antd";
import { CycleLicensePlate } from "@/common";
import { CarLicensePlate } from "@/common";
import { IconArrowright2 } from "@/common/icons";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ closeSideBar, addPlate }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const overlay = useRef();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [value, setValue] = useState(1);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [mySelect, setMySelect] = useState("");
  const [inputCycleValue1, setInputCycleValue1] = useState("");
  const [inputCycleValue2, setInputCycleValue2] = useState("");
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (addPlate) {
      setTimeout(() => {
        overlay.current.style.opacity = 1;
      }, 50);
    }
  }, [addPlate]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      {addPlate && (
        <section
          ref={overlay}
          onClick={closeSideBar}
          className={` glass fixed left-0 top-0 z-[999] h-full w-full bg-[#64646440] opacity-0 transition-all duration-700`}
        ></section>
      )}
      <section
        className={`fixed block  lg:hidden ${addPlate ? "bottom-0" : "bottom-[-60%]"} bottom-0 left-0 z-[1000] flex h-auto w-full flex-col rounded-t-[20px] bg-white transition-all duration-700 ease-in-out  `}
      >
        <section className="mx-6 my-6 flex gap-2">
          <IconArrowright2
            onClick={closeSideBar}
            strokeWidth="2"
            className="stroke-[#4E94EA]"
          />
          <span className="text-lg font-bold leading-[27.9px] text-[#505050]">
            افزودن پلاک
          </span>
        </section>
        <section className="h-[1.5px] w-full bg-[#F6F6FB]"></section>
        <section className="px-[56.6px] ">
          <section className="my-6">
            <p className="text-sm text-[#505050]">نوع وسیله نقلیه</p>
            <Radio.Group
              onChange={onChange}
              className="mt-3 flex justify-between"
              value={value}
            >
              <Radio value={1}>سواری</Radio>
              <Radio value={2}>موتور سیکلت</Radio>
            </Radio.Group>
          </section>
          <section className=" my-6">
            <h2 className="mb-[2px] text-sm text-[#505050]">شماره پلاک</h2>
            {value === 1 ? (
              <CarLicensePlate
                inputValue1={inputValue1}
                setInputValue1={setInputValue1}
                inputValue2={inputValue2}
                setInputValue2={setInputValue2}
                inputValue3={inputValue3}
                setInputValue3={setInputValue3}
                mySelect={mySelect}
                setMySelect={setMySelect}
              />
            ) : (
              <CycleLicensePlate
                inputValue1={inputCycleValue1}
                setInputValue1={setInputCycleValue1}
                inputValue2={inputCycleValue2}
                setInputValue2={setInputCycleValue2}
              />
            )}
          </section>
          <section className="">
            <h2 className="mb-[2px] text-sm text-[#3E4151]">عنوان پلاک</h2>
            <section className="flex h-[48px] w-full items-center justify-center rounded-[5px] border border-solid border-[#8B929A36] text-sm ">
              <input
                type="text"
                className=" h-[20px] w-full pr-2 outline-none"
                placeholder="عنوان پلاک را وارد کنید"
                onChange={() => {
                  setInputValue4(inputValue4);
                }}
                maxLength={30}
              />
            </section>
          </section>
          <button className="mb-6 mt-6 w-full rounded-lg bg-[#0165E1] py-[10px] text-lg font-bold text-white hover:bg-[#99C1F3] hover:text-[#0165E1]">
            افزودن
          </button>
        </section>
      </section>
      <section
        className={`fixed hidden  lg:block ${addPlate ? "left-0" : "left-[-354px]"} top-0 z-[1000] flex h-full w-[354px] flex-col rounded-r-[20px] bg-white pt-6 transition-all duration-700 ease-in-out`}
      >
        <button onClick={closeSideBar}>
          <Image
            src="/assets/icons/close-circle.svg"
            width={32}
            height={32}
            className="mb-8 mr-[24.34px]"
            alt=""
          />
        </button>
        <h2 className="mx-6 border-b-[1.5px] border-solid border-[#F6F6FB] pb-3 font-semibold text-[#505050]">
          افزودن پلاک
        </h2>
        <section className="mb-[45px] ml-[42px] mr-[37px] mt-8">
          <section className="mb-[45px]">
            <p className="text-sm text-[#505050]">نوع وسیله نقلیه</p>
            <Radio.Group
              onChange={onChange}
              className="mt-3 flex justify-between"
              value={value}
            >
              <Radio value={1}>سواری</Radio>
              <Radio value={2}>موتور سیکلت</Radio>
            </Radio.Group>
          </section>
          <section className="mb-[45px]">
            <h2 className="mb-[2px] text-sm text-[#505050]">شماره پلاک</h2>
            {value === 1 ? (
              <CarLicensePlate
                inputValue1={inputValue1}
                setInputValue1={setInputValue1}
                inputValue2={inputValue2}
                setInputValue2={setInputValue2}
                inputValue3={inputValue3}
                setInputValue3={setInputValue3}
                mySelect={mySelect}
                setMySelect={setMySelect}
              />
            ) : (
              <CycleLicensePlate
                inputValue1={inputCycleValue1}
                setInputValue1={setInputCycleValue1}
                inputValue2={inputCycleValue2}
                setInputValue2={setInputCycleValue2}
              />
            )}
          </section>
          <section className="mb-[45px]">
            <h2 className="mb-[2px] text-sm text-[#3E4151]">عنوان پلاک</h2>
            <section className="flex h-[48px] w-[280px] items-center justify-center rounded-[5px] border border-solid border-[#8B929A36] text-sm ">
              <input
                type="text"
                className=" h-[20px] w-[240px] pr-px outline-none"
                placeholder="عنوان پلاک را وارد کنید"
                onChange={() => {
                  setInputValue4(inputValue4);
                }}
                maxLength={30}
              />
            </section>
          </section>
          <button className="rounded-lg bg-[#0165E1] px-[112.5px] py-[10px] text-lg font-bold text-white hover:bg-[#99C1F3] hover:text-[#0165E1]">
            افزودن
          </button>
        </section>
      </section>
    </>
  );
}
