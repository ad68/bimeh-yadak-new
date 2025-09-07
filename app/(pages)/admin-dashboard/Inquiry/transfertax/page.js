"use client";
import React from "react";
import TransferTax from "./components/TransferTax";
import TransferTaxForm from "./components/TransferTaxForm";
import ResaultTransferTax1 from "./components/ResaultTransferTax/ResaultnoWithDebt";
import ResaultTransferTax2 from "./components/ResaultTransferTax/ResaultnoWithoutDebt.jsx";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
    <>
      {/* <TransferTax /> */}
      {/* <TransferTaxForm /> */}

      {/* <ResaultTransferTax1 data='سواری - هاچ‌بک - پژو - 20I-AT' model='1396' owner='ناصر براتی' id='0022331564' num1='-----' total='8.280.000 ریال' paid='0 ریال' payable='8.280.000 ریال' follow='پرداخت' src='/assets/svg/wallet-pay.svg'/>  */}
      <ResaultTransferTax2
        diplay="hidden"
        data="سواری - هاچ‌بک - پژو - 20I-AT"
        model="1396"
        owner="ناصر براتی"
        id="0022331564"
        num1="-----"
        total="8.280.000 ریال"
        paid="8.280.000 ریال"
        payable="0 ریال"
        follow="مشاهده گواهی"
        src="/assets/svg/arrow-left-pay.svg"
      />
    </>
  );
}
