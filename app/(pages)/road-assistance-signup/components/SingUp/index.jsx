"use client";
import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";
import PreSignup from "./components/TabContent/BasicInfo";
import CarInfo from "./components/TabContent/CarInfo";
import DocumentUpload from "./components/TabContent/DocumentUpload";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(1);
  const [basicInfo, setBasicInfo] = useState()
  const [carInfo, setCarInfo] = useState()
  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section>
      <section className="xl:my-[80px] mt-[60px] flex xl:h-[150px] h-[100px] w-full items-center justify-center bg-primary font-bold">
        <h1 className="xl:text-[40px] text-[24px] font-bold text-center px-10">
          ثبت نام امدادگران
        </h1>
      </section>
      <section className="w-[1366px] max-w-full m-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <section className={`${activeTab === 1 ? `block` : `hidden`}`}>
          <PreSignup setBasicInfo={setBasicInfo} activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>
        <section className={`${activeTab === 2 ? `block` : `hidden`}`}>
          <CarInfo setCarInfo={setCarInfo} activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>
        <section className={`${activeTab === 3 ? `block` : `hidden`}`}>
          <DocumentUpload basicInfo={basicInfo} carInfo={carInfo} activeTab={activeTab} />
        </section>
      </section>
    </section>
  );
}
