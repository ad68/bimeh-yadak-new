import Image from "next/image";
import {
  HeartFilled,
  HeartOutlined,
  ShareAltOutlined,
  StarFilled,
} from "@ant-design/icons";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ src, newLabel }) {
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
    <section className="relative cursor-pointer  overflow-hidden rounded-2xl ">
      <Image src={src} alt="" />
      <section className="group absolute left-0 top-0 z-[1] h-full w-full  bg-[#00000033] filter backdrop-grayscale hover:bg-[#4E94EA] hover:opacity-50">
        <section className=" absolute left-5 top-5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0000001f] text-lg text-white ">
            <ShareAltOutlined />
          </span>
          <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0165E1] text-lg text-white">
            <HeartFilled />
          </span>
        </section>
        {newLabel && (
          <section className="absolute right-5 top-5 flex h-[26px] w-[70px] items-center justify-center gap-[6px] rounded border border-solid border-[#8989896e] bg-[#F5B000] text-center text-xs font-normal text-white group-hover:grayscale-0">
            <StarFilled className="ml-1" />
            جدید
          </section>
        )}

        <section className="absolute  bottom-[15px] left-0 h-[170px] w-full p-[25px] grayscale-0 group-hover:hidden">
          <header className="flex w-full items-center justify-between ">
            <span className="text-2xl font-bold text-white">آریسان 2</span>
            {/* ************************** */}
            <section className="flex items-center justify-center gap-6">
              <HeartFilled
                width={24}
                height={24}
                fill="#191919"
                strokeWidth="0"
              />
              <HeartFilled
                width={24}
                height={24}
                fill="#191919"
                strokeWidth="0"
              />
            </section>
          </header>

          <section className="mt-6 flex text-sm text-white">
            <span className="text-sm font-medium text-white">قیمت بازار</span>
            <span className="mr-auto font-normal">
              <strong className="ml-2 text-[17px] font-semibold">
                390,000,000
              </strong>
              تومان
            </span>
          </section>
          <section className="mt-3 flex text-sm text-white">
            <span className="text-sm font-medium text-white">قیمت کارخانه</span>
            <section className="mr-auto font-normal">
              <strong className="ml-2 text-[17px] font-semibold">
                390,000,000
              </strong>
              <span className="ml-2 text-sm font-semibold text-[#ef2a2a]">
                -12%
              </span>
              <span>تومان</span>
            </section>
          </section>
        </section>

        <section className=" absolute bottom-10 left-44 hidden backdrop-grayscale-0 group-hover:filter-none group-hover:flex">
          <button className="filter-none flex h-[48px] w-[173px] items-center  text-white  justify-center rounded-lg hover:bg-white hover:text-black border-2 border-solid border-white">
            مشاهده بیشتر
          </button>
        </section>
      </section>
    </section>
  );
}
