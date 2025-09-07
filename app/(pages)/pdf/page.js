"use client";
import React, { useEffect, useState } from "react";
import PDFTemplate from "./template/PDFTemplate";
import moment from "moment-jalaali";
import { numberWithCommas } from "@/helper";
const MyApp = () => {
  const [ReactPDF, setReactPDF] = useState(null);
  useEffect(() => {
    import("@react-pdf/renderer").then((module) => {
      setReactPDF(module);
    });
  }, []);

  if (!ReactPDF) return <div>در حال بارگذاری...</div>;

  const { PDFDownloadLink } = ReactPDF;
  const bimehInfo = {
    date: "1403/01/01",
    number: "1230987",
    image: "",
    name: "علی درگاهی",
    nationalCode: "0012890776",
    carType: "پراید 131SE",
    phoneNumber: "0912099002",
    plateNumber: "36 ن 611 60",
    bimehYadakNumber: "34509887",
    assistanceName: "سعید محمدی",
    assistanceId: "122",
    assistanceNationalCode: "009987654",
    assistanceCarType: "نیسان آبی",
    assistancePhoneNumber: "09351327898",
    assistancePlateNumber: "32ق61130",
    shebaNumber: "IR182233665544887755441234",
    cardNumber: "6219-8619-3645-4241",
    bankName: "کشاورزی",
    tax: "500,000",
    total: "1,500,000"
  };
  return (
    <section className="mt-[100px] h-[400px] bg-slate-100 flex justify-center items-center">
      <PDFDownloadLink document={<PDFTemplate {...bimehInfo} />} fileName="doctor-info.pdf">
        {({ loading }) => (loading ? "در حال بارگذاری..." : "دانلود PDF")}
      </PDFDownloadLink>
    </section>
  );
};

export default MyApp;
