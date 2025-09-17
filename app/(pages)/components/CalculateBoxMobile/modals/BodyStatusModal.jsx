import React, { useState, useContext, useEffect } from "react";
import { ArrowsAltOutlined, BgColorsOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import ColoredPart from "./components/ColoredPart";
import ReplacedPart from "./components/ReplacedPart";
import { Button } from "@/common";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setReplacedPart, setColoredPart, closeModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const items = [
    {
      key: "1",
      label: "رنگ شدگی",
      children: <ColoredPart setColoredPart={setColoredPart} />,
      icon: <BgColorsOutlined />,
    },
    {
      key: "2",
      label: "تعویض شدگی",
      children: <ReplacedPart setReplacedPart={setReplacedPart} />,
      icon: <ArrowsAltOutlined />,
    },
  ];
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const onChange = (key) => {
    console.log(key);
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <div className="flex justify-center w-full">
        <button onClick={closeModal} className="w-[200px] h-[40px] bg-[#bf003b] disabled:opacity-60 hover:bg-[#8a002c]  text-white rounded-lg  ">ثبت</button>
      </div>
    </section>
  );
}
