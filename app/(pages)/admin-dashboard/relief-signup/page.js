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
    { title: "شناسه", field: "id" },
    { title: "نام", field: "firstName" },
    { title: "نام خانوادگی", field: "lastName" },
    { title: "کدملی", field: "nationalCode" },
    { title: "تلفن همراه", field: "mobileNumber" },
    { title: "سال ساخت", field: "modelYear" },
    { title: "رنگ", field: "color" },
    { title: "شهر", field: "provinceName" },
    { title: "میزان تعهدات (تومان)", field: "coverageAmount", type: "price" },
    { title: "کد معرف", field: "referralCode" },
  ];
  const actions = [{ type: "delete" }];
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
      <Table rowData={rowData} setRowData={setRowData} cols={cols} reload={reload} apiDel={api.collaboration.deletePreRegistrationInsuranceList} actions={actions} api={api.collaboration.getPreRegistrationInsuranceList} />
      <Modal width={"90%"} open={addEditModal} onClose={closeModal}>
        <AddEditModal rowData={rowData} reloadTable={reloadTable} closeModal={closeModal} />
      </Modal>
    </>
  );
}
