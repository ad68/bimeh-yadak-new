import React, { useEffect } from "react";
import { ArrowsAltOutlined, BgColorsOutlined } from "@ant-design/icons";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ result }) {
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
      {/*   <ul className="list-disc">
        {result?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      <section className="grid w-full grid-cols-1 gap-3 text-[13px]">
        {result.map((item, index) => (
          <section
            key={index}
            className="mt-1 flex w-full items-center justify-between rounded-lg border border-[#e5e5e5] p-1"
          >
            <section>
              <span
                className={` rounded-[8px]  p-1 `}
              >{`${item.info} ${item.parameter}`}</span>
            </section>
            <span className="rounded-[5px] bg-[#0098ff] p-1 text-white ">
              {item.percent} %
            </span>
          </section>
        ))}
      </section>
    </>
  );
}
