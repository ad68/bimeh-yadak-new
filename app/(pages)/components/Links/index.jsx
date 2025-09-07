"use client";
import React, { useState, useContext, useEffect } from "react";
import LinkItem from "./components/LinkItem";
import Repair from "../../../../public/icons/repair.png";
import Api from "../../../../public/icons/hands.svg";
import Store from "../../../../public/icons/Group 6.svg";
import Money from "../../../../public/icons/Group 10.svg";
import Chart from "../../../../public/icons/Layer_1.svg";
import Repair2 from "../../../../public/icons/repair.svg";
import Bill from "../../../../public/icons/bill.svg";
import Tow from "../../../../public/icons/tow.svg";

import Invoice from "../../../../public/icons/invoice.svg";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────v

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section>
      <section className="w-[90%] mx-auto  xl:w-full flex justify-center gap-x-10 xl:gap-[164px] gap-y-6 xl:gap-y-[20px] xl:mt-[20px] mt-[30px] ">
        <section className="grid grid-cols-3 gap-x-10 xl:gap-10 xl:grid-cols-4 justify-items-center">
          {/*  <LinkItem img={Repair} title="خرید بیمه یدک (حمل رایگان)" href="/relief-signup" /> */}
          <LinkItem
            img={Store}
            title="درخواست امداد خودرو رایگان"
            href="/request-relief"
          />
          <LinkItem img={Api} title="مشاور و کارشناس فروش" href="/marketing" />
          <LinkItem img={Money} title="ارزش روز خودرو" href="/price-calculate" />
          <LinkItem
            img={Chart}
            title="محاسبه افت بیمه خودرو"
            href="/price-drop-insurance"
          />
          <LinkItem
            img={Tow}
            title="بیمه امدادگران"
            href="https://emdad.hafezinsurance.ir/bimeh"
          />
          <LinkItem
            img={Invoice}
            title="صدور فاکتور امدادگر"
            href="/assistance-invoice"
          />
          <LinkItem
            comingSoon={true}
            img={Repair2}
            title="بیمه تعمیرات"
            href="#"
          />
          <section className="visible xl:hidden">
            <LinkItem
              comingSoon={true}
              img={Bill}
              title="صدور بارنامه الکترونیکی"
              href="#"
            />
          </section>
          <section className="hidden xl:block">
            <LinkItem
              comingSoon={true}
              img={Bill}
              title="صدور بارنامه الکترونیکی"
              href="#"
            />
          </section>
        </section>
      </section>
      {/*   <section className="hidden xl:block">
        <LinkItem
          comingSoon={true}
          img={Bill}
          title="صدور بارنامه الکترونیکی"
          href="#"
        />
      </section> */}
    </section>
  );
}
