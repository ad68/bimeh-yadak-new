"use client";
import React, { useEffect, useState } from "react";
import PDFTemplate from "./template/PDFTemplate";

import { Button } from "@/common";
import { numberWithCommas } from "@/helper";
const MyApp = ({ pdfData }) => {
    const [ReactPDF, setReactPDF] = useState(null);
    useEffect(() => {
        import("@react-pdf/renderer").then((module) => {
            setReactPDF(module);
        });
    }, []);

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
    if (!ReactPDF) return <span className="flex m-auto w-[154px] h-[48px] text-center mt-5">درحال بارگذاری</span>;

    const { PDFDownloadLink } = ReactPDF;

    return (
        <section className="flex w-[160px] m-auto justify-center items-center mt-5">

            <PDFDownloadLink className="flex justify-center items-center" document={<PDFTemplate {...bimehInfo} />} fileName="doctor-info.pdf">
                {({ loading }) => (loading ? "" : <Button>دانلود PDF</Button>)}
            </PDFDownloadLink>


        </section>
    );
};

export default MyApp;