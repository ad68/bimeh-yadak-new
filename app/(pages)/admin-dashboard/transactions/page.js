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
    { title: "قیمت", field: "amount", type: "price" },
    { title: " وضعیت", field: "status" /* , type: "condition", conditions: [{ value: "G00000", replace: "ali" }] */ },
    { title: "تاریخ", field: "regDate", type: "date" },
    { title: "شناسه", field: "uniqueIdentifier" },
  ];
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [reload, setReload] = useState(false);
  const [rowData, setRowData] = useState({});

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mt-[10px] w-full mb-[200px] xl:mb-0 xl:w-full max-w-full flex flex-col justify-center items-center">
        <section className=" justify-center w-[90%]  flex flex-col items-center">
          <Table cols={cols} rowData={rowData} setRowData={setRowData} api={api.transactions.getTransactionsList} reload={reload} />
        </section>
      </section>
    </>
  );
}
