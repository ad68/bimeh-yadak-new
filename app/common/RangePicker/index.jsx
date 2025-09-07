"use client";
import React, { useState, useContext, useEffect } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "./style.css";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  min,
  max,
  step,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}) {
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
    <section className="multi-range-slider">
      <MultiRangeSlider
        min={min}
        max={max}
        step={step}
        label={false}
        ruler={false}
        /*  barLeftColor="red"
          barInnerColor="blue"
          barRightColor="green" */
        barInnerColor="#004AAD"
        thumbLeftColor="white"
        thumbRightColor="white"
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          setMinValue(e.minValue);
          setMaxValue(e.maxValue);
        }}
      />
    </section>
  );
}
