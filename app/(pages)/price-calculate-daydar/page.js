import Image from "next/image";
import CalculateBox from "../components/CalculateBox";
import CalculateBoxMobile from "../components/CalculateBoxMobile";
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
    <>
      <section className="px-5 h-[120px] xl:h-[150px] rounded-b-[50%] xl:rounded-md  w-full  border-b shadow-lg flex justify-between items-center gap-10 mb-10 xl:justify-center  font-bold  ">
        <Image src="/assets/images/daydar.png" className="w-[150px] xl:w-[200px]" quality={100} width={300} height={300} alt="" />
        <h1 className="text-[20px] xl:text-[40px]  font-bold text-center  text-[#009ba5]">ارزش روز خودرو</h1>
      </section>
      <section className="container hidden items-center justify-center lg:flex">
        <CalculateBox />
      </section>
      <section className="container flex items-center justify-center lg:hidden">
        <CalculateBoxMobile />
      </section>
    </>
  );
}
