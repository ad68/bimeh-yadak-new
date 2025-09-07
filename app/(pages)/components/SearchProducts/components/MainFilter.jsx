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
          <button className="min-w-24 h-10 md:min-w-36 md:h-16 flex items-center justify-center gap-1 md:gap-[6px] rounded-full  border border-solid  border-gray-100 text-lg text-gray-200 font-semibold  bg-[#E6F0FC] active:bg-[#E6F0FC] text-[#0165E1] active:text-blue ">
            <Car
              fill={"#0165E1"}
              className="inline-block align-middle ml-[5px]"
            />
            خودرو
          </button>
          <button className="min-w-24 h-10 md:min-w-[138px] md:h-16 flex items-center justify-center gap-1 md:gap-[6px]  rounded-full  border border-solid  border-gray-100 text-lg text-gray-200 font-semibold  active:bg-[#E6F0FC] active:text-blue">
            <Motor
              fill="black"
              className="inline-block align-middle ml-[5px]"
            />
            موتور
          </button>
          <button className="min-w-36 h-10 md:min-w-[212px] md:h-16 flex items-center justify-center gap-1 md:gap-[6px]  rounded-full  border border-solid  border-gray-100 text-lg text-gray-200 font-semibold  active:bg-[#E6F0FC] active:text-blue">
            <Bus fill="black" className="inline-block align-middle ml-[5px]" />
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
