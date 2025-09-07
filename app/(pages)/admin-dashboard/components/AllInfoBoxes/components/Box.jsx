

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

import { numberWithCommas } from "@/helper";

export default function Index({ title, count }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <section className="w-full flex flex-col relative gap-5 justify-center overflow-hidden items-center h-[200px]  shadow-md rounded-xl border-2 border-solid border-primary">
        <span className="w-[200px] h-[200px] bg-primary opacity-5 absolute right-[-40px] top-[-100px] rotate-45"></span>
        <span className="title text-[20px]">{title}</span>
        <span className="text-[40px] font-bold">{numberWithCommas(count)}</span>
    </section>;
}
