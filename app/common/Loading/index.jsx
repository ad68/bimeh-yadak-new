import React from "react";
import "./style.css";
import { imagesFileUrl } from "../../../config";
import { useGlobalContext } from "../../../context/GlobalContext";
import Image from "next/image";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const { loading } = useGlobalContext();
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className={loading ? "loading fadeIn" : "loading"}>
      <Image
        src={imagesFileUrl + "logoWhite.png"}
        className="w-[200px]"
        alt=""
      />
      <div className="lds-heart">
        <div></div>
      </div>
    </section>
  );
}
