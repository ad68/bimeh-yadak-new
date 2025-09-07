"use client";
import { useEffect, useState } from "react";
import CalculateBox from "./components/CalculateBox";
import DamageParts from "./components/DamageParts";
import Result from "./components/Result";
import moment from "moment-jalaali";
import { api } from "@/api";
import { useAxios, useAxiosWithToken } from "@/hooks";
import { notify } from "@/helper";
import { NotifyMessage } from "@/enums";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  const [typeId, setTypeId] = useState();
  const [calculateBox, setCalculateBox] = useState({
    carId: "",
    colorId: "",
    kilometer: "",
    details: [],
  });
  const [activeTab, setActiveTab] = useState(1);
  const [resultDataNew, setResultDataNew] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [chartMonthList, setChartMonthList] = useState([]);
  const [chartPriceList, setChartPriceList] = useState([]);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  const calculatePrice = () => {
    setButtonLoading(true);
    let params = calculateBox;
    useAxios
      .post(api.car.calculatePriceInsurance, params)
      .then((res) => {
        setButtonLoading(false);

        setResultDataNew(res.data);
        setActiveTab(3);
      })
      .catch((err) => {
        setButtonLoading(false);

      });
  };
  const getChart = () => {
    useAxios
      .get(api.car.getPriceChart + `?carTypeId=${typeId?.value}&pageNo=0&pageSize=24`)
      .then((res) => {
        let resultList = res.data.elements.reverse();
        let priceList = [];
        let monthList = [];
        resultList.forEach((item, index) => {
          let m = moment(item.jalaliPriceDate, "jYYYY/jM/jD");

          if (m.jDate() === 1) {
            priceList.push(item.price);
            monthList.push(m.jYear() + "/" + (m.jMonth() + 1));
          }
        });
        setChartPriceList(priceList);
        setChartMonthList(monthList);
      })
      .catch((err) => { });
  };

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mt-[62px] xl:mt-[80px] flex xl:h-[150px] h-[100px] w-full items-center justify-center bg-primary font-bold  ">
        <h3 className="xl:text-[40px] text-[24px] font-bold text-center px-10">محاسبه افت بیمه خودرو</h3>
      </section>
      <section className={`mt-0 mx-auto max-w-[724px] w-[95%]`}>
        <CalculateBox setCalculateBox={setCalculateBox} calculateBox={calculateBox} setActiveTab={setActiveTab} activeTab={activeTab} buttonLoading={buttonLoading} setButtonLoading={setButtonLoading} typeId={typeId} setTypeId={setTypeId} />
        <DamageParts getChart={getChart} setButtonLoading={setButtonLoading} buttonLoading={buttonLoading} calculatePrice={calculatePrice} setCalculateBox={setCalculateBox} calculateBox={calculateBox} setActiveTab={setActiveTab} activeTab={activeTab} />
        <Result chartMonthList={chartMonthList} chartPriceList={chartPriceList} typeId={typeId} setTypeId={setTypeId} resultDataNew={resultDataNew} activeTab={activeTab} />
      </section>
    </>
  );
}
