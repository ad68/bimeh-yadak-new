import Image from "next/image";
import Wave from "../../../../../public/assets/images/VectorWave.png";
import Car from "../../../../../public/assets/svg/car";
import Motor from "../../../../../public/assets/svg/motor";
import Bus from "../../../../../public/assets/svg/bus";
//
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
      <section className="flex items-center justify-center gap-4">
        <section>
          <Image src={Wave} className="mt-5" alt="Picture of the author" />
        </section>
        <section className="flex items-center justify-center gap-3 md:gap-6">
          <button className="flex h-10 min-w-24 items-center justify-center gap-1 rounded-full border border-solid border-gray-100  bg-[#E6F0FC] text-lg  font-semibold text-[#0165E1]  active:bg-[#E6F0FC]  active:text-blue md:h-16 md:min-w-36 md:gap-[6px] ">
            <Car
              fill={"#0165E1"}
              className="ml-[5px] inline-block align-middle"
            />
            خودرو
          </button>
          <button className="flex h-10 min-w-24 items-center justify-center gap-1 rounded-full border border-solid  border-gray-100  text-lg font-semibold  text-gray-200 active:bg-[#E6F0FC] active:text-blue md:h-16  md:min-w-[138px] md:gap-[6px]">
            <Motor
              fill="black"
              className="ml-[5px] inline-block align-middle"
            />
            موتور
          </button>
          <button className="flex h-10 min-w-36 items-center justify-center gap-1 rounded-full border border-solid  border-gray-100  text-lg font-semibold  text-gray-200 active:bg-[#E6F0FC] active:text-blue md:h-16  md:min-w-[212px] md:gap-[6px]">
            <Bus fill="black" className="ml-[5px] inline-block align-middle" />
            ماشین سنگین
          </button>
        </section>
        <section>
          <Image src={Wave} className="mt-5" alt="Picture of the author" />
        </section>
      </section>
    </>
  );
}
