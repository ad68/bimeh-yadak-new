import { RightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from 'next/link'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ src, width, height }) {
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
    <section className=" bg-gradient-to-[118deg] group flex h-full w-full  cursor-pointer flex-col-reverse items-center  justify-center gap-6 rounded-2xl bg-[#f6f6fb] bg-gradient-to-r py-10  pr-10  hover:from-[#0165E1] hover:to-[#041D47] hover:text-white md:h-[287px] md:w-[604px] md:flex-row  ">
      <section className="px-8 grid w-[321px] grid-cols-1 gap-6 text-[22px]">
        <span className=" font-bold text-[#191919] group-hover:text-white">
          وانت آریسان ۲
        </span>
        <p className="text-base group-hover:text-white">
          وانت آریسان به عنوان نسخه ارتقاء یافته و جایگزین باردو به بازار معرفی
          شد و طراحی زیباتر و ایمنی به مراتب بهتری ایجاد کرد.
        </p>
        <Link
          href="#"
          className=" bt-2 flex items-center justify-start gap-1 text-lg font-semibold text-blue group-hover:text-white"
        >
          <RightOutlined className=" group-hover:text-white" />
          <span className="mt-1 text-lg font-semibold group-hover:text-white">
            مشاهده
          </span>
        </Link>
      </section>
      <section>
        <Image src={src} width={width} height={height} alt={src} />
      </section>
    </section>
  );
}
