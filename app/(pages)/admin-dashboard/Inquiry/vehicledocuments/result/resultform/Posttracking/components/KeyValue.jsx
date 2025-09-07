import React from "react";
import Image from "next/image";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ label, value }) {
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
      <section className="flex justify-between text-[12px]">
        <section>
          <Image
            src="/assets/images/Ellipse.svg"
            width={8}
            height={8}
            className="inline"
            alt=""
          />
          <span className="text-[12px]">{label}:</span>
        </section>
        <span className=" font-semibold xl:font-bold">{value}</span>
      </section>
    </>
  );
}
