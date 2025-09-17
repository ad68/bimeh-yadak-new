import Link from "next/link";
import { usePathname } from "next/navigation";


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title, link }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const pathname = usePathname();
    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return (

        <li>
            <section className="group relative cursor-pointer py-2">
                <Link
                    href={link}
                    className={`${pathname === link ? "text-primary" : ""} ${pathname === link && "border-b-2 border-primary text-primary transition-all ease-in-out"} pb-7 align-middle text-black  transition-colors hover:border-b-2 hover:border-primary  hover:text-primary active:border-primary dark:text-darkText-200`}
                >
                    {title}
                </Link>
            </section>
        </li>

    )

}
