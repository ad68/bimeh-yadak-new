import Image from "next/image";
import CalculateBox from "../components/CalculateBox";
import CalculateBoxMobile from "../components/CalculateBoxMobile";
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
    <>
      <section className="px-5 h-[120px] xl:h-[150px] rounded-b-[50%] xl:rounded-md  w-full  border-b shadow-lg flex  justify-center items-center gap-10 mb-5 xl:justify-center  font-bold  ">
        <Link href="https://dayins24.ir/">
          <Image src="/assets/images/daydar.png" className="w-[150px] xl:w-[200px]" quality={100} width={300} height={300} alt="" />
        </Link>
      </section>
      <section className="">
        <h1 className="text-[24px] xl:text-[40px] py-2 xl:py-0 font-bold text-center  text-[#009ba5]">ارزش روز خودرو</h1>
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
