"use client";
import React, { useState, useContext, useEffect } from "react";
import Filters from "./components/FilterButtons";
import FilterImage from "./components/FilterImage";
import CarCalculate from "./components/CarCalculate";
import MotorCalculate from "./components/MotorCalculate";
import CarResult from "./components/CarResult";
import MotorResult from "./components/MotorResult";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [vehicleState, setVehicleState] = useState("Car");
  const [resultFormShow, setResultFormShow] = useState(false);

  const [chartPriceList, setChartPriceList] = useState([]);
  const [chartMonthList, setChartMonthList] = useState([]);

  const [result, setResult] = useState();
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const showResult = () => {
    setResultFormShow(true);
  };
  const hideResult = () => {
    setResultFormShow(false);
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    /* showResult(); */
  }, []);

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="relative m-auto mb-10 mt-10 flex min-h-[671px] w-[98%] items-center rounded-2xl bg-[#0b0b0b]  bg-[url('/assets/images/sportCarBlur.png')] bg-cover bg-center bg-no-repeat">
        {resultFormShow && (
          <section className="w-full p-5 transition-all duration-1000 ease-in-out">
            {vehicleState === "Car" && (
              <CarResult
                result={result}
                hideResult={hideResult}
                chartPriceList={chartPriceList}
                chartMonthList={chartMonthList}
              />
            )}
            {vehicleState === "Motor" && (
              <MotorResult result={result} hideResult={hideResult} />
            )}
          </section>
        )}
        {!resultFormShow && (
          <section className="w-full p-5">
            <section>
              <Filters
                setVehicleState={setVehicleState}
                vehicleState={vehicleState}
              />
              {vehicleState === "Car" && (
                <CarCalculate
                  setResult={setResult}
                  showResult={showResult}
                  setChartPriceList={setChartPriceList}
                  setChartMonthList={setChartMonthList}
                />
              )}
              {vehicleState === "Motor" && (
                <MotorCalculate setResult={setResult} showResult={showResult} />
              )}
              {vehicleState === "Truck" && (
                <section className="mt-10 flex h-[288px] items-center justify-center">
                  <h1 className="text-[32px] text-white">به زودی</h1>
                </section>
              )}
            </section>
          </section>
        )}
      </section>
    </>
  );
}
