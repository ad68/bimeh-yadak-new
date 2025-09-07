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
      <section className="w-[100%] max-w-full xl:w-[602px]">
        <header className="flex justify-between">
          <span>تعداد گواهینامه</span>
          <span>3 مورد</span>
        </header>
        <section className="flex flex-col gap-3 rounded-xl bg-[#F6F6FB] p-4">
          <section className="mx-auto flex w-full  max-w-full justify-between rounded-xl bg-white px-3 py-3 xl:py-5">
            <section>
              <Image
                src="/assets/images/post.png"
                width={28}
                height={28}
                className="ml-4 inline"
                alt=""
              />
              <span className="text-base font-semibold xl:text-lg">
                وضعیت مرسوله{" "}
              </span>
            </section>
            <Image
              src="/assets/images/arrow-down.png"
              width={24}
              height={24}
              className="inline"
              alt=""
            />
          </section>
          <section className="mx-auto flex w-full  max-w-full justify-between rounded-xl bg-white px-3 py-3 xl:py-5 ">
            <section>
              <Image
                src="/assets/images/user.png"
                width={28}
                alt=""
                height={28}
                className="ml-4 inline"
              />
              <span className="text-base font-semibold xl:text-lg">
                مشخصات گیرنده{" "}
              </span>
            </section>
            <Image
              src="/assets/images/arrow-down.png"
              width={24}
              alt=""
              height={24}
              className="inline"
            />
          </section>
          <section className="mx-auto flex w-full  max-w-full justify-between rounded-xl bg-white px-3 py-3 xl:py-5">
            <section>
              <Image
                src="/assets/images/user2.png"
                width={28}
                alt=""
                height={28}
                className="ml-4 inline"
              />
              <span className="text-base font-semibold xl:text-lg">
                مشخصات فرستنده{" "}
              </span>
            </section>
            <Image
              src="/assets/images/arrow-down.png"
              width={24}
              alt=""
              height={24}
              className="inline"
            />
          </section>
          <section className="mx-auto flex w-full  max-w-full justify-between rounded-xl bg-white px-3 py-3 xl:py-5">
            <section>
              <Image
                src="/assets/images/post2.png"
                width={28}
                alt=""
                height={28}
                className="ml-4 inline"
              />
              <span className="text-base font-semibold xl:text-lg">
                {" "}
                جزئیات رهگیری مرسوله
              </span>
            </section>
            <Image
              src="/assets/images/arrow-down.png"
              width={24}
              alt=""
              height={24}
              className="inline"
            />
          </section>
        </section>
      </section>
    </>
  );
}
