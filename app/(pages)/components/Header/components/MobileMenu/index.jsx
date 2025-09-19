import React, { useEffect, useState } from "react";

import MenuLink from './components/MenuLink'
import ProfileBtn from "./components/ProfileBtn";
import { useAuthStore } from "@/store/auth/login";
import { isAdmin, isEmptyObject, isUser } from "@/helper";
import { IconLogout } from "@/common/icons";
import CollapseItem from './components/CollapseItem'
import { ADMIN_DASHBOARD_MENU } from "@/constants/menus";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index({ open, setLogOutModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const authInfo = useAuthStore((state) => state.authInfo);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [authStatus, setAuthStatus] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setAuthStatus(getAuthStatus());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authInfo]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getAuthStatus = () => {
    if (!isEmptyObject(authInfo)) {
      if (authInfo?.mobileNumber && !authInfo?.firstName) {
        return "userInfoNotComplete";
      } else if (authInfo?.firstName) {
        return "userInfoComplete";
      }
    } else {
      return "notLoggedIn";
    }
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section
      className={`mobileMenu fixed flex overflow-y-scroll flex-col  ${open ? "right-0" : "right-[-100%]"} top-[63px]  z-[1001] h-full w-full bg-white  transition-all duration-500 ease-in-out`}
    >
      <section className="flex flex-col pb-5 ">
        {(authStatus === "userInfoNotComplete" || authStatus === "userInfoComplete") && <section className="px-[15px]">
          {isUser() && <CollapseItem
            title="پنل کاربری"
            menuList={[
              { title: "معرفی شدگان", link: "/dashboard/featured" },
              { title: "لیست  بیمه نامه ها", link: "/dashboard/insurance-policy" },

              /*  { title: "استعلام خلافی", link: "/dashboard/Inquiry/violation" },
               {
                 title: "استعلام گواهینامه",
                 link: "/dashboard/Inquiry/certificate",
               },
               { title: "پلاک های من", link: "/dashboard/Inquiry/plates" },
               {
                 title: "سوابق استعلام",
                 link: "/dashboard/Inquiry/inquiryrecords",
               },
               {
                 title: "استعلام نمره منفی",
                 link: "/dashboard/Inquiry/negative-inquery-cerficate",
               },
               {
                 title: "استعلام مدارک خودرو",
                 link: "/dashboard/Inquiry/vehicledocuments",
               }, */
            ]}
          />}
          {isAdmin() && <CollapseItem
            title="پنل ادمین"
            menuList={ADMIN_DASHBOARD_MENU}
          />}
        </section>}
        <nav className="mt-1 pr-2">
          <MenuLink title="خانه" link="/" />
          <MenuLink title="خرید بیمه نامه" link="/relief-signup" />
          <MenuLink title="درخواست امداد خودرو" link="/request-relief" />
          <MenuLink title="مشاور و کارشناس فروش" link="/marketing" />
          <MenuLink title="ارزش روز خودرو" link="/price-calculate" />
          <MenuLink title="محاسبه افت بیمه خودرو" link="/price-drop-insurance" />
          <MenuLink title="ثبت نام امدادگران" link="/road-assistance-signup" />
          {/*           <MenuLink title="درباره ما" link="/about" /> */}
          <MenuLink title="تماس با ما" link="/contact-us" />
        </nav>
        {authStatus !== "notLoggedIn" && <button
          onClick={() => setLogOutModal(true)}
          className={`px-[15px] py-2 w-[100px] text-right flex justify-center items-center`}
          href="/about"
        >
          <IconLogout className="m-auto stroke-[gray]" width={30} height={30} />
          خروج
        </button>}
        <ProfileBtn
          authInfo={authInfo}
          authStatus={authStatus}
          setLogOutModal={setLogOutModal}
          mode="userInfoNotComplete"
        />
      </section>
    </section>
  );
}
