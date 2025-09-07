"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SliderItem from './components/SliderItem';
import SearchProducts from './../../components/SearchProducts'
import cat1 from '../../../../public/assets/images/searchCategory/car(1).png';
import cat2 from '../../../../public/assets/images/searchCategory/car(2).png';
import cat3 from '../../../../public/assets/images/searchCategory/car(3).png';
import cat4 from '../../../../public/assets/images/searchCategory/car(4).png';
import cat5 from '../../../../public/assets/images/searchCategory/car(5).png';
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
    <section className=" w-full md:w-[1440px]   mt-20 md:mt-[180px]">
      <section className="mx-4 py-10   md:mx-0 w-11/12 md:w-full md:pt-[56px] md:pb-16 bg-black rounded-2xl">
        <span className="inline-flex items-center justify-center font-extrabold w-full text-lg md:text-[28px]    text-white">جستجوی قیمت ماشین بر اساس ویژگی</span>
        <div className="flex items-center justify-center mt-[26px]  ">
          <hr className=" w-[946px] opacity-50 border-[#3E4151]" />
        </div>
        {/* *************************************************** */}
        <section className="w-full flex justify-center items-center text-white gap-[21px] md:gap-[27px] mt-6 md:mt-10">
          <button className="inline-flex text-sm md:text-lg active:bg-[#8B929A36] border-[1px] border-[#3E4151] h-[33px] pt-[2px] bg-[#fffbff1a] w-[75px] md:w-[83px] rounded-full  justify-center items-center ">نوع بدنه</button>
          <button className="inline-flex text-sm md:text-lg border-[1px] border-[#3E4151] h-[33px] pt-[2px] bg-[#fffbff1a] w-[89px] md:w-[97px] rounded-full  justify-center items-center ">نوع سوخت</button>
          <button className="inline-flex text-sm md:text-lg border-[1px] border-[#3E4151] h-[33px] pt-[2px] bg-[#fffbff1a] w-[103px] md:w-[111px] rounded-full  justify-center items-center ">قیمت (تومان)</button>
        </section>
        {/* *************************************************** */}
        <section className="h-[38px] md:h-16 mx-auto mt-[37px] md:mt-[59px] px-4 md:px-0 mb-8 md:mb-16 w-full md:w-[800px] ">
          <Swiper
            // navigation={{
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // }}
            modules={[Navigation]}
            navigation={true}
            breakpoints={{
              780: { slidesPerView: 5 },
            }}
            spaceBetween={32}
            slidesPerView={3}
            className="CarsSwiper"
          >

            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat1} title="کوپه" /></SwiperSlide>
            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat2} title="اس یو وی" /></SwiperSlide>
            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat3} title="ام یو وی" /></SwiperSlide>
            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat4} title="سدان" /></SwiperSlide>
            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat5} title="هاچ بک" /></SwiperSlide>
            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat1} title="کوپه" /></SwiperSlide>
            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat2} title="اس یو وی" /></SwiperSlide>
            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat3} title="ام یو وی" /></SwiperSlide>
            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat4} title="سدان" /></SwiperSlide>
            <SwiperSlide ><SliderItem layout="fill" objectFit="cover" src={cat5} title="هاچ بک" /></SwiperSlide>
          </Swiper>
        </section>

      </section>
      <section >
        <SearchProducts />
      </section>
    </section>
  );
}
