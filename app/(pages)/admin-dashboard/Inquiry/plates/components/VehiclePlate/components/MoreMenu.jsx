import Image from "next/image";
import React, { useState, useContext, useEffect } from "react";
import { usePlatesStore } from "@/store/dashboard/plates";
import { Popover } from "antd";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ item, setMoreMenuShow }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  /* const bears = useStore((state) => state.bears); */
  const showDeleteModal = usePlatesStore((state) => state.showDelateModal);
  const setDeleteId = usePlatesStore((state) => state.updateDeleteId);
  const setRowData = usePlatesStore((state) => state.updateRowData);
  const showSideBar = usePlatesStore((state) => state.showSideBar);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const hidePopOver = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Popover
        content={
          <>
            <span
              onClick={() => {
                showDeleteModal();
                setDeleteId(item.id);
                hidePopOver(false);
              }}
              className="ml-2 flex cursor-pointer border-b border-solid border-[#F6F6FB] pb-[10px]"
            >
              <Image
                src="/assets/svg/trash.svg"
                width={20}
                height={20}
                alt=""
                className="ml-2"
              />
              حذف پلاک
            </span>
            <span
              onClick={() => {
                setRowData(item);
                showSideBar();
                hidePopOver(false);
              }}
              className="ml-2 flex cursor-pointer pt-[10px]"
            >
              <Image
                src="/assets/svg/edit-2.svg"
                width={20}
                height={20}
                alt=""
                className="ml-2"
              />
              ویرایش پلاک
            </span>
          </>
        }
        /* title="Title" */
        trigger="click"
        placement="bottomLeft"
        open={open}
        onOpenChange={handleOpenChange}
        style={{ width: 50 }}
      >
        <Image
          alt=""
          className="cursor-pointer"
          src="/assets/icons/more.svg"
          width={23.88}
          height={24}
        />
      </Popover>
    </>
  );
}
