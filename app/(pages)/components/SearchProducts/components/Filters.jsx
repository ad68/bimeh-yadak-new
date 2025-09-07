import { IconCrown, IconMenuGrid, IconMenuList } from "@/common/icons";
import { HeartFilled } from "@ant-design/icons";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setFilterType, filterType }) {
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
        <button className="flex h-10  min-w-20 items-center justify-center gap-[6px] rounded-full border border-solid  border-gray-100 bg-[#E6F0FC]  text-lg font-semibold  text-[#0165E1]  active:bg-[#E6F0FC] active:text-blue md:h-12 md:min-w-24">
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
        <section className="hidden md:flex  md:items-center md:justify-center md:gap-4">
          {/* **************************************** */}
          <div className="border-gray-blue h-[38px] w-[38px] rounded-md border border-solid shadow-sm  active:border-blue active:shadow-[0px_2px_6px_0px_#0165e14d] md:flex md:items-center md:justify-center md:gap-4">
            <button
              onClick={() => setFilterType("1")}
              className={` ${filterType === "1" && " active"}`}
            >
              <IconMenuList
                width={23}
                height={19}
                viewBox="0 0 23 19"
                preserveAspectRatio="xMidYMid slice"
                fill="#0165e1"
                strokeWidth="0"
                className="inline-flex items-center justify-center text-blue  active:shadow-[0px_2px_6px_0px_#0165e14d]"
              />
            </button>
          </div>
          <div className="h-[38px] w-[38px] rounded-md border border-solid border-gray-100 shadow-sm  active:border-blue active:shadow-[0px_2px_6px_0px_#0165e14d] md:flex md:items-center md:justify-center md:gap-4">
            {/* **************************************** */}
            <button
              onClick={() => setFilterType("2")}
              className={` ${filterType === "2" && "active"}`}
            >
              <IconMenuGrid
                width={18}
                height={19}
                viewBox="0 0 18 19"
                fill="#0165e1"
                strokeWidth="0"
                preserveAspectRatio="none"
                className="inline-flex items-center justify-center text-blue  active:shadow-[0px_2px_6px_0px_#0165e14d]"
              />
            </button>
          </div>
        </section>
      </section>
    </section>
  );
}
