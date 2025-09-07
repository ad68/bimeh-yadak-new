"use client"
import { useMemo } from "react";
import ContactUsForm from "../ContactUsForm";
import Info from "../Info";
import dynamic from "next/dynamic";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
    // ─── Global Variable ────────────────────────────────────────────────────────────
    const Map = useMemo(
        () =>
            dynamic(() => import("@/(pages)/contact-us/components/Map"), {
                loading: () => <p>Map is loading</p>,
                ssr: false,
            }),
        []
    );
    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <>
        <section className="relative mt-[62px] h-[800px] w-full bg-[url('/assets/images/ContactUs.jpg')] bg-cover xl:mt-[80px] xl:h-[620px]">
            <section className="h-full w-full  bg-gradient-to-br from-black to-primary opacity-95"></section>
            <section className="absolute left-[50%] top-[5%] z-[900]  w-full translate-x-[-50%] xl:top-[15%]">
                <section className="mx-auto flex w-[80%] flex-col justify-center justify-items-center gap-4 text-white xl:w-[400px]">
                    <h5 className="text-center text-lg"> ارتباط با بیمه یدک </h5>
                    <h2 className="text-center text-3xl font-bold leading-9">با ما در ارتباط باشید:</h2>
                    <span className="text-center">اگر سوال یا نظری دارید لطفا با ما در میان بگذارید:</span>
                </section>
                <ContactUsForm />
            </section>
        </section>
        <section className="flex h-auto flex-col xl:h-[500px] xl:flex-row">
            <section className="mx-auto my-8 flex h-auto w-[90%] items-center xl:w-full  xl:pl-[20px] xl:pr-[170px] xl:pt-[130px]">
                <Info />
            </section>
            <Map />
        </section>
    </>;
}
