import { IconCrown } from "@/common/icons";
import { HeartFilled } from "@ant-design/icons";

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
    <section className="mx-4 mt-16 gap-4 md:grid md:grid-cols-2">
      <section className="flex items-center justify-start gap-6">
        {/* **************************************** */}
        <button className="flex h-10  min-w-20 items-center justify-center gap-[6px] rounded-full border border-solid  border-gray-100 bg-[#E6F0FC]  text-lg font-semibold text-[#0165E1] text-gray-200  active:bg-[#E6F0FC] active:text-blue md:h-12 md:min-w-24">
          <IconCrown color="#0165E1" fill="#0165E1" />
          <span>همه</span>
        </button>
        {/* **************************************** */}
        <button className="flex h-10 min-w-[172px] items-center justify-center gap-[6px] rounded-full border border-solid  border-gray-100 text-lg  font-semibold text-gray-200 active:bg-[#E6F0FC] active:text-blue  md:h-12 md:min-w-[172px]">
          <HeartFilled className="icon" />
          مورد علاقه شما
        </button>
        {/* **************************************** */}
      </section>
      <section className="mt-6 flex items-center justify-start gap-3 text-xs font-semibold md:justify-end md:gap-[18px] md:text-sm">
        <button className="flex h-8 w-24 items-center justify-center gap-[1px] rounded-full border border-solid border-gray-100  bg-[#E6F0FC] text-sm  text-[#0165E1] active:bg-[#E6F0FC]  active:text-[#0165E1] md:h-[33px] md:min-w-[97px] md:gap-[6px]">
          محبوب ترین
        </button>
        <button className="flex h-8 w-14 items-center justify-center gap-[1px] rounded-full border border-solid border-gray-100  text-sm text-gray-200 active:bg-[#E6F0FC] active:text-blue md:h-[33px]  md:min-w-[84px] md:gap-[6px]">
          جدیدترین
        </button>
        <button className="flex h-8 w-14 items-center justify-center gap-[1px] rounded-full border border-solid border-gray-100  text-sm text-gray-200 active:bg-[#E6F0FC] active:text-blue md:h-[33px]   md:min-w-[73px] md:gap-[6px]">
          کارکرده
        </button>
        <button className="flex h-8 w-14 items-center justify-center gap-[1px] rounded-full border border-solid border-gray-100  text-sm text-gray-200 active:bg-[#E6F0FC] active:text-blue md:h-[33px]   md:min-w-[85px] md:gap-[6px]">
          گران ترین
        </button>
        <button className="flex h-8 w-14 items-center justify-center gap-[1px] rounded-full border border-solid border-gray-100  text-sm text-gray-200 active:bg-[#E6F0FC] active:text-blue md:h-[33px]   md:min-w-[82px]  md:gap-[6px]">
          ارزان ترین
        </button>
      </section>
    </section>
  );
}
