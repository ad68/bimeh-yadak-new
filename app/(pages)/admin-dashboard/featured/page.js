"use client";
import { api } from "@/api";
import { Button, Modal, Table, Table2 } from "@/common";
import { useAxiosWithToken } from "@/hooks";
import { useState } from "react";
import PdfModal from "./components/PdfModal";
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const cols = [
    { title: "شناسه", field: "id" },
    { title: "نام", field: "firstName" },
    { title: "نام خانوادگی", field: "lastName" },
    { title: "میزان تعهدات", field: "coverageAmount", type: "price" },
  ];

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [reload, setReload] = useState(false);
  const [rowData, setRowData] = useState({});
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfData, setPdfData] = useState([]);
  const [showPdfModal, setShowPdfModal] = useState(false);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getPdf = () => {
    setPdfLoading(true);
    useAxiosWithToken
      .get(api.collaboration.getPreRegistrationInsuranceMarketingList, {
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
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //

  ///////////////////////////////////////////////////////////////////////////////////////

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="flex justify-end">
        <Button loading={pdfLoading} onClick={getPdf}>
          دریافت PDF
        </Button>
      </section>
      <Table rowData={rowData} setRowData={setRowData} cols={cols} reload={reload} api={api.collaboration.getPreRegistrationInsuranceMarketingList} />

      <Modal open={showPdfModal} onClose={() => setShowPdfModal(false)}>
        <PdfModal pdfData={pdfData} />
      </Modal>
    </>
  );
}
