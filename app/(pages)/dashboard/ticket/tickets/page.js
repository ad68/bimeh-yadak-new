/* eslint-disable react/jsx-key */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { api } from "@/api";
import { ComponentLoading } from "@/common";
import { useAxiosWithToken } from "@/hooks";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Dynamic Components ────────────────────────────────────────────────────────────
  const FilterItem = dynamic(() => import("./components/FilterItem"), { ssr: false });
  const TableRow = dynamic(() => import("./components/TableRow"), { ssr: false });
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeFilter, setActiveFilter] = useState("OPEN");
  const [ticketStatusCounts, setTicketStatusCounts] = useState({});
  const [ticketList, setTicketList] = useState([]);
  const [loading, setLoading] = useState(false);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getTicketStatusContent = () => {
    useAxiosWithToken
      .get(api.ticket.calculateTickets)
      .then((res) => {
        setTicketStatusCounts(res.data.ticketStatusCounts);
      })
      .catch((err) => { });
  };
  const getTicketList = () => {
    setLoading(true);
    useAxiosWithToken
      .get(api.ticket.searchTickets + "?ticketStatusEnum=" + activeFilter)
      .then((res) => {
        setLoading(false);
        setTicketList(res.data.elements);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getTicketStatusContent();
    getTicketList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getTicketList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className='mb-12 rounded-[8px] bg-white p-4 px-[34px] py-[44px] shadow-md'>
      <section className='flex items-center justify-between'>
        <span className='text-lg font-bold'>تیکت های من</span>
        <Link
          href='/dashboard/ticket/addTicket'
          className='flex h-[40px] w-[183px] items-center justify-center rounded-[10px] border border-blue bg-white text-blue'
        >
          افزودن تیکت جدید
        </Link>
      </section>
      <section className='m-auto mt-[52px] flex h-[188px] w-[489px] items-center justify-between '>
        <FilterItem
          setActiveFilter={setActiveFilter}
          src='/assets/icons/openedmail.png'
          filter='OPEN'
          currentFilter={activeFilter}
          title='تیکت های باز'
          badge={ticketStatusCounts?.OPEN}
        />
        <FilterItem
          setActiveFilter={setActiveFilter}
          src='/assets/icons/readingmail.png'
          filter='IN_PROGRESS'
          currentFilter={activeFilter}
          title='در حال بررسی'
          badge={ticketStatusCounts?.IN_PROGRESS}
        />
        <FilterItem
          setActiveFilter={setActiveFilter}
          src='/assets/icons/replaiedmail.png'
          filter='RESOLVED'
          currentFilter={activeFilter}
          title='پاسخ داده شده'
          badge={ticketStatusCounts?.RESOLVED}
        />
        <FilterItem
          setActiveFilter={setActiveFilter}
          src='/assets/icons/closemail.png'
          filter='CLOSED'
          currentFilter={activeFilter}
          title='بسته شده'
          badge={ticketStatusCounts?.CLOSED}
        />
      </section>
      <section className='relative m-auto w-[700px] text-center text-[14px]'>
        <section className='grid grid-cols-9 gap-1'>
          <section className='w-full'>شماره</section>
          <section className='col-span-2 w-full'>موضوع</section>
          <section className='w-full'>بخش</section>
          <section className='col-span-2 w-full'>وضعیت</section>
          <section className='w-full'>تاریخ</section>
          <section className='col-span-2 w-full'>عملیات</section>
        </section>
        <section className='relative min-h-12'>
          {loading && <ComponentLoading />}
          {ticketList.map((item, index) => (
            <TableRow rowData={item} />
          ))}
        </section>
      </section>
    </section>
  );
}
