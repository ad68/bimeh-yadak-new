"use client";
import React, { useEffect, useState } from "react";

// import { useParams } from "react-router-dom";

import Link from "next/link";
import { api } from "@/api";
// import { useGlobalContext } from "../../../context/GlobalContext";
import Button from "@/common/Button";
import { useAxiosWithToken } from "@/hooks";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ params }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  // let { id } = useParams();
  // const { showLoading, hideLoading } = useGlobalContext();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [chatList, setChatList] = useState([]);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getChatList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getChatList = () => {
    setLoading(true);
    useAxiosWithToken
      .get(
        api.ticket.searchMessages +
        `?ticketId=${params.ticketId}&pageSize=20&pageNo=0`,

      )
      .then((res) => {
        setLoading(false);
        setChatList(res.data.elements);
      })
      .catch((err) => { });
  };
  const addMessage = () => {

    setLoading(true);
    let params = {
      message: message,
      ticketId: id,
    };
    useAxiosWithToken
      .post(api.ticket.addMessage, params)
      .then((res) => {
        setLoading(false);
        getChatList();
      })
      .catch((res) => {
        setLoading(false);
      });
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="box-shadow-[0px_4px_9px_0px_#0000000D] h-auto w-[1000px] rounded-[18px] border-[0.81px] border-solid border-[#FFFFFF] bg-[#FFFFFF]">
      <section className="mb-[58px] flex items-center justify-between  px-[34px] pt-8">
        <span className="text-lg font-bold text-[#3E4151]">
          ارسال تیکت جدید
        </span>
        <Link
          href="/dashboard/ticket/tickets"
          className="flex items-center gap-2 text-[12px] text-blue"
        >
          بازگشت
          <section className="px-[10.5px] py-2">
            {/* <img src={imagesFileUrl + "dashboard/Vector.png"} className="w-[5px] h-[10px]" alt="" /> */}
          </section>
        </Link>
      </section>
      <section className="ml-[47px] mr-[34px] h-auto w-[933px]">
        <section className="mb-[43px] h-[603px] w-full rounded-[18px] border border-solid border-[#E6E8E9] bg-[#F7F9FE]">
          <section className="mx-[34px] mt-[50px]  flex flex-col ">
            <section className="h-[370px] overflow-auto">
              {chatList.map((item, index) => (
                <>
                  {item.role === "USER" && (
                    <>
                      <section className="flex gap-4">
                        {/* <img src={imagesFileUrl + "dashboard/Avatar.png"} className="w-[50px] h-[50px]" alt="" /> */}
                        <section className="my-[10px] ml-[94px] w-full rounded-[10px_0px_10px_10px] bg-white pb-[37px] pt-[19px] shadow-[0px_2px_6px_0px_#0000001F]">
                          <p className="mx-[37.06px]  text-sm leading-[21.7px]">
                            {item?.message}
                          </p>
                        </section>
                      </section>
                      <span className="mb-[14px] mr-[66px] text-xs text-[#A6A9BD]">
                        دیروز ، ۲۰:۰۰
                      </span>
                    </>
                  )}
                  {item.role === "ADMIN" && (
                    <>
                      <section className="flex gap-4">
                        <section className="mb-[10px] mr-[94px]  w-full rounded-[0px_10px_10px_10px] bg-[#94DFF4] pb-[37px] pt-[19px] shadow-[0px_2px_6px_0px_#9D9FA02E]">
                          <p className="mx-[37.06px] text-sm leading-[21.7px]">
                            {item.message}
                          </p>
                        </section>
                        {/* <img src={imagesFileUrl + "dashboard/Avatar2.png"} className="w-[50px] h-[50px]" alt="" /> */}
                      </section>
                      <span className="mb-[40px] ml-[66px] self-end text-xs text-[#3E4151]">
                        <span className="ml-2 text-xs text-[#A6A9BD]">
                          دیروز ، ۲۰:۰۰
                        </span>
                        پشتیبان شماره۲
                      </span>
                    </>
                  )}
                </>
              ))}
            </section>

            {/*  <section className=" mb-5 border-b border-solid pb-5 border-[#E6E8E9]  flex items-center">
              <span className="leading-[21.7px] ml-">فایل‌های ضمیمه:</span>
              <img
                src={imagesFileUrl + 'svg/Frame pdf.svg'}
                className="w-[24px] h-[32px] mr-[16px]"
                alt=''
              />
              <span className="text-[#3E4151] mr-[6px] text-xs">
                File_2.pdf
              </span>
              <button className="mr-[9px]">
                <img
                  src={imagesFileUrl + 'svg/download 1.svg'}
                  className="w-[13px] h-[13px] "
                  alt=''
                />
              </button>
              <img
                src={imagesFileUrl + 'svg/Frame jpg.svg'}
                className="w-[24px] h-[32px] mr-[19px]"
                alt=''
              />
              <span className="text-[#3E4151] mr-[6px] text-xs">
                File_1.pdf
              </span>
              <button className="mr-[9px]">
                <img
                  src={imagesFileUrl + 'svg/download 1.svg'}
                  className="w-[13px] h-[13px] "
                  alt=''
                />
              </button>
              <img
                src={imagesFileUrl + 'svg/Frame docx.svg'}
                className="w-[24px] h-[32px] mr-[19px]"
                alt=''
              />
              <span className="text-[#3E4151] mr-[6px] text-xs">
                File_3.pdf
              </span>
              <button className="mr-[9px]">
                <img
                  src={imagesFileUrl + 'svg/download 1.svg'}
                  className="w-[13px] h-[13px] "
                  alt=''
                />
              </button>
            </section> */}
            <h3 className="mb-3 text-sm">پاسخ</h3>
            <textarea
              placeholder="اینجا بنویسید"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mb-5 h-[69px] w-full rounded-[5px] border border-[#E6E8E9] pr-3 pt-4 text-sm"
            ></textarea>
            <section className="flex justify-end">
              {/* <button className="items-center w-[133px] text-sm gap-[6px] leading-[26px] flex h-[32px] border border-solid text-[#5408A9] border-[#5408A9] rounded-[5px]">
                <img src={imagesFileUrl + "dashboard/Vector (Stroke).png"} className="w-[11.43px] h-[12.93px] mr-[22.57px]" alt="" />
                انتخاب فایل
              </button> */}

              <Button
                disabled={!message}
                onClick={addMessage}
                loading={loading}
                className="h-[40px] w-[200px] rounded-[10px]   leading-[26px] text-white"
              >
                ارسال پاسخ
              </Button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
