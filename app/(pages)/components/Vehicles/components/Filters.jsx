import { IconCrown, IconMenuGrid, IconMenuList } from "@/common/icons";
import { HeartFilled } from "@ant-design/icons";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
function FilterButton({ children }) {
  return (
    <button className=" flex h-8 items-center justify-center whitespace-nowrap rounded-full border border-solid border-gray-100 px-4 text-sm text-gray-200   md:h-[33px]  md:px-3  ">
      {children}
    </button>
  );
}
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
    <section className="mt-16 gap-4 md:grid md:grid-cols-2">
      <section className="flex items-center justify-start gap-[16px] px-[20px]">
        {/* **************************************** */}
        <button className="flex h-10  min-w-20 items-center justify-center gap-[6px] rounded-full border border-solid  border-gray-100 bg-[#E6F0FC]  text-sm font-semibold text-[#0165E1]  active:bg-[#E6F0FC]  active:text-blue md:h-12 md:min-w-24 md:text-lg">
          <IconCrown color="#0165E1" fill="#0165E1" />
          <span>همه</span>
        </button>
        {/* **************************************** */}
        <button className="flex h-10 min-w-[172px] items-center justify-center gap-[6px] rounded-full border border-solid  border-gray-100 text-sm font-semibold  text-gray-200 active:bg-[#E6F0FC] active:text-blue md:h-12  md:min-w-[172px] md:text-lg">
          <HeartFilled className="icon" />
          مورد علاقه شما
        </button>
        {/* **************************************** */}
      </section>
      <section className="mt-6 items-center justify-between gap-3 text-xs font-semibold md:flex md:justify-end md:gap-[18px] md:text-sm">
        <section className="flex w-full items-center justify-between gap-3 overflow-x-scroll px-[20px] pl-2 md:w-[493px] md:pl-0">
          <FilterButton>محبوب ترین</FilterButton>
          <FilterButton>جدیدترین</FilterButton>
          <FilterButton>کارکرده</FilterButton>
          <FilterButton>گران ترین</FilterButton>
          <FilterButton> ارزان ترین</FilterButton>
        </section>
        <section className="hidden md:flex  md:items-center md:justify-center md:gap-4">
          <button
            onClick={() => setFilterType("1")}
            className={`border-gray-blue h-[38px] w-[38px] rounded-md border border-solid shadow-sm  active:border-blue active:shadow-[0px_2px_6px_0px_#0165e14d] md:flex md:items-center md:justify-center md:gap-4 ${filterType === "1" && " active"}`}
          >
            <IconMenuList
              width={23}
              height={19}
              viewBox="0 0 23 19"
              preserveAspectRatio="xMidYMid slice"
              fill={filterType === "1" ? "#0165e1" : "#3E4151"}
              strokeWidth="0"
              className="inline-flex items-center justify-center text-blue  active:shadow-[0px_2px_6px_0px_#0165e14d]"
            />
          </button>
          <button
            onClick={() => setFilterType("2")}
            className={`h-[38px] w-[38px] rounded-md border border-solid border-gray-100 shadow-sm  active:border-blue active:shadow-[0px_2px_6px_0px_#0165e14d] md:flex md:items-center md:justify-center md:gap-4 ${filterType === "2" && "active"}`}
          >
            <IconMenuGrid
              width={18}
              height={19}
              viewBox="0 0 18 19"
              fill={filterType === "2" ? "#0165e1" : "#3E4151"}
              strokeWidth="0"
              preserveAspectRatio="none"
              className="inline-flex items-center justify-center text-blue  active:shadow-[0px_2px_6px_0px_#0165e14d]"
            />
          </button>
        </section>
      </section>
    </section>
  );
}
