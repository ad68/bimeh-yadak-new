import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ vehicleState, setVehicleState }) {
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
      <h1 className="text-center text-xl font-bold text-white">
        محاسبه قیمت وسیله نقلیه
      </h1>
      <section className="mt-4 flex items-center justify-center ">
        <button
          className={`mr-2.5 min-w-[80px] rounded-[101px] border  border-solid border-[#ffffff1a] bg-[#ffffff1a] p-[5px] text-xs font-normal text-white ${vehicleState === "Car" && "bg-[#ffffff47]"}`}
          onClick={() => setVehicleState("Car")}
        >
          خودرو
        </button>
        <button
          className={`mr-2.5 min-w-[80px] rounded-[101px] border  border-solid border-[#ffffff1a] bg-[#ffffff1a] p-[5px] text-xs font-normal text-white ${vehicleState === "Motor" && "bg-[#ffffff47]"}`}
          onClick={() => setVehicleState("Motor")}
        >
          موتور
        </button>
        <button
          className={`mr-2.5 min-w-[80px] rounded-[101px] border  border-solid border-[#ffffff1a] bg-[#ffffff1a] p-[5px] text-xs font-normal text-white ${vehicleState === "Truck" && "bg-[#ffffff47]"}`}
          onClick={() => setVehicleState("Truck")}
        >
          ماشین سنگین
        </button>
      </section>
    </>
  );
}
