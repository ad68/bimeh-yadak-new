"use client";
import React, { useState, useRef, useEffect } from "react";
import { Popover, Radio } from "antd";
import SideBar from "../../../../components/ActionSideBar";
import CarPlateForm from "./components/CarPlateForm";
import MotorPlateForm from "./components/MotorPlateForm";
import { usePlatesStore } from "@/store/dashboard/plates";
import { consoleLog_BlackOrange, consoleLog_BlackRed } from "@/helper";
import { VehicleType } from "@/enums";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const sideBarShow = usePlatesStore((state) => state.sideBarShow);
  const hideSideBar = usePlatesStore((state) => state.hideSideBar);
  const rowData = usePlatesStore((state) => state.rowData);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [vehicleType, setVehicleType] = useState(1);

  useEffect(() => {
    if (rowData) {
      if (rowData?.vehicleClass === VehicleType.CAR) {
        setVehicleType(1);
      } else if (rowData?.vehicleClass === VehicleType.MOTOR) {
        setVehicleType(2);
      }
    } else {
      setVehicleType(1);
    }
  }, [rowData]);
  useEffect(() => {
    consoleLog_BlackOrange(vehicleType);
  }, [vehicleType]);

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <SideBar sideBarShow={sideBarShow} onClose={hideSideBar}>
        <h2 className="mx-6 border-b-[1.5px] border-solid border-[#F6F6FB] pb-3 font-semibold text-[#505050]">
          افزودن پلاک
        </h2>

        <section className="ml-[42px] mr-[37px] mt-4 md:mb-[45px] md:mt-8">
          <section className="md:mb-[45px]">
            <p className="text-sm text-[#505050]">نوع وسیله نقلیه</p>
            <Radio.Group
              onChange={(e) => setVehicleType(e.target.value)}
              className="mt-3 flex justify-between"
              value={vehicleType}
            >
              <Radio value={1}>سواری</Radio>
              <Radio value={2}>موتور سیکلت</Radio>
            </Radio.Group>
          </section>
        </section>

        {vehicleType === 1 ? (
          <CarPlateForm closeSideBar={hideSideBar} />
        ) : vehicleType === 2 ? (
          <MotorPlateForm closeSideBar={hideSideBar} />
        ) : (
          ""
        )}
      </SideBar>
    </>
  );
}
