"use client";
import React, { useEffect, useState } from "react";
import PDFTemplate from "./template/PDFTemplate";

import { Button } from "@/common";
const MyApp = ({ pdfData }) => {
    const [ReactPDF, setReactPDF] = useState(null);
    useEffect(() => {
        import("@react-pdf/renderer").then((module) => {
            setReactPDF(module);
        });
    }, []);

    if (!ReactPDF) return <span className="flex m-auto w-[154px] h-[48px] text-center mt-5">درحال بارگذاری</span>;

    const { PDFDownloadLink } = ReactPDF;

    return (
        <section className="flex w-[160px] m-auto justify-center items-center mt-5">

            <PDFDownloadLink className="flex justify-center items-center" document={<PDFTemplate pdfData={pdfData} />} fileName="doctor-info.pdf">
                {({ loading }) => (loading ? "" : <Button>دانلود PDF</Button>)}
            </PDFDownloadLink>


        </section>
    );
};

export default MyApp;