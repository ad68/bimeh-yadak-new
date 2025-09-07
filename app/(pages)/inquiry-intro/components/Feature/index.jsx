import Image from "next/image";
import Link from "next/link";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
function ListItem({ src, title, text }) {
  return (
    <section className="flex h-auto w-full  flex-col items-center  rounded px-6 text-[#3E4151] shadow-[0px_5px_22px_0px_#0000001A] xl:h-[288px] xl:w-[378px]">
      <Image
        src="/assets/images/arrow-circle-left.png"
        alt=""
        width={24}
        height={24}
        className="mt-6 self-end"
      />

      <Image
        src={src}
        width={90}
        height={90}
        className="mb-6 h-[64px] w-[64px] xl:h-[90px] xl:w-[90px]"
        alt=""
      />
      <h2 className="mb-[21px] text-lg font-semibold xl:text-xl">{title}</h2>
      <p className="mb-8 text-sm leading-[24.18px] xl:text-base xl:leading-[27.64px]">
        {text}
      </p>
    </section>
  );
}
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
      <section className=" container mx-auto flex w-[90%] flex-col text-[18px] text-[#3E4151] md:w-[80%]">
        <h2 className="mb-8  mt-0 font-semibold leading-[27.9px] md:text-[18px] md:font-semibold xl:mt-8 xl:text-[28px]">
          لیست استعلام‌ها
        </h2>
        <section className="mb-6 flex flex-col justify-center gap-6 xl:mb-8 xl:flex-row xl:gap-8">
          <Link href="/dashboard/Inquiry/violation">
            <ListItem
              src="/assets/images/khalfi-L.png"
              title="خلافی خودرو"
              text="استعلام جریمه‌ها و پرداخت آن‌ها در کوتاه‌ترین زمان، تنها با استفاده از پلاک وسیله‌ی نقلیه"
            />
          </Link>
          <Link href="/dashboard/Inquiry/negative-inquery-cerficate">
            <ListItem
              src="/assets/images/nomre manfi-L.png"
              title="نمره منفی گواهینامه"
              text="استعلام نمره منفی گواهینامه و بررسی تخلفات ، تنها با استفاده از شماره گواهینامه و کد ملی"
            />
          </Link>
          <Link href="/dashboard/Inquiry/inquiryrecords">
            <ListItem
              src="/assets/images/maliat-L.png"
              title="سوابق استعلام"
              text="استعلام مالیات نقل‌ و انتقال و پرداخت آن با استفاده از شماره پلاک و کد ملی مالک خودرو"
            />
          </Link>
        </section>
        <section className="flex flex-col justify-center gap-6 xl:flex-row xl:gap-8">
          <Link href="/dashboard/Inquiry/vehicledocuments">
            <ListItem
              src="/assets/images/madarek-L.png"
              title="مدارک خودرو"
              text="پیگیری وضعیت صدور و ارسال مدارک خودرو با استفاده از شماره پلاک، کد ملی و تلفن همراه "
            />
          </Link>
          <Link href="/dashboard/Inquiry/certificate">
            <ListItem
              src="/assets/images/vaziat-L.png"
              title="وضعیت گواهینامه"
              text="پیگیری وضعیت گواهینامه و زمان باقی‌مانده از اعتبار آن با استفاده از کدملی و تلفن همراه "
            />
          </Link>
        </section>
      </section>
    </>
  );
}
