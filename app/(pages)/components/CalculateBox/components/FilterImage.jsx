import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ vehicleState, showResult }) {
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
    <section
      className={`absolute top-[92px] h-full w-[40%] transition-all duration-1000 ease-in-out ${showResult ? "left-[60%]" : "left-0"}`}
    >
      <Image
        className={`absolute left-[5%] top-[-24%] w-[514px] transition-all duration-200 ${vehicleState === "Car" ? "opacity-1" : "opacity-0"}`}
        width={514}
        height={839}
        src={`/assets/images/bugatti.png`}
        alt="Picture of the author"
      />
      <Image
        className={`absolute left-[5%] top-[-24%] w-[514px] transition-all duration-200 ${vehicleState === "Motor" ? "opacity-1" : "opacity-0"}`}
        width={514}
        height={839}
        src={`/assets/images/Motor.png`}
        alt="Picture of the author"
      />
      <Image
        className={`absolute left-[5%] top-[-24%] w-[514px] transition-all duration-200 ${vehicleState === "Truck" ? "opacity-1" : "opacity-0"}`}
        width={514}
        height={839}
        src={`/assets/images/Truck.png`}
        alt="Picture of the author"
      />
    </section>
  );
}
