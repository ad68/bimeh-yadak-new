import { HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import { IconHeart, IconShare } from "@/common/icons";
import Image from "next/image";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ pic }) {
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
      <section className="m-6 flex flex-col items-center justify-start gap-6 rounded-xl bg-white p-6 shadow-[0_2px_6px_0px_rgba(0,0,0,0.14)] md:m-0 md:flex-row ">
        <section className=" ">
          <Image
            className="hidden md:block"
            src={pic}
            width={247}
            height={130}
            alt="Picture of the Desktop "
          />
          <Image
            className="block md:hidden"
            src={pic}
            width={365}
            height={167}
            alt="Picture of the author"
          />
        </section>
        <section className="flex w-full flex-col items-center justify-start gap-2">
          {/* ************************** */}
          <header className="flex w-full items-center justify-between ">
            <span className="text-2xl font-bold">آریسان 2</span>
            {/* ************************** */}
            <section className="flex items-center justify-center gap-6">
              <IconHeart
                viewBox="0 0 18 18"
                width={18}
                height={18}
                fill="#191919"
                strokeWidth="0"
              />
              <IconShare
                viewBox="0 0 19 20"
                width={19}
                height={20}
                fill="#191919"
                strokeWidth="0"
              />
            </section>
          </header>
          {/* ************************** */}
          <section className="flex w-full items-center justify-start">
            <span>ایران خودرو - 1402</span>
            <span className="pastDay mr-2 text-[#A6A9BD]">( دو روز پیش )</span>
          </section>
          {/* ************************** */}
          <section className="flex w-full items-center justify-between">
            <span className="text-sm font-normal text-gray-200">
              قیمت بازار
            </span>
            <span>
              <strong className="mx-1 text-lg font-semibold text-[#262626]">
                390,000,000
              </strong>
              تومان
            </span>
          </section>
          {/* ************************** */}
          <section className="flex w-full items-center justify-between">
            <span className="text-sm font-normal text-gray-200">
              قیمت کارخانه
            </span>
            <section>
              <strong className="mx-1 text-lg font-semibold text-[#262626]">
                390,000,000
              </strong>
              <span className="mx-[6px] text-sm font-semibold text-[Green] ">
                +12%
              </span>
              <span>تومان</span>
            </section>
          </section>
          {/* ************************** */}
        </section>
      </section>
    </>
  );
}
