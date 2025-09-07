"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  totalCount,
  setResendBtnState,
  reload,
  resendBtnState,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  /* const [minute, setMinute] = useState(Math.trunc(totalCount / 60));
  const [second, setSecond] = useState(Math.trunc(totalCount % 60)); */

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    document.getElementById("countDown").innerHTML = formatNumber(Math.trunc(totalCount / 60)) + ":" + formatNumber(Math.trunc(totalCount % 60));
    let myCount = totalCount;
    let mySecond;
    let myMinute;
    const myInterval = setInterval(() => {
      if (myCount > 0) {
        myCount = myCount - 1;
        myMinute = Math.trunc(myCount / 60);
        mySecond = myCount - myMinute * 60;
        if (document.getElementById("countDown")) {
          document.getElementById("countDown").innerHTML = formatNumber(myMinute) + ":" + formatNumber(mySecond);
        }
      }
      else {
        clearInterval(myInterval);
        setResendBtnState(true);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const formatNumber = (value) => {
    let num = String(value);
    if (num.length === 1) {
      num = "0" + num;
    } else {
      num = num;
    }
    return num;
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="flex items-center justify-center">
      <section className="h-[24px]">
        {!resendBtnState && (
          <section className="flex">
            <span className="block w-[46px] text-black" id="countDown"></span>
            <span className="mr-2">مانده تا دریافت مجدد کد</span>
          </section>
        )}
      </section>
    </section>
  );
}
