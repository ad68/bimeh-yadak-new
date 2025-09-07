"use client";
import React, { useState, useEffect } from "react";
import { scrollToTop } from "@/helper";
import Image from "next/image";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [scrollYPosition, setScrollYPosition] = useState(0);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /*   useEffect(() => {
    console.log(scrollYPosition);
  }, [scrollYPosition]); */
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <button
      onClick={() => scrollToTop()}
      className={`scrollYPosition fixed bottom-12 right-12 z-50 hidden cursor-pointer transition-all  duration-500 md:block ${scrollYPosition > 50 ? "opacity-1" : "opacity-0"}`}
    >
      <Image
        src="/assets/images/scroll-top.png"
        alt=""
        width={56}
        height={56}
      />
    </button>
  );
}
