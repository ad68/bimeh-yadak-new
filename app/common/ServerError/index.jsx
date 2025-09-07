import Image from "next/image";
import NoInternet from "../../../public/assets/images/disconnected.png";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="mt-[50px] flex h-[650px] flex-col items-center justify-center">
      <Image className="w-[300px]" src={NoInternet} alt="" />
      <span className="mt-4 text-[20px] font-bold text-red">
        خطا در برقراری ارتباط با سرور
      </span>
    </section>
  );
}
