"use client";
import React from "react";
export default function Index({
  dark,
  style,
  defaultValue,
  placeholder,
  className,
  onChange,
  disabled,
  value,
  type
}) {
  return (
    <section className="relative w-full">
      {type === "phone" && <section className="ltr flex justify-between font-light text-[#A6A9BD] items-center w-[40px] absolute top-2 left-3">
        +98 <span className="block  w-[1px] h-[32px] bg-[#A6A9BD]"></span>
      </section>}
      <input
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        value={value}
        style={{ ...style }}
        className={`${dark ? "border-[#2f2f2f80]  bg-[#2f2f2f80] text-white" : ""} ${type === "phone" && 'pl-16 ltr'} mx-0 h-[48px] w-full rounded-[4px] border-[1px] border-[#C2C2C2] p-[15px] text-xs outline-none transition-all duration-300 focus:border-[#0165e1] ${className}`}
      />
    </section>
  );
}
