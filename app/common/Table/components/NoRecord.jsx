import Image from "next/image";

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
    <section className="flex flex-col mt-8 justify-center items-center">
      <Image alt="" src="/icons/no-data.png" width={100} height={100} />
      <span className="text-[16px] text-[#6F6C90] mt-4 font-bold">موردی یافت نشد</span>
    </section>
  );
}
