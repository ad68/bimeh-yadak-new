"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const router = useRouter();
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const goToInquiry = () => {
    if (localStorage.token) {
      router.push("/dashboard", { scroll: false });
    } else {
      router.push("/login", { scroll: false });
    }
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section>
      <Image
        src="/assets/images/shape.png"
        width={987}
        height={903}
        className="absolute right-[-60px] top-[63px] z-[-1] lg:top-[-26px] lg:h-[738px] lg:w-[778px] 2xl:top-[-98px] 2xl:h-[903px] 2xl:w-[987px]"
        alt=""
      />
      <section className="container mx-auto mb-8 mt-[73px] flex flex-wrap justify-between">
        <section className="order-2 mx-auto flex w-full flex-col p-8 text-[#3E4151] md:px-[90px] lg:w-[542px] lg:p-0">
          <section className="hidden  gap-[0.3rem] pt-8 text-xs xl:flex">
            <a href="#">بیمه یدک</a>
            <span>/</span>
            <a href="#">استعلام</a>
            <span>/</span>
            <a href="#" className="text-[#0165E1]">
              قیمت روز آریسان 2
            </a>
          </section>
          <h2 className="mb-6 mt-5 text-xs font-normal xl:mb-[5.75rem] xl:text-base">
            آخرین به روز رسانی: دیروز
          </h2>
          <h2 className="mb-6 text-[28px] font-bold xl:text-[40px]">استعلام</h2>
          <p className="text-justify text-sm leading-[27.64px] xl:text-base">
            ما در این سامانه همواره بر این تلاشیم تا راهکارهای ساده و جدید برای
            بهبود فرآیند استعلام‌گیری را ارائه دهیم.
            <br />
            کاربران می‌توانند در کوتاه ترین زمان ممکن اطلاعات مورد نیاز درباره‌ی
            وسیله نقلیه خود را کسب کنند و در صورت وجود خلافی یا مالیات نسبت به
            پرداخت آن‌ها اقدام نمایند.
          </p>
          <button
            onClick={goToInquiry}
            className="mx-auto mt-6 w-[315px] self-end rounded-lg bg-[#0165E1] py-[10px] text-center text-lg text-white lg:mx-0 lg:mt-10 lg:w-[223px] xl:mb-[173px]"
          >
            استعلام گیری
          </button>
        </section>
        <Image
          width={590}
          height={466}
          src="/assets/images/inquiryIntro.png"
          className="order-1 mx-auto mt-[20px] h-auto w-[90%] lg:order-2 lg:h-[466px] lg:w-[590px]"
          alt=""
        />
      </section>
    </section>
  );
}
