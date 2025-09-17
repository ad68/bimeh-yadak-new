"use client";
import React, { useState, useContext, useEffect } from "react";
import Select from "react-select";
import "./style.css";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  dark,
  loading,
  options,
  setState,
  state,
  optionTitle,
  optionValue,
  placeHolder,
  sameOption,
  search,
  defaultValue,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  /* const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]; */
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [myOptions, setMyOptions] = useState([]);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    let arr = [];
    if (sameOption) {
      if (options.length > 0) {
        options.forEach((item) => {
          arr.push({ value: item, label: item });
        });
      }
    } else {
      options?.forEach((item) => {
        arr.push({ value: item[optionValue], label: item[optionTitle] });
      });
    }

    setMyOptions(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const searchInObjArray = (arr) => {
    let result;
    arr.forEach((item) => {
      if (item.value === defaultValue) {
        result = item;
      }
    });
    return result;
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <Select
      options={myOptions}
      isLoading={loading}
      onChange={setState}
      isRtl={true}
      value={state}
      placeholder={placeHolder ? placeHolder : "انتخاب کنید..."}
      isSearchable={search}
      loadingMessage={() => <span>در حال بارگزاری...</span>}
      noOptionsMessage={() => <span>اطلاعاتی موجود نیست</span>}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "black" : "silver",
          backgroundColor: dark ? "#2f2f2f80" : "white",
          height: "48px",
          width: "100% !important",
        }),
        /*   option: (provided) => ({
            ...provided,
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black",
          }), */
        singleValue: (provided) => ({
          ...provided,
          color: dark ? "white" : "black",
        }),
        input: (provided) => ({
          ...provided,
          color: dark ? "white" : "black",
        }),
      }}
    />
  );
}
