import React, { useState, useContext, useEffect } from "react";
import Loading from "./Loading";

import { api } from "@/api";
import { token } from "@/config";
import { Checkbox } from "antd";
import { generateOptions } from "@/helper";
import { useAxios } from "@/hooks";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setReplacedPart }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [replacedPartList, setReplacedPartList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getReplacedPart = () => {
    setLoading(true);
    useAxios
      .get(api.carBodyStatus.getReplacedPart)
      .then((res) => {
        setLoading(false);
        setReplacedPartList(generateOptions(res.data, "id", "parameter"));
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const onChange = (checkedValues) => {
    /*  console.log("checked = ", checkedValues);
    console.log(checkedValues.includes("withoutColoredPart")); */
    if (checkedValues.includes("withoutReplacedPart")) {
      setReplacedPart([]);
      setDisabled(true);
    } else {
      setReplacedPart(checkedValues);
      setDisabled(false);
    }
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getReplacedPart();
  }, []);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="h-[400px]">
      {loading && <Loading />}

      <Checkbox.Group
        /*  options={coloredPartList}
        defaultValue={[1]} */
        onChange={onChange}
        style={{ marginRight: "30px" }}
      >
        <section className="grid grid-cols-2 gap-x-8">
          <section className="m-2 flex justify-start rounded-lg border border-gray-100 p-2">
            <Checkbox value="withoutReplacedPart">بدون تعویض شدگی</Checkbox>
          </section>

          {replacedPartList.map((item, index) => (
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
