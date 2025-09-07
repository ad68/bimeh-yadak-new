import React from "react";
import Image from "next/image";
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
    <>
      <section className="mx-auto w-[100%] max-w-full md:w-[80%] xl:w-[602px]">
        <header className="flex justify-between">
          <span>تعداد گواهینامه</span>
          <span>3 مورد</span>
        </header>
        <section className="flex flex-col gap-3 rounded-xl bg-[#F6F6FB] p-4">
          <section className="mx-auto flex w-full  max-w-full justify-between rounded-xl bg-white px-3 py-3 xl:py-5">
            <section>
              <Image
                src="/assets/images/table.svg"
                width={28}
                height={28}
                className="ml-4 inline"
                alt=""
              />
              <span>پایه یک</span>
            </section>
            <Image
              src="/assets/images/arrow-down.svg"
              width={24}
              height={24}
              className="inline"
              alt=""
            />
          </section>
          <section className="mx-auto flex w-full  max-w-full justify-between rounded-xl bg-white px-3 py-3 xl:py-5 ">
            <section>
              <Image
                src="/assets/images/icon.svg"
                width={28}
                height={28}
                className="ml-4 inline"
                alt=""
              />
              <span>پایه دو</span>
            </section>
            <Image
              src="/assets/images/arrow-down.svg"
              width={24}
              height={24}
              className="inline"
              alt=""
            />
          </section>
          <section className="mx-auto flex w-full  max-w-full justify-between rounded-xl bg-white px-3 py-3 xl:py-5">
            <section>
              <Image
                src="/assets/images/car.svg"
                width={28}
                height={28}
                className="ml-4 inline"
                alt=""
              />
              <span>پایه سوم</span>
            </section>
            <Image
              src="/assets/images/arrow-down.svg"
              width={24}
              height={24}
              className="inline"
              alt=""
            />
          </section>
          <section className="mx-auto flex w-full  max-w-full justify-between rounded-xl bg-white px-3 py-3 xl:py-5">
            <section>
              <Image
                src="/assets/images/motor.svg"
                width={28}
                height={28}
                className="ml-4 inline"
                alt=""
              />
              <span> موتورسیکلت</span>
            </section>
            <Image
              src="/assets/images/arrow-down.svg"
              width={24}
              height={24}
              className="inline"
              alt=""
            />
          </section>
        </section>
      </section>
    </>
  );
}
