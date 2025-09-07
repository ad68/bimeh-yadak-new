'use client'
import { useEffect, useState } from "react";
import { api } from "@/api";
import { ErrorMessage, Button, Select } from "@/common";
import { NotifyMessage } from "@/enums";
import { notify } from "@/helper";
import { useAxiosWithToken } from "@/hooks";
import { useForm, Controller } from "react-hook-form";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ reloadTable, closeModal, rowData }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue
    } = useForm({
        defaultValues: {
            roadSideAssistanceStatus: rowData?.roadSideAssistanceStatus,
        },
    });
    const statusList = [{ label: "ثبت اولیه", value: "INITIALIZE" }, { label: "اعزام شده است", value: "DISPATCHED" }, { label: "پایان فرآیند", value: "PROCESS_COMPLETION" }]
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [actionLoading, setActionLoading] = useState(false)
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const submitForm = (data) => {
        edit(data)
    };
    const edit = (data) => {
        setActionLoading(true);
        let params = { roadSideAssistanceStatus: data?.roadSideAssistanceStatus?.value }
        useAxiosWithToken
            .put(api.roadSideAssistance.approveSignUpRequest + rowData?.id, params)
            .then((res) => {
                setActionLoading(false);
                closeModal()
                reloadTable()
            })
            .catch((e) => {
                notify.Error(NotifyMessage.GLOBAL_ERROR)
                setActionLoading(false);
            });
    }
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────
    useEffect(() => {
        setValue("roadSideAssistanceStatus", statusList.find(el => el.value === rowData?.roadSideAssistanceStatus))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rowData])
    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return (
        <>
            <form
                onSubmit={handleSubmit((data) => submitForm(data))}
                className="grid grid-cols-1 xl:grid-cols-1"
            >
                <section className="flex w-full flex-col  text-sm">
                    <label className="pt-[6px]">وضعیت</label>
                    <Controller
                        control={control}
                        name="roadSideAssistanceStatus"
                        rules={{
                            required: "انتخاب وضعیت اجباری است",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Select
                                setState={onChange}
                                state={value}
                                options={statusList}
                                optionTitle="label"
                                optionValue="value"
                                placeholder=" نام را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.roadSideAssistanceStatus?.message}</ErrorMessage>
                </section>
                <section className="xl:col-span-2 mt-4 flex justify-center ">
                    <Button
                        type="submit"
                        loading={actionLoading}
                        className="mb-4 mt-[13px] h-[48px] w-[93%] text-lg leading-[27.9px] xl:mb-0 xl:w-full"
                    >
                        ذخیره
                    </Button>
                </section>
            </form>
        </>
    )



}
