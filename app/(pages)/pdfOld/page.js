"use client";
import axios from "axios";
import React from "react";

const DownloadButton = () => {
  const handleDownload = async () => {
    const data = {
      title: "title",
      content: "content",
    };
    try {
      const response = await axios.post("/api/downloadPdf", data, {
        responseType: "blob",
      });

      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "example.pdf";
        link.click();
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <button className="mt-[400px]" onClick={handleDownload}>
      دانلود PDF
    </button>
  );
};

export default DownloadButton;
