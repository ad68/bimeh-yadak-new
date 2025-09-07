import { api } from "@/api";
import { Button, Modal } from "@/common";
import { notify, objectToQueryString } from "@/helper";
import { useAxios } from "@/hooks";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import CheckIcon from '../../../../../../../../public/assets/icons/check.png'
import { useRouter } from "next/navigation";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ basicInfo, carInfo }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const nationalFrontFile = useRef()
    const nationalBackFile = useRef()
    const carCertFrontFile = useRef()
    const carCertBackFile = useRef()
    const carCartFrontFile = useRef()
    const carCartBackFile = useRef()
    const bimenamehFile = useRef()
    const personalFile = useRef()
    const router = useRouter()
    // ─── States ─────────────────────────────────────────────────────────────────────
    const [actionLoading, setActionLoading] = useState(false)
    const [formData, setFormData] = useState(new FormData());
    const [nationalFrontBlob, setNationalFrontBlob] = useState();
    const [nationalBackBlob, setNationalBackBlob] = useState();
    const [carCertFrontBlob, setCarCertFrontBlob] = useState();
    const [carCertBackBlob, setCarCertBackBlob] = useState();
    const [carCartFrontBlob, setCarCartFrontBlob] = useState();
    const [carCartBackBlob, setCarCartBackBlob] = useState();
    const [bimehnamehBlob, setBimehnamehBlob] = useState();
    const [personalBlob, setPersonalBlob] = useState();
    const [showSuccess, setShowSuccess] = useState(false)

    // ─── Functions ──────────────────────────────────────────────────────────────────
    /*     const compressImage = async (file) => {
            const compressOptions = {
                maxSizeMB: 1,
                maxWidthOrHeight: 800,
                useWebWorker: true,
            };
            try {
                const compressedFile = await imageCompression(file, compressOptions);
                return compressedFile
            } catch (error) {
                console.error("Error compressing image:", error);
            }
        } */
    const createImage = async (fileList, key) => {
        if (!fileList || fileList.length === 0) return;
        const file = fileList[0];
        if (!file) return;
        const fileSize = file.size / 1024;
        if (fileSize > 2000) {
            notify.Error("سایز فایل نباید بیشتر از 2 مگابایت باشد");
            return;
        }
        const newFormData = new FormData();
        formData.forEach((value, name) => {
            newFormData.append(name, value);
        });
        newFormData.append(key, file);
        setFormData(newFormData);
        switch (key) {
            case "frontIdCardPicture":
                setNationalFrontBlob(URL.createObjectURL(file));
                break;
            case "backIdCardPicture":
                setNationalBackBlob(URL.createObjectURL(file));
                break;
            case "frontDriverLicensePicture":
                setCarCertFrontBlob(URL.createObjectURL(file));
                break;
            case "backDriverLicensePicture":
                setCarCertBackBlob(URL.createObjectURL(file));
                break;
            case "frontCarCardPicture":
                setCarCartFrontBlob(URL.createObjectURL(file));
                break;
            case "backCarCardPicture":
                setCarCartBackBlob(URL.createObjectURL(file));
                break;
            case "insurancePolicyPicture":
                setBimehnamehBlob(URL.createObjectURL(file));
                break;
            case "personalPicture":
                setPersonalBlob(URL.createObjectURL(file));
                break;
            default:
                notify.Error("نام فایل نامعتبر است");
        }
    };


    const saveInfo = () => {
        /*let params = {
              firstName: "Ali",
              lastName: "Rezaei",
              fatherName: "Mohammad",
              nationalCode: "0023456927",
              dateOfBirth: "1990-05-15",
              placeOfIssue: "Tehran",
              province: "تهران",
              address: "Tehrn Street, No 12",
              postalCode: "1234567890",
              areaOfActivity: "Repair",
              agencyCode: "AG12345",
              mobileNumber: "09306511478",
              cardNumber: "1234567890156",
              iban: "IR12345678901234564",
              bankName: "Melli",
              vehicleType: "خودروبر یدک کش",
              vin: "1HGCM82633A123456",
              chassisNumber: "ABC123456",
              engineNumber: "ENG123458",
              color: "سفید",
              alphabetCode: "ل",
              licenseCode1: "17",
              licenseCode2: "123",
              provinceCode: "50",
              insuranceThirdPersonExpireDate: "2026-01-01"
          } */
        let params = { ...basicInfo, ...carInfo }
        setActionLoading(true)
        console.log(formData)
        useAxios.post(api.technician.technicianAdd + "?" + objectToQueryString(params), formData, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then(res => {
            setActionLoading(false)
            setShowSuccess(true)
        }).catch(err => {
            setActionLoading(false)

        })
    }
    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <>
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-2">
            <section className="flex mt-6 flex-col gap-[2px] text-sm">
                <section>
                    <label className="pt-[6px] ">عکس روی کارت ملی</label>
                    <input
                        type="file"
                        name="photo"
                        ref={nationalFrontFile}
                        id="upload-photo"
                        className="hidden"
                        onChange={(e) => {
                            createImage(e.target.files, "frontIdCardPicture");
                        }}
                    />
                    {nationalFrontBlob && <Image src={nationalFrontBlob} width={300} height={150} onClick={() => window.open(item)} className="w-[100%] h-[234px] rounded-[5px] cursor-pointer" alt="" />}
                </section>
                <Button type="button" outlined={true} onClick={() => nationalFrontFile.current.click()} className=" mt-[20px] w-full  rounded-xl leading-[30.2px] font-bold">
                    افزودن روی کارت ملی
                </Button>
            </section>
            <section className="flex mt-6 flex-col gap-[2px] text-sm">
                <section>
                    <label className="pt-[6px] ">عکس پشت کارت ملی</label>
                    <input
                        type="file"
                        name="photo"
                        ref={nationalBackFile}
                        id="upload-photo"
                        className="hidden"
                        onChange={(e) => {
                            createImage(e.target.files, "backIdCardPicture");;
                        }}
                    />
                    {nationalBackBlob && <Image src={nationalBackBlob} width={300} height={150} onClick={() => window.open(item)} className="w-[100%] h-[234px] rounded-[5px] cursor-pointer" alt="" />}
                </section>
                <Button type="button" outlined={true} onClick={() => nationalBackFile.current.click()} className="mt-[20px] w-full  rounded-xl leading-[30.2px] font-bold">
                    افزودن پشت کارت ملی
                </Button>
            </section>
            <section className="flex mt-6 flex-col gap-[2px] text-sm">
                <section>
                    <label className="pt-[6px] ">عکس روی گواهینامه</label>
                    <input
                        type="file"
                        name="photo"
                        ref={carCertFrontFile}
                        id="upload-photo"
                        className="hidden"
                        onChange={(e) => {
                            createImage(e.target.files, "frontDriverLicensePicture");
                        }}
                    />
                    {carCertFrontBlob && <Image src={carCertFrontBlob} width={300} height={150} onClick={() => window.open(item)} className="w-[100%] h-[234px] rounded-[5px] cursor-pointer" alt="" />}
                </section>
                <Button type="button" outlined={true} onClick={() => carCertFrontFile.current.click()} className=" mt-[20px] w-full rounded-xl leading-[30.2px] font-bold">
                    افزودن عکس روی گواهینامه
                </Button>
            </section>
            <section className="flex mt-6 flex-col gap-[2px] text-sm">
                <section>
                    <label className="pt-[6px] ">عکس پشت گواهینامه</label>
                    <input
                        type="file"
                        name="photo"
                        ref={carCertBackFile}
                        id="upload-photo"
                        className="hidden"
                        onChange={(e) => {
                            createImage(e.target.files, "backDriverLicensePicture");
                        }}
                    />
                    {carCertBackBlob && <Image src={carCertBackBlob} width={300} height={150} onClick={() => window.open(item)} className="w-[100%] h-[234px] rounded-[5px] cursor-pointer" alt="" />}
                </section>
                <Button type="button" outlined={true} onClick={() => carCertBackFile.current.click()} className=" mt-[20px] w-full rounded-xl leading-[30.2px] font-bold">
                    افزودن عکس پشت گواهینامه
                </Button>
            </section>
            <section className="flex mt-6 flex-col gap-[2px] text-sm">
                <section>
                    <label className="pt-[6px] ">عکس روی کارت ماشین</label>
                    <input
                        type="file"
                        name="photo"
                        ref={carCartFrontFile}
                        id="upload-photo"
                        className="hidden"
                        onChange={(e) => {
                            createImage(e.target.files, "frontCarCardPicture");
                        }}
                    />
                    {carCartFrontBlob && <Image src={carCartFrontBlob} width={300} height={150} onClick={() => window.open(item)} className="w-[100%] h-[234px] rounded-[5px] cursor-pointer" alt="" />}
                </section>
                <Button type="button" outlined={true} onClick={() => carCartFrontFile.current.click()} className=" mt-[20px] w-full rounded-xl leading-[30.2px] font-bold">
                    افزودن عکس روی کارت ماشین
                </Button>
            </section>
            <section className="flex mt-6 flex-col gap-[2px] text-sm">
                <section>
                    <label className="pt-[6px] ">عکس پشت کارت ماشین</label>
                    <input
                        type="file"
                        name="photo"
                        ref={carCartBackFile}
                        id="upload-photo"
                        className="hidden"
                        onChange={(e) => {
                            createImage(e.target.files, "backCarCardPicture");
                        }}
                    />
                    {carCartBackBlob && <Image src={carCartBackBlob} width={300} height={150} onClick={() => window.open(item)} className="w-[100%] h-[234px] rounded-[5px] cursor-pointer" alt="" />}
                </section>
                <Button type="button" outlined={true} onClick={() => carCartBackFile.current.click()} className=" mt-[20px] w-full rounded-xl leading-[30.2px] font-bold">
                    افزودن عکس پشت کارت ماشین
                </Button>
            </section>
            <section className="flex mt-6 flex-col gap-[2px] text-sm">
                <section>
                    <label className="pt-[6px] ">عکس پرسنلی امدادگر</label>
                    <input
                        type="file"
                        name="photo"
                        ref={personalFile}
                        id="upload-photo"
                        className="hidden"
                        onChange={(e) => {
                            createImage(e.target.files, "personalPicture");
                        }}
                    />
                    {personalBlob && <Image src={personalBlob} width={300} height={150} onClick={() => window.open(item)} className="w-[100%] h-[234px] rounded-[5px] cursor-pointer" alt="" />}
                </section>
                <Button type="button" outlined={true} onClick={() => personalFile.current.click()} className=" mt-[20px] w-full rounded-xl leading-[30.2px] font-bold">
                    افزودن عکس پرسنلی امدادگر
                </Button>
            </section>
            <section className="flex mt-6 flex-col gap-[2px] text-sm">
                <section>
                    <label className="pt-[6px] ">عکس بیمه نامه</label>
                    <input
                        type="file"
                        name="photo"
                        ref={bimenamehFile}
                        id="upload-photo"
                        className="hidden"
                        onChange={(e) => {
                            createImage(e.target.files, "insurancePolicyPicture");
                        }}
                    />
                    {bimehnamehBlob && <Image src={bimehnamehBlob} width={300} height={150} onClick={() => window.open(item)} className="w-[100%] h-[234px] rounded-[5px] cursor-pointer" alt="" />}
                </section>
                <Button type="button" outlined={true} onClick={() => bimenamehFile.current.click()} className=" mt-[20px] w-full rounded-xl leading-[30.2px] font-bold">
                    افزودن عکس بیمه نامه
                </Button>
            </section>
        </section>
        <section className="flex justify-end">
            <Button loading={false} className="w-[180px]" onClick={saveInfo}>ذخیره</Button>
        </section>
        <Modal open={showSuccess} onClose={() => router.push("/")} >
            <Image src={CheckIcon} alt="" className="w-[80px] h-[80px] m-auto" />
            <p className='text-[green] text-center mt-5 font-bold'>امدادگر گرامی اطلاعات شما ثبت شد.</p>
            <p className="text-grey text-center mt-4">
                بعد از بررسی مشحصات شما توسط کارشناسان ما، به شما پیامک ارسال خواهد شد.
            </p>
            <Link href="/">
                <Button className="m-auto mt-10">
                    بازگشت به سایت
                </Button>
            </Link>
        </Modal>
    </>
}
