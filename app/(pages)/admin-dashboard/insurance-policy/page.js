"use client";
import { api } from "@/api";
import { Button, ExcelPdfDownload, Modal, Select, Table, TextBox, DatePicker } from "@/common";
import { useAxiosWithToken } from "@/hooks";
import { useEffect, useState } from "react";
import PdfModal from "./components/PdfModal";
import { getDatePickerDate, jalaliToGregorian, objectToQueryString } from "@/helper";


export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const cols = [
    /*  { title: "شناسه", field: "id", width: "6%" }, */
    { title: "نام", field: "firstName" },
    { title: "نام خانوادگی", field: "lastName" },
    { title: "میزان تعهدات (تومان)", field: "coverageAmount", type: "price", width: "15%" },
    { title: "مبلغ پرداختی(تومان)", field: "payAmount", type: "price", width: "15%" },
    { title: "کد ملی", field: "nationalCode" },
    { title: "شماره موبایل", field: "mobileNumber" },
    { title: "شناسه پرداخت بانک", field: "payerId" },
    { title: "تاریخ اعتبار بیمه نامه", field: "expireInsurancePolicy", width: "15%" },
  ];

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [reload, setReload] = useState(false);
  const [rowData, setRowData] = useState({});
  const [totalCount, setTotalCount] = useState(0)
  const [mobileNumber, setMobileNumber] = useState("");
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState("");
  const [nationalCode, setNationalCode] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [insuranceStatus, setInsuranceStatus] = useState("");
  const [pdfLoading, setPdfLoading] = useState(false);
  const [excelLoading, setExcelLoading] = useState(false);
  const [pdfData, setPdfData] = useState([]);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [queries, setQueries] = useState(false);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getPdf = () => {
    setPdfLoading(true);
    useAxiosWithToken
      .get(api.insurance.getRegistrationInsuranceAdmin + "?" + objectToQueryString(queries), {
        params: {
          pageNumber: 0,
          pageSize: 1000,
        },
      })
      .then((res) => {
        setPdfLoading(false);
        setShowPdfModal(true);
        setPdfData(res.data.elements);
      })
      .catch((err) => {
        setPdfLoading(false);
      });
  };
  const downloadExcel = async () => {
    setExcelLoading(true)
    try {
      const response = await useAxiosWithToken.get(api.insurance.exportExcel + "?" + objectToQueryString(queries), {
        responseType: "blob",
      });
      setExcelLoading(false)
      const blob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "file.xlsx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      setExcelLoading(false)
      console.error("خطا در دانلود فایل:", error);
    }
  };
  const search = () => {
    setQueries({
      mobileNumber: mobileNumber,
      insurancePolicyNumber: insurancePolicyNumber,
      nationalCode: nationalCode,
      insuranceStatus: insuranceStatus,
      fromDate: jalaliToGregorian(fromDate),
      toDate: jalaliToGregorian(toDate)
    });
  };

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────


  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="grid grid-cols-1 xl:grid-cols-5 gap-2 items-center">
        <section className="flex flex-col">
          <label>از تاریخ</label>
          <DatePicker value={fromDate} onChange={(e) => setFromDate(getDatePickerDate(e))} />
        </section>
        <section className="flex flex-col">
          <label>تا تاریخ</label>
          <DatePicker value={toDate} onChange={(e) => setToDate(getDatePickerDate(e))} />
        </section>
        <section>
          <label>کد رهگیری</label>
          <TextBox onChange={(e) => setInsurancePolicyNumber(e.target.value)} />
        </section>
        <section>
          <label>شماره موبایل</label>
          <TextBox onChange={(e) => setMobileNumber(e.target.value)} />
        </section>
        <section>
          <label>کد ملی</label>
          <TextBox onChange={(e) => setNationalCode(e.target.value)} />
        </section>
        <section>
          <label>وضعیت ثبت بیمه نامه</label>
          <Select
            setState={(value) => setInsuranceStatus(value.value)}
            optionTitle="label"
            optionValue="value"
            options={[
              { label: "تایید شده ها", value: "APPROVED" },
              { label: "ثبت اولیه", value: "INITIAL_REGISTRATION" },
            ]}
          />
        </section>
        <Button onClick={search} className="mt-6">
          جستجو
        </Button>
      </section>
      <section className="mt-16">
        {totalCount > 0 && <ExcelPdfDownload excelLoading={excelLoading} pdfLoading={pdfLoading} excelAction={downloadExcel} pdfAction={getPdf} />
        }
        <Table setTotalCount={setTotalCount} queries={queries} rowData={rowData} setRowData={setRowData} cols={cols} reload={reload} api={api.insurance.getRegistrationInsuranceAdmin} />
      </section>

      <Modal open={showPdfModal} onClose={() => setShowPdfModal(false)}>
        <PdfModal pdfData={pdfData} />
      </Modal>
    </>
  );
}
