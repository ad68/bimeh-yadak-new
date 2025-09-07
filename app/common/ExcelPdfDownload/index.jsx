import PDF from '../../../public/icons/pdf.svg'
import EXCEL from '../../../public/icons/excel.svg'
import Image from 'next/image';
import './style.css'
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ excelAction, pdfAction, excelLoading, pdfLoading }) {
    // ─── Global Variable ────────────────────────────────────────────────────────────

    // ─── States ─────────────────────────────────────────────────────────────────────

    // ─── Functions ──────────────────────────────────────────────────────────────────

    // ─── Life Cycle ─────────────────────────────────────────────────────────────────

    //
    // ──────────────────────────────────────────────────── I ──────────
    //   :::::: R E N D E R : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────
    //
    return <section className="flex gap-1 justify-end mt-4">
        <button disabled={pdfLoading} onClick={pdfAction} className="bg-[#fff3f4] flex gap-2 w-[120px] items-center text-red text-sm  rounded-md px-4 py-2">
            {pdfLoading ? <section className='flex justify-center text-center w-full'><span className='tablePdfLoader'></span></section> : <>
                <span>دریافت</span>
                <Image className='w-[20px]' src={PDF} alt='' />
            </>}
        </button>
        <button disabled={excelLoading} onClick={excelAction} className="bg-[#e8fff0] flex gap-2 items-center w-[120px] text-[green] text-sm  rounded-md px-4 py-2">
            {excelLoading ? <section className='flex justify-center text-center w-full'><span className='tableExcelLoader'></span></section> : <>
                <span>دریافت</span>
                <Image className='w-[20px]' src={EXCEL} alt='' />
            </>}


        </button>
    </section>;
}
