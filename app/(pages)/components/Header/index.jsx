"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";
import { LogoutModal } from "@/common";
import { useRouteListener } from "@/hooks";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const pathName = usePathname();
  const [routeStatus] = useRouteListener();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setOpen(false);
  }, [routeStatus]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="print:hidden">
      {pathName !== "/login" && pathName !== "/callback/payment" && pathName !== "/price-drop/print" && (
        <>
          <MobileMenu
            open={open}
            setOpen={setOpen}
            setLogOutModal={setLogOutModal}
          />
          <DesktopMenu
            open={open}
            setOpen={setOpen}
            setLogOutModal={setLogOutModal}
          />
          <LogoutModal
            open={logOutModal}
            onClose={() => setLogOutModal(false)}
            title="خروج"
          />
        </>
      )}
    </section>
  );
}
