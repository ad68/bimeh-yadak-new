"use client";
import React, { useEffect, useState } from "react";
import PDFTemplate from "./template/PDFTemplate";
import moment from "moment-jalaali";
import { numberWithCommas } from "@/helper";
import Download from '../../../../../../../../../public/icons/download.svg'
import { Button } from "@/common";
import Image from "next/image";
const MyApp = ({ pdfData }) => {
    const [ReactPDF, setReactPDF] = useState(null);
    useEffect(() => {
        import("@react-pdf/renderer").then((module) => {
            setReactPDF(module);
        });
    }, []);

    if (!ReactPDF) return <span className="flex m-auto w-[154px] h-[48px] justify-center items-center rounded-lg mt-5">در حال ساخت PDF...</span>;

    const { PDFDownloadLink } = ReactPDF;
    const bimehInfo = {
        name: pdfData?.firstName + " " + pdfData?.lastName,
        insurancePolicyNumber: pdfData?.insurancePolicyNumber,
        coverageAmount: numberWithCommas(pdfData?.coverageAmount),
        alphabetCode: pdfData?.alphabetCode,
        licenseCode1: pdfData?.licenseCode1,
        licenseCode2: pdfData?.licenseCode2,
        provinceCode: pdfData?.provinceCode,
        vin: pdfData?.vin,
        nationalCode: pdfData?.nationalCode,
        carName: pdfData?.carBrandName + " " + pdfData?.carModelName,
        issueInsurancePolicy: pdfData?.issueInsurancePolicy,
        expireInsurancePolicy: pdfData?.expireInsurancePolicy,
        startInsurancePolicy: pdfData?.startInsurancePolicy,

    };
    return (
        <>
            <section className="flex w-[250px] m-auto justify-center  items-center mt-5">
                <PDFDownloadLink className="flex justify-center items-center" document={<PDFTemplate {...bimehInfo} />} fileName="bimeh-name.pdf">
                    {({ loading }) => (loading ? "" : <Button className="flex gap-2">
                        <Image src={Download} alt="" />
                        دریافت بیمه نامه
                    </Button>)}
                </PDFDownloadLink>
            </section>
        </>

    );
};

export default MyApp;