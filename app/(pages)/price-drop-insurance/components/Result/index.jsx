"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/common";
import ModalInfo from "./components/ModalInfo";
import ModalChart from "./components/ModalChart";
import { scrollToTop, numberWithCommas } from "@/helper";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  resultDataNew,
  activeTab,
  chartMonthList,
  chartPriceList,
}) {
  function formatNumber(str) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  let numberStr = String(resultDataNew.price);
  let numberStr1 = String(resultDataNew.priceUp);
  let numberStr2 = String(resultDataNew.priceDown);

  let price = formatNumber(numberStr);
  let price1 = formatNumber(numberStr1);
  let price2 = formatNumber(numberStr2);
  const [open, setOpen] = useState(false);
  const [openChart, setOpenChart] = useState(false);

  useEffect(() => {
    if (activeTab === 3) {
      scrollToTop()
    }
  }, [activeTab])
  return (
    <>
      {open && (
        <ModalInfo
          open={open}
          setOpen={setOpen}
          resultDataNew={resultDataNew}
        />
      )}
      {openChart && (
        <ModalChart
          openChart={openChart}
          setOpenChart={setOpenChart}
          resultDataNew={resultDataNew}
          chartMonthList={chartMonthList}
          chartPriceList={chartPriceList}
        />
      )}
      <section
        className={`${activeTab === 3 ? "visible" : "hidden"} mb-4 flex  flex-col text-sm w-full`}
      >
        <section className="flex gap-2 mt-3 self-end">
          <Button onClick={() => setOpenChart(true)}>
            مشاهده نمودار  قیمت خودرو
          </Button>
          <Button outlined onClick={() => setOpen(true)}>
            مشاهده اطلاعات خودرو
          </Button>
        </section>

        <h2 className={` pt-4`}>
          <span className="w-2 h-2 rounded-full ml-1 bg-yellow-500 inline-block"></span>
          افت قیمت خودرو
        </h2>
        <section className="w-full bg-[#fcfcfc]  rounded-lg p-4 mt-4">
          <section className="flex w-full text-sm justify-between">
            <div className="">
              <span className="w-2 h-2 rounded-full ml-2 bg-gray-400 inline-block"></span>
              نوع خودرو
            </div>
            <div>
              {resultDataNew.ordinaryCar
                ? "متعارف"
                : "نامتعارف"}
            </div>
          </section>
          <section className="flex w-full text-sm mt-4 text-red justify-between">
            <div className="text-red">
              <span className="w-2 h-2 rounded-full ml-2 bg-gray-400 inline-block"></span>
              قیمت کل افت:
            </div>
            <div>{numberWithCommas(resultDataNew.totalDefectedPrice)} تومان</div>
          </section>
        </section>
        <section className="w-full bg-[#fcfcfc] text-[#505050]  border-[2px] border-[#ffc114] rounded-lg p-4 mt-5">
          <span>نکته:</span>
          <p className=" text-xs leading-[27px] mt-4 rounded-lg bg-white text-justify p-4">
            {resultDataNew.ruleDescription}
          </p>
        </section>
        <h2 className={` pt-4`}>
          <span className="w-2 h-2 rounded-full ml-1 bg-yellow-500 inline-block"></span>
          جزئیات افت قیمت بیمه ای
        </h2>
        <section className="w-full bg-[#fcfcfc]  rounded-lg p-4 mt-4">
          <section className="grid grid-cols-3 w-full text-sm justify-items-center">
            <div className="">عنوان</div>
            <div>مبلغ افت(تومان)</div>
            <div>شدت حادثه</div>
          </section>
        </section>

        {resultDataNew.defectDetails &&
          resultDataNew.defectDetails.map((item) => (
            <>
              <section className="w-full bg-[#fcfcfc]  rounded-lg p-4 mt-4">
                <section className="grid grid-cols-3 w-full text-sm justify-items-center">
                  <div className="">{item.parameter}</div>
                  <div>{formatNumber(String(item.defectedPrice))}</div>
                  <div>{item.accidentCoefficientType}</div>
                </section>
              </section>
            </>
          ))}
        <section className="w-full bg-[#fcfcfc]  rounded-lg p-4 mt-4">
          <h3 className="text-center text-lg"> قیمت خودرو</h3>
          <h4 className="text-center mt-2 text-[#ffc114] text-base">
            {resultDataNew.nickName}
          </h4>
          <section className="w-full bg-[#fcfcfc] text-xs flex justify-center flex-col gap-5 items-center  rounded-lg p-4 mt-4">
            <Image
              alt=""
              src={resultDataNew.imageUrl}
              width={100}
              height={100}
            />
            <section className="flex  mt-2 gap-2">
              <div className="flex flex-col   gap-3">
                <div> حداقل قیمت بازار </div>
                <div className="text-center">{price2} تومان</div>
              </div>
              <div className="flex flex-col gap-3">
                <div>قیمت کارشناسی</div>
                <div className="text-center">{price} تومان</div>
              </div>
              <div className="flex flex-col gap-3">
                <div> حداکثر قیمت بازار </div>
                <div className="text-center">{price1} تومان</div>
              </div>
            </section>
          </section>
        </section>
        <Link href="/" className="mt-8 w-full mb-5">
          <Button className="w-full">بازگشت به صفحه اصلی</Button>
        </Link>
      </section>
    </>
  );
}
