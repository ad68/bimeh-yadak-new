import Image from "next/image";

import SearchBox from "./components/SearchBox";
import carBg from "../../../../../../public/assets/images/Framebgcar.png";
import { getTodayPersian } from "@/helper";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  setProductLoading,
  currentPage,
  setTotalCount,
}) {
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
      <section className="2md:pr-52 mt-[60px] flex max-w-full  flex-col items-end justify-between md:mt-[20px] md:items-center md:pr-1 xl:flex-row-reverse dark:bg-darkBg-200 ">
        <Image
          loading="eager"
          src={carBg}
          width={1100}
          alt="polygon hero"
          className="absolute -z-0 h-auto w-full xl:left-[-150px] xl:w-[950px] 2xl:left-[-100px] 2xl:top-[10px] 2xl:w-[1100px]"
        />
        <section className="mt-64 flex h-full w-full flex-col items-center justify-center md:mt-[480px] md:py-10  xl:mt-[120px] xl:items-start xl:pr-[100px] 2xl:pr-[200px] ">
          <section className="text-5xl  font-bold 	md:text-7xl  ">
            <span className="text-blue dark:text-darkText-300">تضمین </span>
            <span className="text-gray-black dark:text-darkText-300">
              ماشین
            </span>
          </section>
          <span className="mt-2 text-sm font-normal text-gray-200 md:text-base dark:text-darkText-400">
            <span>آخرین به روز رسانی </span>
            <span className="mr-1">{getTodayPersian()}</span>
          </span>
          <h2 className="mt-2 text-right text-base font-bold leading-[27.64px] xl:ml-[99px] xl:text-[40px] xl:leading-[69.09px]">
            قیمت خودروی شما،
            <br className="hidden xl:inline" /> تنها با{" "}
            <span className="font-extrabold  text-blue ">چند کلیک</span> فاصله
            دارد!
          </h2>
          <Image
            alt=" "
            src="/assets/images/VectorBgHome.png"
            width={134.59}
            height={192.5}
            className="mr-[150px] hidden xl:block dark:hidden xl:dark:hidden"
          />
        </section>
      </section>
      <div className="relative z-30 mt-56 flex w-full items-center justify-center bg-white md:mt-[100px] xl:mt-[-100px] 2xl:mt-[-40px]">
        <SearchBox
          currentPage={currentPage}
          setTotalCount={setTotalCount}
          setProductLoading={setProductLoading}
        />
      </div>
    </>
  );
}
