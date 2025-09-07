"use client";
import React from "react";
import Item from "./Item";
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
    <>
      <section className="mx-auto my-[100px]  grid h-auto w-[1141px] grid-cols-4 justify-between justify-items-center gap-8">
        <Item name="عرفان نوخیز" src="/assets/images/profile.png" />
        <Item name="علی درگاهی" src="/assets/images/profile.png" />
        <Item name="عاطفه قدوسی" src="/assets/images/woman.png" />
        <Item name="مینا یوسف نژاد" src="/assets/images/woman.png" />
        <Item name="علی مشیری" src="/assets/images/profile.png" />
        <Item name="مهران مقتدر" src="/assets/images/profile.png" />
        <Item name="محمدرضا ذوالفقاری" src="/assets/images/profile.png" />
        <Item name="علیرضا محمدی" src="/assets/images/profile.png" />
      </section>
    </>
  );
}
