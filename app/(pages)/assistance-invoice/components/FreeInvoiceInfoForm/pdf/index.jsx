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
    name: pdfData?.freeRegistrationCarTransport?.firstName + " " + pdfData?.freeRegistrationCarTransport?.lastName,
    nationalCode: pdfData?.freeRegistrationCarTransport?.nationalCode,
    carType: pdfData?.freeRegistrationCarTransport?.carModelName,
    phoneNumber: pdfData?.freeRegistrationCarTransport?.mobileNumber,
    plateNumber: pdfData?.technician?.licensePlate,
    bimehYadakNumber: pdfData?.freeRegistrationCarTransport?.insurancePolicyNumber,
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
    total: numberWithCommas(pdfData?.entranceFee + pdfData?.preparationCost + pdfData?.stoppingCost + pdfData?.shippingInsuranceCost),
    licenseCode1: pdfData?.freeRegistrationCarTransport?.licenseCode1,
    licenseCode2: pdfData?.freeRegistrationCarTransport?.licenseCode2,
    alphabetCode: pdfData?.freeRegistrationCarTransport?.alphabetCode,
    provinceCode: pdfData?.freeRegistrationCarTransport?.provinceCode,
    assLicenseCode1: pdfData?.technician?.licenseCode1,
    assLicenseCode2: pdfData?.technician?.licenseCode2,
    assAlphabetCode: pdfData?.technician?.alphabetCode,
    assProvinceCode: pdfData?.technician?.provinceCode,
    finalPaymentAmount: pdfData?.finalPaymentAmount,
    finalRemainingCoverageAmount: pdfData?.finalRemainingCoverageAmount,
    coverageAmount: pdfData?.freeRegistrationCarTransport?.coverageAmount,
    userSign: pdfData?.personSignature,
    assistanceSign: pdfData?.rescuerSignature,
    ///////////////////////
    additionalEntryKm: pdfData?.additionalEntryKm,
    additionalEntryFee: pdfData?.additionalEntryFee,
    additionalEntryFinalFee: pdfData?.additionalEntryFinalFee,
    clinicalAssistanceEntryFee: pdfData?.clinicalAssistanceEntryFee,
    clinicalAndMobileRepairFee: pdfData?.clinicalAndMobileRepairFee,
    sparePartsFee: pdfData?.sparePartsFee,
    setupFee: pdfData?.setupFee,
    otherItemsFee: pdfData?.otherItemsFee,
    onSiteTireRepairFee: pdfData?.onSiteTireRepairFee,
    roundTripTireRepairFee: pdfData?.roundTripTireRepairFee,
    spareTireReplacementFee: pdfData?.spareTireReplacementFee,
    fuelDeliveryFee: pdfData?.fuelDeliveryFee,
    batterySaleFee: pdfData?.batterySaleFee,
    diagFee: pdfData?.diagFee,
    carDoorOpeningFee: pdfData?.carDoorOpeningFee,
    vehicleExtractionSandSnowEtcFee: pdfData?.vehicleExtractionSandSnowEtcFee,
    onSiteOilChangeFee: pdfData?.onSiteOilChangeFee,
    saleOfEngineOilBrakeFluidAntifreezeFee: pdfData?.saleOfEngineOilBrakeFluidAntifreezeFee,
  };
  return (

    <PDFDownloadLink document={<PDFTemplate {...bimehInfo} />} fileName="invoice.pdf">
      {({ loading }) => (loading ? "در حال بارگذاری..." : <Button>دانلود PDF</Button>)}
    </PDFDownloadLink>

  );
};

export default MyApp;




