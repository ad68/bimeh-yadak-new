import { IconArrowdown } from "@/common/icons";
import { consoleLog_BlackOrange, numberWithCommas } from "@/helper";
import { Checkbox } from "antd";
import { useEffect, useState } from "react";
import Moment from 'moment-jalaali'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  data,
  checkBoxHandleChange,
  activeCollapse,
  setActiveCollapse,
  index,
  
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (activeCollapse !== index) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCollapse]);

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section
      className={`mt-4 ${open ? `h-[340px]` : `h-[65px]`} w-full overflow-hidden rounded-xl bg-white transition-all duration-300 ease-in-out`}
    >
      <section className="grid grid-cols-2 border-b border-solid border-[#F6F6FB] py-[18px] pr-4 shadow-[0px_19.74px_44.42px_-12.83px_#AAAAAA29] xl:gap-4 ">
        <section className="flex justify-between">
          <Checkbox
            onChange={(e) =>
              checkBoxHandleChange(e.target.checked, data?.amount)
            }
         
          ></Checkbox>
          <span className="text-lg font-semibold">
            {`${numberWithCommas(data?.amount)} ریال`}
          </span>
          <span className="flex h-[24px] w-[67px] items-center justify-center rounded-[8px] bg-[#FFEDBE] text-[14px] font-normal text-[#3E4151]">
            {data?.delivery}
          </span>
        </section>
        <section className="ml-7 flex items-center justify-between">
          <span className="text-base font-normal text-[#9295A9]">
            {Moment(data?.dateTime).format("jYYYY/jMM/jDD - hh:mm:ss")}
          </span>
          <IconArrowdown
            onClick={() => {
              setOpen(!open);
              setActiveCollapse(index);
            }}
            className={`${open ?"rotate-180":"rotate-0"} transition-all cursor-pointer stroke-[#0165E1]`}
          />
        </section>
      </section>
      <section className=" p-4 text-xs xl:text-base">
        <section className="flex h-[48px] w-full items-center justify-between rounded-lg bg-[#F6F6FB] px-3 xl:px-4">
          <span className="text-[#A6A9BD] ">سریال</span>
          <span className="text-[#3E4151]">{data?.serialNumber}</span>
        </section>
        <section className="flex h-[48px] w-full items-center justify-between rounded-lg  px-4">
          <span className="text-[#A6A9BD] ">نوع تخلف</span>
          <span className="text-[#3E4151]">{data?.delivery}</span>
        </section>
        <section className="flex h-[48px] w-full  items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
          <span className="text-[#A6A9BD] ">کد تخلف</span>
          <span className="text-[#3E4151]">{data?.typeCode}</span>
        </section>

        <section className="flex h-[48px] w-full  items-center justify-between rounded-lg  px-4">
          <span className="text-[#A6A9BD] ">شرح تخلف</span>
          <span className="text-[#3E4151]">{data?.type}</span>
        </section>
        <section className="flex h-[48px] w-full  items-center justify-between rounded-lg bg-[#F6F6FB] px-4">
          <span className="text-[#A6A9BD] ">مکان</span>
          <span className="text-[#3E4151]">{data?.location}</span>
        </section>
      </section>
    </section>
  );
}
