import { api } from "@/api";
import { Button, CarLicensePlate, ErrorMessage, TextBox } from "@/common";
import { NotifyMessage, VehicleType } from "@/enums";
import { notify } from "@/helper";
import { useAxiosWithToken } from "@/hooks";
import { usePlatesStore } from "@/store/dashboard/plates";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ closeSideBar }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const reloadPlateList = usePlatesStore((state) => state.reloadPlateList);
  const rowData = usePlatesStore((state) => state.rowData);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      plateTitle: rowData?.title,
    },
  });

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [provinceCode, setProvinceCode] = useState(rowData?.provinceCode);
  const [licenseCode2, setLicenseCode2] = useState(rowData?.licenseCode2);
  const [licenseCode1, setLicenseCode1] = useState(rowData?.licenseCode1);
  const [alphabetCode, setAlphabetCode] = useState(rowData?.alphabetCode);
  const [actionLoading, setActionLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const createPlate = (data) => {
    let params = {
      provinceCode: provinceCode,
      alphabetCode: alphabetCode,
      licenseCode1: licenseCode1,
      licenseCode2: licenseCode2,
      title: data.plateTitle,
      vehicleClass: VehicleType.CAR,
    };
    setActionLoading(true);
    useAxiosWithToken
      .post(api.licensePlate.addPlate, params)
      .then((res) => {
        reloadPlateList();
        closeSideBar();
        setActionLoading(false);
        notify.Success(NotifyMessage.SUCCESS_ACTION)
      })
      .catch((err) => {

        setActionLoading(false);
        closeSideBar();
      });
  };
  const editPlate = (data) => {
    let params = {
      provinceCode: provinceCode,
      alphabetCode: alphabetCode,
      licenseCode1: licenseCode1,
      licenseCode2: licenseCode2,
      title: data.plateTitle,
      vehicleClass: VehicleType.CAR,
    };
    setActionLoading(true);
    useAxiosWithToken
      .put(api.licensePlate.editPlate + rowData.id, params)
      .then((res) => {
        reloadPlateList();
        closeSideBar();
        setActionLoading(false);
        notify.Success(NotifyMessage.SUCCESS_ACTION);
      })
      .catch((err) => {

        setActionLoading(false);
        closeSideBar();
      });
  };

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <form
      onSubmit={handleSubmit((data) =>
        rowData ? editPlate(data) : createPlate(data),
      )}
    >
      <section className="mb-[10px] ml-[42px] mr-[37px] mt-8 md:mb-[45px]">
        <section className="mb-[15px] md:mb-[45px]">
          <h2 className="mb-[2px] text-sm text-[#505050]">شماره پلاک</h2>
          <Controller
            control={control}
            name="CarLicensePlate"
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <CarLicensePlate
                provinceCode={provinceCode}
                setProvinceCode={setProvinceCode}
                licenseCode2={licenseCode2}
                setLicenseCode2={setLicenseCode2}
                licenseCode1={licenseCode1}
                setLicenseCode1={setLicenseCode1}
                alphabetCode={alphabetCode}
                setAlphabetCode={setAlphabetCode}
                setPlateIsValid={onChange}
              />
            )}
          />

          {errors.CarLicensePlate && (
            <ErrorMessage>فیلدهای پلاک را به درستی پر کنید</ErrorMessage>
          )}
        </section>
        <section className="mb-[32px] md:mb-[45px]">
          <h2 className="mb-[2px] text-sm text-[#3E4151]">عنوان پلاک</h2>
          <Controller
            control={control}
            name="plateTitle"
            rules={{
              required: "عنوان پلاک اجباری است",
              /*  pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              }, */
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="عنوان پلاک را وارد کنید"
              />
            )}
          />
          {errors.plateTitle && (
            <ErrorMessage>{errors.plateTitle.message}</ErrorMessage>
          )}
        </section>
        <Button type="primary" className="w-full" loading={actionLoading}>
          {rowData ? "ویرایش" : "افزودن"}
        </Button>
      </section>
    </form>
  );
}
