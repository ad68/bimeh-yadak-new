"use client";
import { useState, useEffect } from "react";
import { Select } from "antd";
import "./style.css";
import axios from "axios";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({
  title,
  dark,
  api,
  optionTitle,
  optionValue,
  onSearch,
  setState,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ********************************
  useEffect(() => {
    setLoading(true);
    axios(api)
      .then((res) => {
        setLoading(false);
        let response = res.data.elements;
        let arr = [];
        response.forEach((element) => {
          arr.push({
            value: element[optionValue],
            label: element[optionTitle],
          });
        });

        setData(arr);
      })
      .catch((e) => {
        setLoading(false);
        // alert("Error !!!!!!")
      });
  }, [api, optionTitle, optionValue]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Select
        lang="fa"
        placeholder={title ? title : "انتخاب کنید"}
        className={dark ? "darkSelect" : ""}
        loading={loading}

        style={{
          width: "100%",

        }}
        options={data}
        onSearch={onSearch}
        filterOption={filterOption}
        optionFilterProp="children"
        // {...rest}
        /* defaultValue={{
        value: 'lucy',
        label: 'Lucy (101)',
        }} */
        onChange={(value) => setState(value)}
      />
    </>
  );
}
