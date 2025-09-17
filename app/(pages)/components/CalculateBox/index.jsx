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
  const [calculateFormShow, setCalculateFormShow] = useState(true);
  const [calculateResultShow, setCalculateResultShow] = useState(false);
  const [chartPriceList, setChartPriceList] = useState([]);
  const [chartMonthList, setChartMonthList] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [result, setResult] = useState();
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const showResult = () => {
    setAnimate(true);
    setCalculateFormShow(false);
    setTimeout(() => {
      setCalculateResultShow(true);
    }, 1050);
  };
  const hideResult = () => {
    setAnimate(false);
    setCalculateResultShow(false);
    setTimeout(() => {
      setCalculateFormShow(true);
    }, 1000);
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────


  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="relative mb-0 mt-10 flex h-[700px] w-full items-center  rounded-2xl bg-[#002a2f]   bg-cover bg-center bg-no-repeat md:w-[95%]">
        <FilterImage vehicleState={vehicleState} showResult={animate} />
        <section className={`absolute left-[5%] ${calculateResultShow ? `block` : `hidden`} top-0 h-[100%] w-[55%] p-5 transition-all duration-1000 ease-in-out`}>
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
        <section
          className={`absolute top-0  ${calculateFormShow ? `block` : `hidden`} h-[100%] w-3/5 p-32 transition-all duration-1000 ease-in-out`}
        >
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
      </section>
    </>
  );
}
