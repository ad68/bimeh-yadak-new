import { api } from "@/api";
import { Button, CycleLicensePlate, ErrorMessage, TextBox } from "@/common";
import { NotifyMessage, NotifyType, VehicleType } from "@/enums";
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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      plateTitle: rowData?.title,
    },
  });

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [motorFirstSection, setMotorFirstSection] = useState(
    rowData?.motorFirstSection,
  );
  const [motorSecondSection, setMotorSecondSection] = useState(
    rowData?.motorSecondSection,
  );
  const [plateIsValid, setPlateIsValid] = useState(false);
  const [firstSubmit, setFirstSubmit] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const createPlate = (data) => {
    if (plateIsValid) {
      let params = {
        motorFirstSection: motorFirstSection,
        motorSecondSection: motorSecondSection,
        title: data.plateTitle,
        vehicleClass: VehicleType.MOTOR,
      };
      setActionLoading(true);
      useAxiosWithToken
        .post(api.licensePlate.addPlate, params)
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
    }
  };
  const editPlate = (data) => {
    if (plateIsValid) {
      let params = {
        motorFirstSection: motorFirstSection,
        motorSecondSection: motorSecondSection,
        title: data.plateTitle,
        vehicleClass: VehicleType.MOTOR,
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
    }
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
          <CycleLicensePlate
            setPlateIsValid={setPlateIsValid}
            motorFirstSection={motorFirstSection}
            setMotorFirstSection={setMotorFirstSection}
            motorSecondSection={motorSecondSection}
            setMotorSecondSection={setMotorSecondSection}
          />
          {!plateIsValid && firstSubmit && (
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
        <Button
          onClick={(e) => {
            setFirstSubmit(true);
          }}
          type="primary"
          className="w-full"
          loading={actionLoading}
        >
          {rowData ? "ویرایش" : "افزودن"}
        </Button>
      </section>
    </form>
  );
}
