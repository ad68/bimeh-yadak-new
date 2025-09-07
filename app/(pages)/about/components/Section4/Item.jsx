"use client";
import React from "react";
import Image from "next/image";
import { IconLinkedin } from "@/common/icons";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ name, src }) {
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
      <section className="flex h-auto w-[250px] flex-col items-center gap-4  rounded-[10px] px-6 py-4  ">
        <section className="flex h-[107px] w-[107px] items-center justify-center  rounded-full border-[4px] border-solid border-blue">
          <Image alt="" src={src} width={90} height={90} />
        </section>
        <span className=" font-semibold text-gray-500">{name}</span>
        <ul className="mb-5 mt-3 flex w-full flex-col gap-5">
          <li>
            <IconLinkedin
              viewBox="0 0 32 32"
              width="20"
              height="20"
              color="#0A66C2"
              fill="#0A66C2"
              className=""
            />
          </li>
        </ul>
      </section>
    </>
  );
}
