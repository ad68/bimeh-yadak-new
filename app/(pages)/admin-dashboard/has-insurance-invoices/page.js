"use client";
import { api } from "@/api";
import React, { useState } from "react";
import { Table } from "@/common";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  const cols = [
    { title: "شناسه", field: "id" },
    {
      title: "نام", field: "registrationInsurance.firstName"
    },
    { title: "نام خانوادگی", field: "registrationInsurance.lastName" },
    { title: "تلفن همراه", field: "registrationInsurance.mobileNumber" },
    { title: "کد ملی", field: "registrationInsurance.nationalCode" },
    { title: "تاریخ", field: "createdOn", type: "date" },


  ];
  const actions = [{ type: "edit", onClick: () => setAddEditModal(true) }];

  // ─── States ─────────────────────────────────────────────────────────────────────

  const [rowData, setRowData] = useState({});
  const [mapModal, setMapModal] = useState(false)
  const [addEditModal, setAddEditModal] = useState(false);
  const [reload, setReload] = useState(false);
  const [_, setCopied] = useState(false);
  const [refUrl, setRefUrl] = useState(null)

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const reloadTable = () => {
    setReload(!reload);
  };
  const closeModal = () => {
    setAddEditModal(false)
  }
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="pr-10 overflow-x-auto">
        <Table queries={{ rescuerInvoiceStatus: "INITIALIZE" }} actions={actions} cols={cols} rowData={rowData} setRowData={setRowData} reload={reload} api={api.rescuerInvoice.getHasInsuranceInvoice} />
      </section>

      {/*<Modal width={400} open={addEditModal} onClose={closeModal}>
        <AddEditModal rowData={rowData} reloadTable={reloadTable} closeModal={closeModal} />
      </Modal> */}
    </>
  );
}
