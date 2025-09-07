import Image from "next/image";
import Wave from "../../../../../public/assets/images/VectorWave.png";
import Car from "../../../../../public/assets/svg/car";
import Motor from "../../../../../public/assets/svg/motor";
import Bus from "../../../../../public/assets/svg/bus";
import {
  IconBus,
  IconBus1,
  IconMotorcycle,
  IconMotorcycle1,
} from "@/common/icons";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setTypeProduct, typeProduct }) {
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
        <section className="hidden md:block">
          <Image src={Wave} className="mt-5" alt="Picture of the author" />
        </section>
        <section className="flex items-center justify-center gap-3  md:gap-6">
          <button
            onClick={() => {
              setTypeProduct(1);
            }}
            className={`${typeProduct === 1 ? "text-[#0165E1]" : "text-gray-200"} ${typeProduct === 1 ? "bg-[#E6F0FC]" : "bg-white"} flex h-10 min-w-24 items-center justify-center gap-1 rounded-full border border-solid border-gray-100  text-sm font-semibold     md:h-16 md:min-w-36 md:gap-[6px] md:text-lg `}
          >
            {typeProduct === 1 ? (
              <Car
                fill={"#0165E1"}
                className="ml-[5px] inline-block fill-blue align-middle"
              />
            ) : (
              <Car
                fill="black"
                className="ml-[5px] inline-block  align-middle"
              />
            )}
            خودرو
          </button>
          <button
            onClick={() => {
              setTypeProduct(2);
            }}
            className={`${typeProduct === 2 ? "text-[#0165E1]" : "text-gray-200"} ${typeProduct === 2 ? "bg-[#E6F0FC]" : "bg-white"} flex h-10 min-w-24 items-center justify-center gap-1 rounded-full border border-solid  border-gray-100  text-sm font-semibold  md:h-16 md:min-w-[138px]  md:gap-[6px] md:text-lg`}
          >
            {typeProduct === 2 ? (
              <IconMotorcycle1
                viewBox="0 0 24 24"
                fill={"#0165E1"}
                width="24"
                height="24"
              />
            ) : (
              <IconMotorcycle1
                viewBox="0 0 24 24"
                fill="black"
                width="24"
                height="24"
              />
            )}
            موتور
          </button>
          <button
            onClick={() => {
              setTypeProduct(3);
            }}
            className={`${typeProduct === 3 ? "text-[#0165E1]" : "text-gray-200"} ${typeProduct === 3 ? "bg-[#E6F0FC]" : "bg-white"} flex h-10 min-w-36 items-center justify-center gap-1 rounded-full border border-solid  border-gray-100  text-sm font-semibold md:h-16 md:min-w-[212px]  md:gap-[6px] md:text-lg`}
          >
            {typeProduct === 3 ? (
              <IconBus1
                viewBox="0 0 23 22"
                fill={"#0165E1"}
                width="24"
                height="24"
              />
            ) : (
              <IconBus1
                viewBox="0 0 23 22"
                fill="black"
                width="24"
                height="24"
              />
            )}
            ماشین سنگین
          </button>
        </section>
        <section className="hidden md:block">
          <Image src={Wave} className="mt-5" alt="Picture of the author" />
        </section>
      </section>
    </>
  );
}
