"use client";
import { api } from "@/api";
import { Modal, Table } from "@/common";
import { useState } from "react";
import PdfModal from "./components/PdfModal";
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const cols = [
    { title: "شناسه", field: "id" },
    { title: "نام", field: "firstName" },
    { title: "نام خانوادگی", field: "lastName" },
    { title: "میزان تعهدات (تومان)", field: "coverageAmount", type: "price" },
    { title: "مبلغ پرداختی(تومان)", field: "payAmount", type: "price" },
    { title: "برند خودرو", field: "carBrandName" },
    { title: "مدل خودرو", field: "carModelName" },
    { title: "رنگ خودرو", field: "carColor" },
    { title: "تاریخ اعتبار بیمه نامه", field: "expireInsurancePolicy" },
  ];
  const actions = [{ type: "pdf", onClick: () => setShowPdfModal(true) }]

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [reload, setReload] = useState(false);
  const [rowData, setRowData] = useState({});
  const [showPdfModal, setShowPdfModal] = useState(false);

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>

      <Table actions={actions} rowData={rowData} setRowData={setRowData} cols={cols} reload={reload} api={api.insurance.getRegistrationInsurance} />
      <Modal open={showPdfModal} onClose={() => setShowPdfModal(false)}>
        <PdfModal pdfData={rowData} />
      </Modal>
    </>
  );
}
