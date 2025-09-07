/* import Calculate from "./components/CalculateBox";
import CalculateBoxMobile from "./components/CalculateBoxMobile"; */
import Image from "next/image";
import Links from "./components/Links";
import Logo from "../../public/icons/logo.svg";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export const metadata = {
  title: "بیمه یدک | بیمه حمل رایگان، امداد خودرو و بارنامه الکترونیکی"
}
export default function page() {
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
      <section className="w-[1366px] max-w-full m-auto mt-[100px] xl:mt-[120px]">
        {/* <section className="container hidden items-center justify-center lg:flex">
          <Calculate />
        </section>
        <section className="container flex items-center justify-center lg:hidden">
          <CalculateBoxMobile />
        </section> */}
        <section className="">
          <section className="flex justify-center items-center gap-3">
            <Image src={Logo} width={88} height={88} alt="" />
            <section className="text-[#303030] xl:text-[48px] text-[36px] font-bold">بیمه یدک</section>
          </section>
          <section className="xl:mt-[27px] mt-4 text-[#303030] xl:text-[20px] text-[16px] font-bold text-center px-10 xl:px-0">معتبرترین پلتفرم درخواست بیمه های خاص خودرو و امداد خودرو به همراه فروش انواع بیمه نامه ها</section>
        </section>
        <Links />
      </section>
    </>
  );
}
