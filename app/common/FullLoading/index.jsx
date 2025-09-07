import Image from "next/image";
import "./style.css";
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
    <section className="fixed left-0  top-0 z-[1000] flex h-full w-full items-center justify-center bg-[#2362e51f] backdrop-blur-[2px]">
      <section className="max-[90%] mt-[-100px] flex h-[200px] w-[300px] flex-col items-center justify-center rounded-2xl bg-white">
        <Image alt="" src="/assets/images/svg.png" width={218} height={74} />
        <div className="fullLoading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </section>
  );
}
