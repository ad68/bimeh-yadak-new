"use client";
import { api } from "@/api";
import React, { useState } from "react";
import { Button, Modal, Table } from "@/common";
import CopyToClipboard from "react-copy-to-clipboard";
import Image from "next/image";
import Link from "next/link";
import AddEditModal from "./components/Modals/EditStatusModal";
import Map from '../../../../public/icons/map.svg'
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
    { title: " وضعیت", field: "roadSideAssistanceStatus", type: "condition", conditions: [{ value: "INITIALIZE", replace: "ثبت اولیه" }, { value: "DISPATCHED", replace: "اعزام شده است" }, { value: "PROCESS_COMPLETION", replace: "پایان فرآیند" }] },
    { title: "پلاک", field: "registrationInsurance.licensePlate", type: "description" },
    { title: "آدرس", field: "address", type: "description" },
    {
      title: "موقعیت", render: (rowData) => (<button
        onClick={() => {
          showMapModal(rowData)
        }}
        className="text-xs bg-[whitesmoke]  flex justify-center items-center hover:bg-[#ffd5d5] text-white transition-all  w-[30px] h-[30px] m-auto rounded-full"
      >
        <Image className="w-[20px] h-[20px]" src={Map} alt="" />
      </button>)
    },
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
  const showMapModal = (rowData) => {
    setRefUrl(`https://www.google.com/maps?q=${rowData.latitude},${rowData.longitude}`)
    setMapModal(true)
  }
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
        <Table actions={actions} cols={cols} rowData={rowData} setRowData={setRowData} reload={reload} api={api.roadSideAssistance.getRoadSideAssistanceList} />
      </section>
      <Modal width={800} open={mapModal} onClose={() => setMapModal(false)}>
        <h2 className="text-center font-bold mb-3">موقعیت کاربر روی نقشه</h2>
        <section className="w-full max-w-full border rounded-lg flex justify-between items-center xl:col-span-2 text-center">
          <section className="w-[83%] px-2">
            <input className="w-full ltr" value={refUrl} />
          </section>
          <section className="h-[50px] w-[50px] flex justify-center items-center bg-[whitesmoke]">
            <CopyToClipboard text={refUrl} onCopy={() => setCopied(true)}>
              <button type="button">
                <Image src="/assets/icons/copy.svg" width={25} height={25} alt="" />
              </button>
            </CopyToClipboard>
          </section>
        </section>
        <section>
          <Link className="w-[150px] block m-auto" href={refUrl}>
            <Button className="m-auto mt-5">
              ورود به نقشه
            </Button>
          </Link>
        </section>
      </Modal>
      <Modal width={400} open={addEditModal} onClose={closeModal}>
        <AddEditModal rowData={rowData} reloadTable={reloadTable} closeModal={closeModal} />
      </Modal>
    </>
  );
}
