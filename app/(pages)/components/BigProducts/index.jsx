// import './styles/styles.css'
import Filters from "./components/Filters";
import Product from "./components/Product";
import car1 from "../../../../public/assets/images/productsBig/carb(3).png";
import car2 from "../../../../public/assets/images/productsBig/carb(4).png";
import car3 from "../../../../public/assets/images/productsBig/carb(5).png";
import car4 from "../../../../public/assets/images/productsBig/carb(1).png";
import car5 from "../../../../public/assets/images/productsBig/carb(2).png";
import car6 from "../../../../public/assets/images/productsBig/carb(6).png";

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
    <section className="container ">
      <Filters />
      <section className="mt-10 grid   grid-cols-1 gap-10 px-8 md:grid-cols-3">
        <Product newLabel src={car1} />
        <Product src={car2} />
        <Product newLabel src={car3} />
        <Product src={car4} />
        <Product src={car5} />
        <Product newLabel src={car6} />
      </section>
      <section className="mt-10 flex items-center justify-center">
        <button className="inline-flex h-12 w-[173px] items-center justify-center rounded-md bg-blue   text-lg   font-semibold text-white ">
          مشاهده بیشتر
        </button>
      </section>
    </section>
  );
}
