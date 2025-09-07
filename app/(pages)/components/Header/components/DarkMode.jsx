"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState();
  useEffect(() => {
    /*   if (localStorage.theme === "dark" || "theme" in localStorage) { */
    if ("theme" in localStorage && localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else if (localStorage.theme === "light" || !("theme" in localStorage)) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(localStorage.theme);
    }
  }, []);
  const goToLightMode = () => {
    localStorage.theme = "light";
    setTheme("light");
    document.documentElement.classList.remove("dark");
  };
  const goToDarkMode = () => {
    localStorage.theme = "dark";
    setTheme("dark");
    document.documentElement.classList.add("dark");
  };
  const switchTheme = () => {
    if (theme === "light") {
      goToDarkMode()
    }
    else if (theme === "dark") {
      goToLightMode()
    }
  }
  return (
    <>
      <section className="">
        <button
          onClick={
            switchTheme
          }
          className="flex items-center justify-center rounded-full bg-blue p-2 text-white "
        >
          {theme === "light" ? (
            <Image width={20} height={20} src="/assets/icons/day.svg" alt="" />
          ) : theme === "dark" ? (
            <Image
              width={20}
              height={20}
              src="/assets/icons/night.svg"
              alt=""
            />
          ) : (
            ""
          )}
        </button>
      </section>

    </>
  );
}
