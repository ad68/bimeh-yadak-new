import { Select, Button, TextBox, Modal, Number } from "@/common";
import React, { useState, useContext, useEffect } from "react";
import BodyStatusModal from "../modals/BodyStatusModal";

import { api } from "@/api";

import moment from "moment-jalaali";
import { useAxios } from "@/hooks";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  showResult,
  setResult,
  setChartPriceList,
  setChartMonthList,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

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
  const [modal, setModal] = useState(false);
  const [coloredParts, setColoredParts] = useState([]);
  const [replacedParts, setReplacedParts] = useState([]);
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
    useAxios
      .post(api.car.calculatePrice, params)
      .then((res) => {
        setButtonLoading(false);
        setResult(res.data);
        showResult();
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
      .catch((err) => {});
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
        <section className="grid-cols1 mt-10 grid gap-4">
          <section>
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
          <section>
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

          <section>
            <Select
              dark
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
          <section>
            <Select
              dark
              options={types}
              loading={typesLoading}
              state={typeId}
              setState={setTypeId}
              optionValue="id"
              optionTitle="name"
              placeHolder="تیپ"
            />
          </section>
          <section>
            <Select
              dark
              options={colors}
              loading={colorsLoading}
              state={colorId}
              setState={setColorId}
              optionValue="id"
              optionTitle="parameter"
              placeHolder="رنگ"
            />
          </section>
          <section>
            <Number
              dark
              title="کیلومتر"
              state={kilometer}
              setState={setKilometer}
            />
          </section>
        </section>

        <section className="mt-3 flex items-center justify-between ">
          <section className="flex h-[40px] w-[78%]  cursor-pointer items-center justify-start rounded-[8px] bg-[#2f2f2f80] px-2 text-xs text-white ">
            {`${coloredParts.length > 0 ? coloredParts.length : "بدون هیچ"} قطعه رنگ شده و ${replacedParts.length > 0 ? replacedParts.length : "بدون هیچ"} قطعه تعویض شده`}
          </section>
          <Button
            onClick={() => setModal(true)}
            style={{ width: "20%", height: 40, fontSize: 12 }}
          >
            افزودن
          </Button>
        </section>
        <section className="flex justify-center">
          <Button className="ml-2 mt-10" dark onClick={clearFrom}>
            پاک کردن اطلاعات
          </Button>
          <Button
            loading={buttonLoading}
            className="mt-10"
            onClick={() => {
              calculatePrice();
              getChart();
            }}
            disabled={!carId || !colorId}
          >
            تخمین قیمت
          </Button>
        </section>
      </section>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        width={550}
        title="وضعیت بدنه"
      >
        <BodyStatusModal
          setReplacedPart={setReplacedParts}
          setColoredPart={setColoredParts}
          closeModal={() => setModal(false)}
        />
      </Modal>
    </>
  );
}
