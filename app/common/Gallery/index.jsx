"use client";
import { useState } from "react";
import LightBox from "./components/LightBox";
import "./style/style.css";
import Image from "next/image";
import More from "./icons/more.svg";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ slides }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightBox, setLightBox] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const closeLightBox = () => {
    setLightBox(false);
    setActiveSlide(0);
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section dir="rtl" className="w-full">
      <section className=" relative w-full rounded-lg p-4">
        {lightBox && (
          <LightBox
            onClose={closeLightBox}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            slides={slides}
          />
        )}
        <Image
          src={slides[activeSlide].imageUrl}
          width={800}
          height={800}
          onClick={() => setLightBox(true)}
          className="m-auto w-full cursor-pointer  rounded-md xl:h-[343px]"
          alt=""
        />
      </section>
      <section className="mt-1  flex w-full  items-center justify-between px-4">
        {slides.slice(0, 5).map((item, index) => (
          <section className="relative overflow-hidden rounded-md" key={index}>
            {index === 4 && (
              <section
                onClick={() => {
                  setActiveSlide(0);
                  setLightBox(true);
                }}
                className="absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center bg-[#00000082]"
              >
                <Image src={More} className="w-[40px]" alt="" />
              </section>
            )}
            <Image
              onClick={() => setActiveSlide(index)}
              className={`cursor-pointer rounded-md border p-1 ${index === activeSlide ? "border-red" : ""}`}
              src={item.imageUrl}
              width={90}
              height={90}
              alt=""
            />
          </section>
        ))}
      </section>
    </section>
  );
}
