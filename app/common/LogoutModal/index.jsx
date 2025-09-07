"use client";
import React from "react";
import Modal from "../Modal";
import { IconLogout } from "../icons";
import { useAuthStore } from "@/store/auth/login";


//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ open, onClose, title }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const clearAuthInfo = useAuthStore((state) => state.clearAuthInfo);
  // ─── States ─────────────────────────────────────────────────────────────────────
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const logOut = () => {
    clearAuthInfo();
    localStorage.clear();
    location.href = "/login";
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <Modal open={open} title={title} onClose={onClose}>
      <IconLogout className="m-auto mt-3 stroke-red" width={80} height={80} />
      <span className="mt-8 block text-center">
        آیا مایلید از حساب کاربری خارج شوید؟
      </span>
      <section className="flex items-center justify-between">
        <button
          onClick={onClose}
          className={`m-auto mt-[32px] block h-[48px] w-[155px] max-w-[48%]  rounded-[8px] border-2 border-[#A6A9BD] text-[#A6A9BD]`}
        >
          بازگشت
        </button>
        <button
          onClick={logOut}
          className={`relative m-auto mt-[32px] block h-[48px] w-[155px] max-w-[48%] rounded-[8px] bg-[#E14856] text-white`}
        >
          خروج
        </button>
      </section>
    </Modal>
  );
}
