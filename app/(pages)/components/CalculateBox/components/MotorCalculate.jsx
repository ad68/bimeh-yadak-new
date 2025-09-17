import { Select, Button, TextBox, Modal, Number } from "@/common";
import React, { useState, useContext, useEffect } from "react";

import { api } from "@/api";

import moment from "moment-jalaali";
import { useAxios } from "@/hooks";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ showResult, setResult }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  const [brands, setBrands] = useState([]);
  const [brandId, setBrandId] = useState();
  const [brandLoading, setBrandLoading] = useState(false);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [modelId, setModelId] = useState();
  const [modelLoading, setModelLoading] = useState(false);
  const [yearId, setYearId] = useState();
  const [kilometer, setKilometer] = useState(200);
  const [buttonLoading, setButtonLoading] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getBrands = () => {
    setBrandLoading(true);
    useAxios
      .get(api.brand.searchBrand + "?pageSize=100&id=&deviceType=MOTORCYCLE")
      .then((res) => {
        setBrandLoading(false);
        setBrands(res.data.elements);
        /* console.log(res.data.elements); */
      })
      .catch((err) => {
        setBrandLoading(false);
      });
  };
  const getModels = () => {
    setModelLoading(true);
    useAxios
      .get(
        api.car.searchCarModelByBrand +
        "?&deviceType=MOTORCYCLE&brandId=" +
        brandId.value,
      )
      .then((res) => {
        setModelLoading(false);
        setModels(res.data.elements);
      })
      .catch((err) => {
        setModelLoading(false);
      });
  };

  const calculatePrice = () => {
    setButtonLoading(true);
    let params = {
      modelId: modelId?.value,
      year: yearId.value,
      kilometer: kilometer,
    };
    useAxios
      .post(api.motor.calculatePrice, params)
      .then((res) => {
        setButtonLoading(false);
        setResult(res.data);
        showResult();
      })
      .catch((err) => {
        setButtonLoading(false);
      });
  };
  const clearFrom = () => {
    setBrands([]);
    setBrandId("");
    setModels([]);
    setModelId("");
    setYearId("");

    getBrands();
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getBrands();
  }, []);
  useEffect(() => {
    if (brandId) {
      getModels();
      setModels([]);
      setModelId("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandId]);
  useEffect(() => {
    if (modelId) {
      setYearId("");
    }
  }, [modelId]);
  useEffect(() => {
    const m = parseInt(moment().format("jYYYY"));
    let arr = [];
    for (let i = m; i >= 1380; i--) {
      arr.push({
        label: i,
        value: i,
      });
    }
    setYears(arr);
  }, []);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section>
        <section className="mt-10 grid grid-cols-6 gap-4">
          <section className="col-span-3">
            <Select
              dark
              options={brands}
              loading={brandLoading}
              setState={setBrandId}
              state={brandId}
              optionValue="id"
              optionTitle="name"
              placeHolder="برند"
            />
          </section>
          <section className="col-span-3">
            <Select
              dark
              options={models}
              loading={modelLoading}
              state={modelId}
              setState={setModelId}
              optionValue="id"
              optionTitle="name"
              placeHolder="مدل"
            />
          </section>

          <section className="col-span-3">
            <Select
              dark
              options={years}
              state={yearId}
              setState={setYearId}
              optionValue="label"
              optionTitle="value"
              placeHolder="سال ساخت"
            />
          </section>
          <section className="col-span-3">
            <Number
              dark
              title="کیلومتر"
              state={kilometer}
              setState={setKilometer}
            />
          </section>
        </section>
        <section className="flex justify-center">
          <Button className="ml-2 mt-10" dark onClick={clearFrom}>
            پاک کردن اطلاعات
          </Button>
          <Button
            loading={buttonLoading}
            className="mt-10"
            type="secondary"
            onClick={() => {
              calculatePrice();
            }}
            disabled={!yearId || !modelId || !kilometer}
          >
            تخمین قیمت
          </Button>
        </section>
      </section>
    </>
  );
}
