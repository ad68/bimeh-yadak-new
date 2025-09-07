'use client'
import { api } from "@/api";
import { ErrorMessage, TextBox, Button, Modal, CardInput } from "@/common";
import { Regex } from "@/enums";
import { notify, objectToQueryString } from "@/helper";
import { useAxios } from "@/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useForm, Controller } from "react-hook-form";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const {
        handleSubmit,
        control,
        formState: { errors },
        reset
    } = useForm();
    const router = useRouter()
    const userInputFile = useRef();
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [actionLoading, setActionLoading] = useState(false)
    const [refUrl, setRefUrl] = useState(null)
    const [file, setFile] = useState();
    const [blob, setBlob] = useState();

    const [copied, setCopied] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)
    // ─── Functions ──────────────────────────────────────────────────────────────────
    const signUp = (data) => {
        setActionLoading(true);
        let params = data
        useAxios
            .post(api.collaboration.addCollaboration + "?" + objectToQueryString(params), file, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                setActionLoading(false);
                setRefUrl(res?.data?.referralCodeUrl);
                setModalOpen(true);
                reset({
                    firstName: "",
                    lastName: "",
                    nationalCode: "",
                    mobileNumber: "",
                });
            })
            .catch((err) => {
                setActionLoading(false);

            });

    };
    const createImage = (fileList) => {
        const file = fileList[0];
        if (!file) return;
        const formData = new FormData();
        let fileSize = file.size / 1024;
        if (fileSize > 2000) {
            notify.Error("سایز فایل نباید بیشتر از 2 مگابایت باشد");
        } else {
            formData.append("image", file);
            setFile(formData);
            setBlob(URL.createObjectURL(file));
        }
    };
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return (
        <>
            <form
                className="grid grid-cols-1 gap-5 xl:grid-cols-2"
                onSubmit={handleSubmit((data) => signUp(data))}
            >
                <section className="flex w-full flex-col gap-[2px] text-sm">
                    <label className="pt-[6px]">نام </label>
                    <Controller
                        control={control}
                        name="firstName"
                        rules={{
                            required: "نام اجباری است",
                            minLength: {
                                value: 3,
                                message: "نام نباید کمتر از 3 کاراکتر باشد",
                            },
                            maxLength: {
                                value: 15,
                                message: "نام نباید بیشتر از 15 کاراکتر باشد",
                            },
                            pattern: {
                                value: Regex.PERSIAN_NAME,
                                message: "نام فقط باید شامل حروف فارسی باشد",
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextBox
                                onChange={onChange}
                                tabIndex={1}
                                value={value}
                                placeholder=" نام را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px] text-sm">
                    <label className="pt-[6px]">نام خانوادگی</label>
                    <Controller
                        control={control}
                        name="lastName"
                        rules={{
                            required: "نام خانوادگی اجباری است",
                            minLength: {
                                value: 3,
                                message: "نام خانوادگی نباید کمتر از 3 کاراکتر باشد",
                            },
                            maxLength: {
                                value: 15,
                                message: "نام خانوادگی نباید بیشتر از 15 کاراکتر باشد",
                            },
                            pattern: {
                                value: Regex.PERSIAN_NAME,
                                message: "نام خانوادگی فقط باید شامل حروف فارسی باشد",
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextBox
                                onChange={onChange}
                                value={value}
                                placeholder="نام خانوادگی را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px] text-sm">
                    <label className="pt-[6px]">کدملی </label>
                    <Controller
                        control={control}
                        name="nationalCode"
                        rules={{
                            required: "کد ملی اجباری است",
                            pattern: {
                                value: Regex.NATIONAL_CODE,
                                message: "کد ملی را به درستی وارد کنید",
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <TextBox
                                onChange={onChange}
                                value={value}
                                placeholder="کد ملی را وارد کنید"
                                className="h-[48px] rounded-lg "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.nationalCode?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px] text-sm">
                    <label className="pt-[6px] ">تلفن همراه </label>
                    <Controller
                        control={control}
                        rules={{
                            required: "تلفن همراه اجباری است",
                            pattern: {
                                value: Regex.MOBILE,
                                message: "تلفن همراه را به درستی وارد کنید",
                            },
                        }}
                        name="mobileNumber"
                        render={({ field: { onChange, value } }) => (
                            <TextBox
                                onChange={onChange}
                                value={value}
                                placeholder="تلفن همراه را وارد کنید"
                                className="  h-[48px]  rounded-lg border border-solid "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.mobileNumber?.message}</ErrorMessage>
                </section>
                <section className="flex w-full flex-col gap-[2px] text-sm">
                    <label className="pt-[6px] ">شماره کارت</label>
                    <Controller
                        control={control}
                        name="accountNumber"
                        rules={{
                            minLength: 0,
                            pattern: {
                                value: Regex.CARD_NUMBER,
                                message: "شماره کارت را به درستی وارد کنید",
                            },
                        }}
                        render={({ field: { onChange } }) => (
                            <CardInput setCardNumber={onChange} />
                        )}
                    />
                    <ErrorMessage>{errors?.cardNumber?.message}</ErrorMessage>
                </section>

                <section className="flex w-full flex-col gap-[2px] text-sm">
                    <label className="pt-[6px] ">شماره شبا</label>
                    <Controller
                        control={control}
                        name="iban"
                        rules={{
                            minLength: 0,
                            pattern: {
                                value: Regex.SHEBA,
                                message: "شماره شبا باید 24 رقم باشد",
                            },
                        }}
                        render={({ field: { onChange } }) => (
                            <TextBox
                                onChange={onChange}
                                placeholder="شماره شبا را وارد کنید"
                                className="  h-[48px]  rounded-lg border border-solid "
                            />
                        )}
                    />
                    <ErrorMessage>{errors?.iban?.message}</ErrorMessage>
                </section>
                <section className="flex w-full xl:col-span-2 mt-6 flex-col gap-[2px] text-sm">
                    <label className="pt-[6px] ">عکس روی کارت ملی</label>
                    <input
                        type="file"
                        name="photo"
                        ref={userInputFile}
                        id="upload-photo"
                        className="hidden"

                        onChange={(e) => {
                            createImage(e.target.files);
                        }}
                    />
                    {blob && <Image src={blob} width={300} height={150} onClick={() => window.open(item)} className="w-[100%] h-auto rounded-[5px] cursor-pointer" alt="" />}
                    <Button type="button" outlined={true} /* loading={loading} onClick={uploadImage} */ onClick={() => userInputFile.current.click()} className=" mt-[20px] w-full  rounded-xl leading-[30.2px] font-bold">
                        افزودن عکس کارت ملی
                    </Button>
                </section>
                <section className="xl:col-span-2">
                    <Button
                        loading={actionLoading}
                        className="mt-5 w-[100%] text-lg "
                    >
                        ثبت نام
                    </Button>
                </section>
            </form>
            <Modal width={800} open={modalOpen} onClose={() => router.push("/")}>
                <section className="flex justify-center">
                    <Image src="/assets/icons/check.png" width={60} height={60} alt="" />
                </section>
                <span className="block text-[#26b126] mt-4 font-bold text-[20px] text-center">همکار گرامی، درخواست شما با موفقیت ثبت گردید</span>
                <span className="block my-2 text-center">بعد از بررسی مشحصات شما توسط کارشناسان ما، به شما پیامک ارسال خواهد شد.
                </span>
                {/*   <section className="w-full border rounded-lg flex justify-between items-center xl:col-span-2  text-center">
                    <section className="text-center w-full font-light">
                        {refUrl}
                    </section>
                    <section className="h-[50px] w-[50px] flex justify-center items-center bg-[whitesmoke]">
                        <CopyToClipboard text={refUrl} onCopy={() => setCopied(true)}>
                            <button type="button">
                                <Image src="/assets/icons/copy.svg" width={25} height={25} alt="" />
                            </button>
                        </CopyToClipboard>
                    </section>
                </section> */}
            </Modal>
        </>
    )



}
