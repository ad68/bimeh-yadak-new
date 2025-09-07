import React, { useState, useEffect, useRef } from "react";

import Link from "next/link";
import {

  IconLogin,

} from "@/common/icons";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

// eslint-disable-next-line react/display-name
function ProfileBtn({ authInfo, authStatus }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────


  // ─── States ─────────────────────────────────────────────────────────────────────


  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────





  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>

      <section className="relative mt-10">
        {authStatus === "notLoggedIn" && (
          <Link
            className="py-[8px] px-[20px] w-[90%] m-auto justify-center flex  border-[1px] bg-primary rounded-md gap-2"
            href="/login"
          >
            <span className="">
              <IconLogin color="#505050" strokeWidth="2" />
            </span>
            <span className="mb-[2px] align-middle text-[#505050] md:text-[15px]">
              ورود | ثبت نام
            </span>

          </Link>
        )}
        {authStatus !== "notLoggedIn" && (
          <section
            className="py-[8px] px-[20px] w-[90%] m-auto justify-center flex  border-[1px] bg-primary text-[#505050]  rounded-md "
          >
            <span className="mr-2">
              {authStatus === "userInfoNotComplete" && authInfo?.mobileNumber}
              {authStatus === "userInfoComplete" &&
                authInfo?.firstName + " "}
              عزیز خوش آمدید
            </span>
          </section>
        )}



      </section>
    </>
  );
}

export default ProfileBtn;
