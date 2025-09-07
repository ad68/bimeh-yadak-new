"use client";
import React, { useEffect, useState } from "react";
import PDFTemplate from "./template/PDFTemplate";
import { Button } from "@/common";
import moment from "moment-jalaali";
import { numberWithCommas } from "@/helper";

const MyApp = ({ pdfData }) => {
  const [ReactPDF, setReactPDF] = useState(null);
  useEffect(() => {
    import("@react-pdf/renderer").then((module) => {
      setReactPDF(module);
    });
  }, []);

  if (!ReactPDF) return <div>در حال بارگذاری...</div>;

  const { PDFDownloadLink } = ReactPDF;
  const bimehInfo = {
    date: moment(pdfData.createdOn).format("jYYYY/jMM/jDD"),
    number: pdfData.id,
    image: "",
    name: pdfData?.registrationInsurance?.firstName + " " + pdfData?.registrationInsurance?.lastName,
    nationalCode: pdfData?.registrationInsurance?.nationalCode,
    carType: pdfData?.registrationInsurance?.carModelName,
    phoneNumber: pdfData?.registrationInsurance?.mobileNumber,
    plateNumber: pdfData?.technician?.licensePlate,
    bimehYadakNumber: pdfData?.registrationInsurance?.insurancePolicyNumber,
    assistanceName: pdfData?.technician?.firstName + " " + pdfData?.technician?.lastName,
    assistanceId: pdfData?.technician?.uniqueCode,
    assistanceNationalCode: pdfData?.technician?.nationalCode,
    assistanceCarType: pdfData?.technician?.vehicleType,
    assistancePhoneNumber: pdfData?.technician?.mobileNumber,
    assistancePlateNumber: pdfData?.technician?.licensePlate,
    shebaNumber: pdfData?.technician?.iban,
    cardNumber: pdfData?.technician?.cardNumber,
    bankName: pdfData?.technician?.bankName,
    entranceFee: pdfData?.entranceFee,
    preparationCost: pdfData?.preparationCost,
    stoppingCost: pdfData?.stoppingCost,
    shippingInsuranceCost: pdfData?.shippingInsuranceCost,
    tax: numberWithCommas(pdfData?.tax),
    total: numberWithCommas(pdfData?.entranceFee + pdfData?.preparationCost + pdfData?.stoppingCost + pdfData?.shippingInsuranceCost + pdfData?.tax),
    licenseCode1: pdfData?.registrationInsurance?.licenseCode1,
    licenseCode2: pdfData?.registrationInsurance?.licenseCode2,
    alphabetCode: pdfData?.registrationInsurance?.alphabetCode,
    provinceCode: pdfData?.registrationInsurance?.provinceCode,
    assLicenseCode1: pdfData?.technician?.licenseCode1,
    assLicenseCode2: pdfData?.technician?.licenseCode2,
    assAlphabetCode: pdfData?.technician?.alphabetCode,
    assProvinceCode: pdfData?.technician?.provinceCode,
    finalPaymentAmount: pdfData?.finalPaymentAmount,
    finalRemainingCoverageAmount: pdfData?.finalRemainingCoverageAmount,
    coverageAmount: pdfData?.registrationInsurance?.coverageAmount,
    userSign: pdfData?.personSignature,
    assistanceSign: pdfData?.rescuerSignature,
    additionalEntryKm: pdfData?.additionalEntryKm,
    additionalEntryFee: pdfData?.additionalEntryFee,
  };
  return (

    <PDFDownloadLink document={<PDFTemplate {...bimehInfo} />} fileName="invoice.pdf">
      {({ loading }) => (loading ? "در حال بارگذاری..." : <Button>دانلود PDF</Button>)}
    </PDFDownloadLink>

  );
};

export default MyApp;




