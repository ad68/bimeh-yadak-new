import Image from "next/image";
import React, { useState, useContext, useEffect, useRef } from "react";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ sideBarShow, onClose, children, height }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const overlay = useRef();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [showChildren, setShowChildren] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (sideBarShow) {
      setTimeout(() => {
        overlay.current.style.opacity = 1;
      }, 50);
      setShowChildren(false);
    }
  }, [sideBarShow]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (showChildren === false) {
      setShowChildren(true);
    }
  }, [showChildren]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      {sideBarShow && (
        <section
          ref={overlay}
          onClick={onClose}
          className={` glass fixed left-0 top-0 z-[1000] h-full w-full bg-[#64646440] opacity-0 transition-all duration-700`}
        ></section>
      )}
      <section
        className={`fixed block ${sideBarShow ? "bottom-[0px]" : "bottom-[-100%]"}   md:block ${sideBarShow ? "md:left-0" : "md:left-[-354px]"} left-0 z-[1000] flex  w-full flex-col rounded-t-[20px] bg-white pt-6 transition-all duration-700 ease-in-out md:top-0 md:h-full md:w-[354px]  md:rounded-r-[20px]  xl:rounded-tl-none`}
      >
        <button onClick={onClose}>
          <Image
            src="/assets/icons/close-circle.svg"
            width={32}
            height={32}
            className="mb-8 mr-[24.34px]"
            alt=""
          />
        </button>

        {showChildren && children}
      </section>
    </>
  );
}
