import React, { useState, useContext, useEffect } from "react";
import moment from "moment-jalaali";
import Link from "next/link";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ rowData }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="mt-[12px] grid h-[50px] cursor-pointer grid-cols-9 items-center gap-1 rounded-[12px] border border-[#E8E7EB] font-normal  transition-all hover:shadow-[0_2px_6px_0px_rgba(0,0,0,0.14)] ">
      <section className="w-full">{rowData?.id}</section>
      <section className="col-span-2 w-full">{rowData?.ticketSubject}</section>
      <section className="w-full">{rowData?.departmentName}</section>
      <section className="col-span-2 w-full">
        {rowData?.ticketStatus === "OPEN" && (
          <span className="m-auto flex h-[26px] w-[69px] items-center justify-center rounded-full bg-[#FEEAF3] font-normal text-[#F02484] ">
            باز
          </span>
        )}
        {rowData?.ticketStatus === "IN_PROGRESS" && (
          <span className="m-auto flex h-[26px] w-[98px] items-center justify-center rounded-full bg-[#FFF0E6] font-normal text-[#FB8733]">
            در حال بررسی
          </span>
        )}
        {rowData?.ticketStatus === "RESOLVED" && (
          <span className="m-auto flex h-[26px] w-[115px] items-center justify-center rounded-full bg-[#E9F8ED] font-normal text-[#21B249]">
            پاسخ داده شده
          </span>
        )}
        {rowData?.ticketStatus === "CLOSED" && (
          <span className="m-auto flex h-[26px] w-[69px] items-center justify-center rounded-full bg-[#EEFAFE] font-normal text-[#0097C1]">
            بسته
          </span>
        )}
      </section>
      <section className="w-full">
        {moment(rowData?.createdOn).format("jYYYY/jMM/jDD")}
      </section>
      <section className="col-span-2 w-full">
        <Link href={`/dashboard/ticket/ticketChat/${rowData.id}`}>
          <button className="h-[30px] w-[83px] rounded-full bg-blue text-white">
            مشاهده
          </button>
        </Link>
      </section>
    </section>
  );
}
