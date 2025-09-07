"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

import Jeep from "../../../../../public/assets/icons/brands/jeep.png";
import Toyota from "../../../../../public/assets/icons/brands/tyota.png";
// import Tata from "../../../../../public/assets/icons/brands/tata.png";
import Hyundai from "../../../../../public/assets/icons/brands/hyundai.png";
import audi from "../../../../../public/assets/icons/brands/audi.png";
import benz from "../../../../../public/assets/icons/brands/benz.png";
import bmw from "../../../../../public/assets/icons/brands/bmw.png";
import honda from "../../../../../public/assets/icons/brands/honda.png";
import kia from "../../../../../public/assets/icons/brands/kia.png";
import lambo from "../../../../../public/assets/icons/brands/lambo.png";
import landrover from "../../../../../public/assets/icons/brands/landrover.png";
import mg from "../../../../../public/assets/icons/brands/mg.png";
import skooda from "../../../../../public/assets/icons/brands/skooda.png";

const brands = () => {

    return (
        <div>
            <div>
                <div className="container">
                    <Swiper

                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 6 },
                        }}
                        // cssMode={true}
                        slidesPerView={3}
                        grid={{ rows: 2, fill: "row" }}
                        spaceBetween={16}
                        pagination={{ clickable: true }}
                        modules={[Grid, Navigation]}
                        className="brandsSwiper"
                    >
                        {/* <Swiper className='flex justify-center items-center'> */}
                        {/* ************************************************************ */}
                        <SwiperSlide className="haver:text-white mb-3  flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={Jeep} alt="" />
                            <span className="text-xl">Jeep</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={Toyota} alt="" />
                            <span>Toyota</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={lambo} alt="" />
                            <span>Lamborghini</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={Hyundai} alt="" />
                            <span>Hyundai</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={audi} alt="" />
                            <span>Audi</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={benz} alt="" />
                            <span>Mercedes Benz</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={bmw} alt="" />
                            <span>BMW</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={honda} alt="" />
                            <span>Honda</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3 active:text-  w-[314px]bh-auto lue ml-5  flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] active:font-semibold">
                            <Image src={kia} alt="" />
                            <span>Kia</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={lambo} alt="" />
                            <span>Lamborghini</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3 active:text-  w-[314px]bh-auto lue ml-5  flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] active:font-semibold">
                            <Image src={benz} alt="" />
                            <span>Mercedes Benz</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={landrover} alt="" />
                            <span>Landrover</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3 active:text-  w-[314px]bh-auto lue ml-5  flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] active:font-semibold">
                            <Image src={mg} alt="" />
                            <span>MG</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={skooda} alt="" />
                            <span>Skooda</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3 active:text-  w-[314px]bh-auto lue ml-5  flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] active:font-semibold">
                            <Image src={bmw} alt="" />
                            <span>BMW</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={honda} alt="" />
                            <span>Honda</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3 active:text-  w-[314px]bh-auto lue ml-5  flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] active:font-semibold">
                            <Image src={kia} alt="" />
                            <span>Kia</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={lambo} alt="" />
                            <span>Lamborghini</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={Jeep} alt="" />
                            <span>Jeep</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        <SwiperSlide className="mb-3   flex w-[100px] h-[100px] md:h-[165px] md:w-[165px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-solid border-gray-100 text-center shadow-[0_3px_20px_-8_#0000004d] hover:bg-blue active:text-white active:font-semibold">
                            <Image src={landrover} alt="" />
                            <span>Landrover</span>
                        </SwiperSlide>
                        {/* ************************************************************ */}
                        {/* </Swiper> */}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default brands;
