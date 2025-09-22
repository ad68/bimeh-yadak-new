import CalculateBox from "../components/CalculateBoxDaydar";
import CalculateBoxMobile from "../components/CalculateBoxMobileDaydar";
import Link from "next/link";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export const metadata = {
  title: "ارزش روز خودرو"
};
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="mt-10 xl:mt-0 xl:h-screen flex flex-col justify-center items-center">
      {/*  <section className="px-5 h-[100px] xl:h-[80px] rounded-b-[50%] xl:rounded-md  w-full  border-b shadow-lg flex  justify-center items-center gap-10 mb-5 xl:justify-center  font-bold  ">
         <Link className="text-[#009ba5] flex gap-4 xl:text-[30px]" href="https://dayins24.ir/">
          <Image src={Money} className="w-[60px]" alt="" />
          ارزش روز خودرو
        </Link>
      </section> */}
      <section className="container hidden items-center justify-center lg:flex">
        <CalculateBox />
      </section>
      <section className="container flex items-center justify-center lg:hidden">
        <CalculateBoxMobile />
      </section>
      <div className="w-full left-0 py-2 flex justify-center  text-[14px] text-slate-800  gap-2 " >
        <span>قدرت گرفته از</span>
        <Link className="text-[#0099a8] font-bold" href="https://www.iranianpooshesh.com/fa">
          ایرانیان پوشش
        </Link>
      </div>
    </section>
  );
}
