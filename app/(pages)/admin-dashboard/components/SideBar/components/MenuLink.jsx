'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ link, title }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const pathname = usePathname()
    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <Link
        href={link}
        className={`${pathname === link ? "text-[#c3b722]" : ""} flex text-sm w-full items-center pr-[14.5px] dark:text-white`}
    >
        <span>{title}</span>
    </Link>;
}
