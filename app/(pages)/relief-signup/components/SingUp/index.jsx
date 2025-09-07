"use client";
import { useState } from "react";
import Tabs from "./components/Tabs";
import Rules from "./components/TabContent/Rules";
import PreSignup from "./components/TabContent/Pre-Signup";
import Success from "./components/TabContent/Success";
import Checkout from "./components/TabContent/Checkout";
import { useSearchParams } from "next/navigation";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const searchParams = useSearchParams();
  const actionType = searchParams.get("success");
  // ─── States ─────────────────────────────────────────────────────────────────────

  const [activeTab, setActiveTab] = useState(actionType ? 4 : 1);
  const [preRegisterData, setPreRegisterData] = useState({})
  const [preRegisterId, setPreRegisterId] = useState()
  const [plateMode, setPlateMode] = useState("normal")
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
          ثبت نام بیمه امداد حمل رایگان
        </h1>
      </section>
      <section className="w-[1366px] max-w-full m-auto">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <section className={`${activeTab === 1 ? `block` : `hidden`}`}>
          <Rules activeTab={activeTab} setActiveTab={setActiveTab} />
        </section>
        <section className={`${activeTab === 2 ? `block` : `hidden`}`}>
          <PreSignup activeTab={activeTab} setPreRegisterData={setPreRegisterData} setActiveTab={setActiveTab} setPreRegisterId={setPreRegisterId} plateMode={plateMode} setPlateMode={setPlateMode} />
        </section>
        <section className={`${activeTab === 3 ? `block` : `hidden`}`}>
          <Checkout activeTab={activeTab} plateMode={plateMode} preRegisterData={preRegisterData} preRegisterId={preRegisterId} setActiveTab={setActiveTab} />
        </section>
        {activeTab === 4 && <Success activeTab={activeTab} preRegisterData={preRegisterData} setActiveTab={setActiveTab} />}
        {/*{activeTab === 1 && <Rules setActiveTab={setActiveTab} />}
        {activeTab === 2 && <PreSignup setPreRegisterData={setPreRegisterData} setActiveTab={setActiveTab} setPreRegisterId={setPreRegisterId} />}
        {activeTab === 3 && <Checkout preRegisterData={preRegisterData} preRegisterId={preRegisterId} setActiveTab={setActiveTab} />}
        {activeTab === 4 && <Success preRegisterData={preRegisterData} setActiveTab={setActiveTab} />} */}
      </section>
    </section>
  );
}
