'use client'
import Image from 'next/image'


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
const Selector = ({ img, imgWidth, imgHeight, title, active, index, setActiveSide }) => {
    return (
        <section onClick={() => setActiveSide(index)} className={`w-[118px] h-[118px] cursor-pointer border-[2px] ${active === index ? `border-blue` : `border-gray`}  rounded-[10px]`}>
            <span className={`block mt-[-15px] w-[65px] text-center m-auto bg-[#f6f6fb] ${active === index ? `text-blue` : `text-black`}`}>{title}</span>
            <section className='mt-[20px] w-full h-[59px] flex justify-center items-center'>
                <Image src={img} alt='' className='' width={imgWidth} height={imgHeight} />
            </section>
        </section>
    )
}
export default function Index({ activeSide, setActiveSide }) {
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
            <Selector title="جلو" img="/assets/svg/carfront.svg" active={activeSide} setActiveSide={setActiveSide} index={1} imgWidth={88} imgHeight={59} />
            <Selector title="عقب" img="/assets/svg/carback.svg" active={activeSide} setActiveSide={setActiveSide} index={2} imgWidth={88} imgHeight={59} />
            <Selector title="راست" img="/assets/svg/carright.svg" active={activeSide} setActiveSide={setActiveSide} index={3} imgWidth={88} imgHeight={59} />
            <Selector title="چپ" img="/assets/svg/carleft.svg" active={activeSide} setActiveSide={setActiveSide} index={4} imgWidth={88} imgHeight={59} />
        </>
    )
}
