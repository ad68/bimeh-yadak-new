//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

import Image from "next/image";

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
    return <section className="order-first xl:order-last p-10 rounded-lg border">
        <Image src="/assets/images/nego.svg" width={460} height={300} alt="" className="mx-auto h-[152px] w-full xl:h-[250px]" />
        <section className="mt-10">
            <span className="text-primary font-bold block text-center text-[20px]">
                همکار گرامی!
            </span>
            <p className="text-justify font-light mt-5">
                پس از ثبت نام یک لینک برای شما نمایش داده می شود و همچنین از طریق پیامک برای شما ارسال می شود که از طریق آن می توانید اقدام به فروش بیمه نامه نمایید.
            </p>
        </section>
    </section>;
}
