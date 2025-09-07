"use client";
import { api } from "@/api";
import { Button, Modal, Table } from "@/common";
import { useState } from "react";
import AddEditModal from "./components/Modals/AddEditModal";
import Image from "next/image";
import AddIcon from "../../../../public/assets/icons/add.svg";
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const cols = [
    { title: "نام", field: "firstName" },
    { title: "نام خانوادگی", field: "lastName" },
    { title: "کد ملی", field: "nationalCode" },
    { title: "شماره موبایل", field: "mobileNumber" },
    { title: "وضعیت", field: "collaborationInMarketingStatus", type: "condition", conditions: [{ value: "INITIALIZE", replace: "ثبت اولیه" }, { value: "APPROVE", replace: "تایید نهایی" }, { value: "REJECT", replace: "رد شده" }] },
    { title: "کارت بانکی", field: "accountNumber" },
    { title: "شماره شبا", field: "iban" },
    { title: "کد معرف", field: "referralCode" },
  ];
  const actions = [{ type: "delete" }, { type: "edit", onClick: () => setAddEditModal(true) }];
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [reload, setReload] = useState(false);
  const [rowData, setRowData] = useState({});
  const [addEditModal, setAddEditModal] = useState(false);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const reloadTable = () => {
    setReload(!reload);
  };
  const closeModal = () => {
    setAddEditModal(false);
  };
  const showAddModal = () => {
    setRowData(null);
    setAddEditModal(true);
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="flex justify-end">
        <Button onClick={() => showAddModal()}>
          <Image src={AddIcon} alt=""></Image>
          <span>افزودن</span>
        </Button>
      </section>
      <Table rowData={rowData} setRowData={setRowData} cols={cols} reload={reload} apiDel={api.collaboration.deleteCollaboration} actions={actions} api={api.collaboration.getCollaborationList} />
      <Modal width={800} open={addEditModal} onClose={closeModal}>
        <AddEditModal rowData={rowData} reloadTable={reloadTable} closeModal={closeModal} />
      </Modal>
    </>
  );
}
