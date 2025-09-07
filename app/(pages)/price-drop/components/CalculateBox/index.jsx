

import { Select, Button, TextBox, Modal, Number } from "@/common";
import React, { useState, useContext, useEffect } from "react";
import { api } from "@/api";
import moment from "moment-jalaali";
import { useAxios, useAxiosWithToken } from "@/hooks";
import { usePriceDropStore } from "@/store/tools/pricedrop";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  setChartPriceList,
  setChartMonthList,
  replacedParts,
  coloredParts,
  showResultPanel
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const updateResultData = usePriceDropStore((state) => state.updateResultData);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [carId, setCarId] = useState();
  const [brands, setBrands] = useState([]);
  const [brandId, setBrandId] = useState();
  const [brandLoading, setBrandLoading] = useState(false);
  const [models, setModels] = useState([]);
  const [modelId, setModelId] = useState();
  const [modelLoading, setModelLoading] = useState(false);
  const [years, setYears] = useState([]);
  const [yearId, setYearId] = useState();
  const [yearsLoading, setYearsLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [typeId, setTypeId] = useState();
  const [typesLoading, setTypesLoading] = useState(false);
  const [colors, setColors] = useState([]);
  const [colorId, setColorId] = useState();
  const [colorsLoading, setColorsLoading] = useState(false);
  const [kilometer, setKilometer] = useState(1000);

  const [buttonLoading, setButtonLoading] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getBrands = () => {
    setBrandLoading(true);
    useAxios
      .get(api.brand.searchBrand + "?pageSize=100&id=&deviceType=CAR")
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
      .get(api.car.searchCarModelByBrand + "?brandId=" + brandId.value)
      .then((res) => {
        setModelLoading(false);
        setModels(res.data.elements);
      })
      .catch((err) => {
        setModelLoading(false);
      });
  };
  const getYears = () => {
    setYearsLoading(true);
    useAxios
      .get(api.car.getCarYearByModelInfo + "/" + modelId.value)
      .then((res) => {
        setYearsLoading(false);
        setYears(res.data);
      })
      .catch((err) => {
        setYearsLoading(false);
      });
  };
  const getTypes = () => {
    setTypesLoading(true);
    useAxios
      .get(
        api.car.searchCarTypeByCarModelAndYear +
        `?carModelId=${modelId.value}&year=${yearId.value}`,
      )
      .then((res) => {
        setTypesLoading(false);
        setTypes(res.data);
      })
      .catch((err) => {
        setTypesLoading(false);
      });
  };
  const getColors = () => {
    setColorsLoading(true);
    useAxios
      .get(api.colors.getColors)
      .then((res) => {
        setColorsLoading(false);
        setColors(res.data);
      })
      .catch((err) => {
        setColorsLoading(false);
      });
  };
  const searchUniqueCar = () => {
    setButtonLoading(true);
    useAxios
      .get(
        api.car.searchUniqueCar +
        `?modelId=${modelId.value}&typeId=${typeId.value}&year=${yearId.value}`,
      )
      .then((res) => {
        setButtonLoading(false);
        setCarId(res.data.id);
      })
      .catch((err) => {
        setButtonLoading(false);
      });
  };
  const calculatePrice = () => {
    setButtonLoading(true);
    let params = {
      colorId: colorId?.value,
      kilometer: kilometer,
      replacePartDepreciationId: replacedParts,
      coloredPartDepreciationId: coloredParts,
      carId: carId,
    };
    useAxiosWithToken
      .post(api.car.calculatePrice, params)
      .then((res) => {
        setButtonLoading(false);
        updateResultData(res.data);
        showResultPanel()

      })
      .catch((err) => {
        setButtonLoading(false);
      });
  };
  const getChart = () => {
    useAxios
      .get(
        api.car.getPriceChart +
        `?carTypeId=${typeId?.value}&pageNo=0&pageSize=24`,
      )
      .then((res) => {
        let resultList = res.data.elements.reverse();
        let priceList = [];
        let monthList = [];
        resultList.forEach((item, index) => {
          let m = moment(item.jalaliPriceDate, "jYYYY/jM/jD");

          if (m.jDate() === 1) {
            priceList.push(item.price);
            monthList.push(m.jYear() + "/" + (m.jMonth() + 1));
          }
        });
        setChartPriceList(priceList);
        setChartMonthList(monthList);
      })
      .catch((err) => { });
  };
  const clearFrom = () => {
    setBrands([]);
    setBrandId("");
    setModels([]);
    setModelId("");
    setYears([]);
    setYearId("");
    setTypes([]);
    setTypeId("");
    setColors([]);
    setColorId("");
    setCarId("");
    getBrands();
    getColors();
    setReplacedParts([]);
    setColoredParts([]);
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getBrands();
    getColors();
  }, []);
  useEffect(() => {
    if (brandId) {
      getModels();
      setModels([]);
      setModelId("");
      setYears([]);
      setYearId("");
      setTypes([]);
      setTypeId("");
      setColorId("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandId]);

  useEffect(() => {
    if (modelId) {
      getYears();
      setYears([]);
      setYearId("");
      setTypes([]);
      setTypeId("");
      setColorId("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelId]);

  useEffect(() => {
    if (yearId) {
      getTypes();
      setTypes([]);
      setTypeId("");
      setColorId("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearId]);

  useEffect(() => {
    if (modelId?.value && typeId?.value && yearId?.value) {
      searchUniqueCar();
    } else {
      setCarId();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modelId, typeId, yearId]);

  /*   useEffect(() => {
    calculatePrice();
    getChart();
  }, []); */
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section>
        <section className="mt-10 grid grid-cols-3 gap-4">
          <section className="">
            <Select
              options={brands}
              loading={brandLoading}
              setState={setBrandId}
              state={brandId}
              optionValue="id"
              optionTitle="name"
              placeHolder="برند"
              search={true}
            />
          </section>
          <section className="">
            <Select

              options={models}
              loading={modelLoading}
              state={modelId}
              setState={setModelId}
              optionValue="id"
              optionTitle="name"
              placeHolder="مدل"
            />
          </section>
          <section className="">
            <Select

              options={years}
              loading={yearsLoading}
              state={yearId}
              setState={setYearId}
              optionValue="id"
              optionTitle="name"
              placeHolder="سال ساخت"
              sameOption={true}
            />
          </section>
          <section className="">
            <Select
              options={types}
              loading={typesLoading}
              state={typeId}
              setState={setTypeId}
              optionValue="id"
              optionTitle="name"
              placeHolder="تیپ"
            />
          </section>
          <section className="">
            <Select

              options={colors}
              loading={colorsLoading}
              state={colorId}
              setState={setColorId}
              optionValue="id"
              optionTitle="parameter"
              placeHolder="رنگ"
            />
          </section>
          <section className="">
            <Number

              title="کیلومتر"
              state={kilometer}
              setState={setKilometer}
            />
          </section>
        </section>

        <section className="flex justify-center gap-[24px]">
          {/*  <Button className="ml-2 mt-10" dark onClick={clearFrom}>
            پاک کردن اطلاعات
          </Button> */}
          <Button
            loading={buttonLoading}
            className="mt-10 w-[284px]"
            onClick={() => {
              calculatePrice();
              getChart();
            }}
            disabled={!carId || !colorId}
          >
            محاسبه افت قیمت بازار
          </Button>
          <Button
            loading={buttonLoading}

            className="mt-10 w-[284px] text-blue"
            outlined
            onClick={() => {
              calculatePrice();
              getChart();
            }}
            disabled={!carId || !colorId}
          >
            محاسبه افت قیمت بیمه
          </Button>
        </section>
      </section>

    </>
  );
}
