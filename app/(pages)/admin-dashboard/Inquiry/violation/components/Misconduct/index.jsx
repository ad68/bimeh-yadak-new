"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Radio } from "antd";
import OffenseList from "./components/OffenseList";
import { ComponentLoading, CycleLicensePlate, ErrorMessage } from "@/common";
import WithoutPlate from "./components/WithoutPlate";
import { CarLicensePlate } from "@/common";
import { useAxiosWithToken } from "@/hooks";
import { api } from "@/api";
import { useViolationStore } from "@/store/dashboard/violation";
import { VehicleType } from "@/enums";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setStep }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const updatePlateInfo = useViolationStore((state) => state.updatePlateInfo);

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [provinceCode, setProvinceCode] = useState();
  const [licenseCode2, setLicenseCode2] = useState();
  const [licenseCode1, setLicenseCode1] = useState();
  const [alphabetCode, setAlphabetCode] = useState();
  const [carPlateIsValid, setCarPlateIsValid] = useState(false);
  const [motorPlateIsValid, setMotorPlateIsValid] = useState(false);
  const [vehicleType, setVehicleType] = useState(1);
  const [motorFirstSection, setMotorFirstSection] = useState();
  const [motorSecondSection, setMotorSecondSection] = useState();
  const [firstSubmit, setFirstSubmit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [plateList, setPlateList] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [currentPlate, setCurrentPlate] = useState();

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const goToNextStep = () => {
    setFirstSubmit(true);
    if (vehicleType === 1) {
      if (carPlateIsValid) {
        updatePlateInfo({
          provinceCode: provinceCode,
          licenseCode2: licenseCode2,
          licenseCode1: licenseCode1,
          alphabetCode: alphabetCode,
          vehicleType: VehicleType.CAR,
        });
        setStep(2);
      }
    } else if (vehicleType === 2) {
      if (motorPlateIsValid) {
        updatePlateInfo({
          motorFirstSection: motorFirstSection,
          motorSecondSection: motorSecondSection,
          vehicleType: VehicleType.MOTOR,
        });
        setStep(2);
      }
    }
  };
  const getPlates = () => {
    setLoading(true);
    useAxiosWithToken
      .get(api.licensePlate.searchWithPagination + `?pageNo=0&pageSize=200`)
      .then((res) => {
        setPlateList(res?.data?.elements);
        setTotalElements(res?.data?.totalElements);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const resetPlate = () => {
    setProvinceCode("");
    setLicenseCode1("");
    setLicenseCode2("");
    setAlphabetCode("الف");
    setMotorFirstSection("");
    setMotorSecondSection("");
    setCurrentPlate({});
    setFirstSubmit(false);
  };
  // ─── Life Cycle ─────────────────── ──────────────────────────────────────────────
  useEffect(() => {
    getPlates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (currentPlate) {
      if (currentPlate?.vehicleClass === VehicleType.CAR) {
        setAlphabetCode(currentPlate?.alphabetCode);
        setLicenseCode2(currentPlate?.licenseCode2);
        setLicenseCode1(currentPlate?.licenseCode1);
        setProvinceCode(currentPlate?.provinceCode);
      }
      if (currentPlate?.vehicleClass === VehicleType.MOTOR) {
        setMotorFirstSection(currentPlate?.motorFirstSection);
        setMotorSecondSection(currentPlate?.motorSecondSection);
      }
    }
  }, [currentPlate]);
  useEffect(() => {
    resetPlate();
  }, [vehicleType]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto mt-[37px] max-w-full rounded-xl  p-8 shadow-[-4px_-4px_4px_0px_#F6F6FBCC,4px_4px_12px_0px_#F6F6FBCC] md:w-[80%] md:px-[79px] xl:mr-6 xl:w-[407px] xl:px-8 ">
        <section className="mb-8 flex items-start gap-2">
          <Image
            src="/assets/icons/Ellipse.svg"
            width={8}
            height={8}
            className="mt-[12px]"
            alt=""
          />
          <p className="leading-[27.64px] text-[#3E4151]">
            برای مشاهده خلافی شماره پلاک خود را وارد کنید یا از لیست “ پلاک‌های
            من” پلاک مد نظر خود را انتخاب نمایید.
          </p>
        </section>
        <section className="xl:ml-[33.5px] xl:mr-[29.65px]">
          <p className="text-sm text-[#505050]">نوع وسیله نقلیه</p>
          <Radio.Group
            onChange={(e) => setVehicleType(e.target.value)}
            className="mt-3 flex justify-between"
            value={vehicleType}
          >
            <Radio value={1}>سواری</Radio>
            <Radio value={2}>موتور سیکلت</Radio>
          </Radio.Group>
        </section>
        <section className="mb-8  mt-[31px] border-b border-dashed border-[#8B929A36] pb-8 xl:ml-[33.5px] xl:mr-[29.65px]">
          <h2 className="text-sm font-normal">شماره پلاک</h2>
          {vehicleType === 1 ? (
            <CarLicensePlate
              provinceCode={provinceCode}
              setProvinceCode={setProvinceCode}
              licenseCode2={licenseCode2}
              setLicenseCode2={setLicenseCode2}
              licenseCode1={licenseCode1}
              setLicenseCode1={setLicenseCode1}
              alphabetCode={alphabetCode}
              setAlphabetCode={setAlphabetCode}
              setPlateIsValid={setCarPlateIsValid}
            />
          ) : (
            <CycleLicensePlate
              motorFirstSection={motorFirstSection}
              setMotorFirstSection={setMotorFirstSection}
              motorSecondSection={motorSecondSection}
              setMotorSecondSection={setMotorSecondSection}
              setPlateIsValid={setMotorPlateIsValid}
            />
          )}
          {!carPlateIsValid & (vehicleType === 1) & firstSubmit ? (
            <ErrorMessage>لطفا پلاک را به درستی پر کنید</ErrorMessage>
          ) : !motorPlateIsValid && vehicleType === 2 && firstSubmit ? (
            <ErrorMessage>لطفا پلاک را به درستی پر کنید</ErrorMessage>
          ) : (
            ""
          )}
        </section>
        <section className="mt-8 xl:ml-[33.5px] xl:mr-[29.65px]">
          <p className="mb-3 text-sm text-[#3E4151]">پلاک‌های من</p>
          {loading && <ComponentLoading />}
          {(totalElements === 0) & !loading ? <WithoutPlate /> : ""}
          {(totalElements > 0) & !loading ? (
            <section className="h-[180px] overflow-auto px-4">
              {vehicleType === 1 && (
                <>
                  {plateList.map((item, index) => (
                    <section key={index}>
                      {item.vehicleClass === VehicleType.CAR && (
                        <OffenseList
                          setCurrentPlate={setCurrentPlate}
                          data={item}
                        />
                      )}
                    </section>
                  ))}
                </>
              )}
              {vehicleType === 2 && (
                <>
                  {plateList.map((item, index) => (
                    <section key={index}>
                      {item.vehicleClass === VehicleType.MOTOR && (
                        <OffenseList
                          setCurrentPlate={setCurrentPlate}
                          data={item}
                        />
                      )}
                    </section>
                  ))}
                </>
              )}
            </section>
          ) : (
            ""
          )}

          <button
            onClick={goToNextStep}
            className=" mt-6 h-[48px] w-full  max-w-full rounded-lg bg-[#0165E1] text-lg font-semibold text-[#FFFFFF] hover:bg-[#99C1F3] hover:text-[#0165E1] xl:w-[315px]"
          >
            ثبت
          </button>
        </section>
      </section>
    </>
  );
}
