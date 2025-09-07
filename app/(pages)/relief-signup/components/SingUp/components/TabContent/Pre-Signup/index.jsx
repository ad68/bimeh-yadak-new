import { useState, useContext, useEffect } from "react";
import PreRegister from './components/PreRegister'
import PreRegisterForm from './components/PreRegisterForm'
import { scrollToTop } from "@/helper";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveTab, setPreRegisterData, setPreRegisterId, plateMode, setPlateMode, activeTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [innerActiveTab, setInnerActiveTab] = useState(1)
  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    scrollToTop()
  }, [activeTab])
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
    <section className="text-red text-center bg-rose-100 p-2 mt-4 rounded-md text-[18px] py-4">
      <p>
        نکته: در صورتی که ثبت نام به کمک استعلام بیمه مرکزی با مشکل مواجه شد می توانید از ثبت نام دستی استفاده کنید.
      </p>
      <p className="mt-4">
        نکته: در صورتی که دارای پلاک مناطق آزاد هستید از ثبت نام دستی استفاده کنید.
      </p>
    </section>
    <section className="flex">
      <section className="grid w-full grid-cols-1 gap-2 xl:grid-cols-2 mt-5">
        <section onClick={() => setInnerActiveTab(1)} className={`p-3 font-bold ${innerActiveTab === 1 ? `bg-primary scale-105 transition-all` : `bg-silver`} text-center rounded-md cursor-pointer`}>ثبت نام به کمک استعلام  بیمه مرکزی</section>
        <section onClick={() => setInnerActiveTab(2)} className={`p-3 font-bold ${innerActiveTab === 2 ? `bg-primary scale-105 transition-all` : `bg-silver`} text-center rounded-md cursor-pointer`}>ثبت نام دستی</section>
      </section>
    </section>
    {innerActiveTab === 1 && <PreRegister setPlateMode={setPlateMode} setPreRegisterData={setPreRegisterData} setActiveTab={setActiveTab} setPreRegisterId={setPreRegisterId} />}
    {innerActiveTab === 2 && <PreRegisterForm plateMode={plateMode} setPlateMode={setPlateMode} setPreRegisterData={setPreRegisterData} setActiveTab={setActiveTab} setPreRegisterId={setPreRegisterId} />}
  </>;
}
