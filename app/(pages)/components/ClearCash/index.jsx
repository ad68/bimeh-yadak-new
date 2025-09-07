"use client";
import { useEffect } from "react";
const CURRENT_VERSION = "2.0";
export default function Index() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedVersion = localStorage.getItem("site_version");
            if (savedVersion !== CURRENT_VERSION) {
                localStorage.setItem("site_version", CURRENT_VERSION);
                window.location.reload(true);
            }
        }
    }, []);

    return <></>;
}