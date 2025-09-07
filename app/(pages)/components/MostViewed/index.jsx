
import Product from './components/Product'
import car1 from '../../../../public/assets/images/mostView/mv(4).png'
import car2 from '../../../../public/assets/images/mostView/mv(3).png'
import car3 from '../../../../public/assets/images/mostView/mv(2).png'
import car4 from '../../../../public/assets/images/mostView/mv(1).png'
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
    <section className="container  px-8 mt-28 ">
      <section className="grid grid-cols-1 md:grid-cols-2  ">
        <section className="font-bold text-[22px]">پربازدیدترین ماشین های لوکس</section>
        <section className="text-left relative"></section>
      </section>
      <section className="flex flex-col justify-center items-center gap-6 md:gap-8 mt-10 ">
        <section className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 '>
          <Product src={car1} width={355} height={287} />
          <Product src={car2} width={354} height={182} />
        </section>
        <section className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 '>
          <Product src={car3} width={354} height={282} />
          <Product src={car4} width={376} height={187} />
        </section>
      </section>
    </section>
  );
}
