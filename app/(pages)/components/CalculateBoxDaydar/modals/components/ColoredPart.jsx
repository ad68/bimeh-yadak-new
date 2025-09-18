import React, { useState, useContext, useEffect } from "react";
import Loading from "./Loading";

import { api } from "@/api";

import { Checkbox } from "antd";
import { generateOptions } from "@/helper";
import { useAxios } from "@/hooks";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setColoredPart }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  /* const options = [
    {
      label: "Apple",
      value: "Apple",
    },
    {
      label: "Pear",
      value: "Pear",
    },
    {
      label: "Orange",
      value: "Orange",
    },
  ]; */

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [coloredPartList, setColoredPartList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getColoredPart = () => {
    setLoading(true);
    useAxios
      .get(api.carBodyStatus.getColoredPart)
      .then((res) => {
        setLoading(false);
        setColoredPartList(generateOptions(res.data, "id", "parameter"));
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const onChange = (checkedValues) => {
    /*  console.log("checked = ", checkedValues);
    console.log(checkedValues.includes("withoutColoredPart")); */
    if (checkedValues.includes("withoutColoredPart")) {
      setColoredPart([]);
      setDisabled(true);
    } else {
      setColoredPart(checkedValues);
      setDisabled(false);
    }
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getColoredPart();
  }, []);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="h-[400px]">
      {loading && <Loading />}
      {/* {coloredPartList.map((item, index) => (
        <h1 key={index}>{item.label}</h1>
      ))} */}

      <Checkbox.Group
        /*  options={coloredPartList}
        defaultValue={[1]} */
        onChange={onChange}
        style={{ marginRight: "30px" }}
      >
        <section className="grid grid-cols-2 gap-x-8">
          <section className="m-2 flex justify-start rounded-lg border border-gray-100 p-2">
            <Checkbox value="withoutColoredPart">بدون رنگ</Checkbox>
          </section>

          {coloredPartList.map((item, index) => (
            <section
              className="m-2 flex justify-start rounded-lg border border-gray-100 p-2"
              key={index}
            >
              <Checkbox checked={true} disabled={disabled} value={item.value}>
                {item.label}
              </Checkbox>
            </section>
          ))}
        </section>
      </Checkbox.Group>
    </section>
  );
}
