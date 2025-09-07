"use server";

import { NextResponse } from "next/server";
import { pdf } from "@react-pdf/renderer";
import MyDocument from "../../server/pdfGenerator";

export async function POST(request) {
  const { title, content } = await request.json();

  try {
    const data = { title, content };

    const pdfBuffer = await pdf(<MyDocument data={data} />).toBuffer();

    const response = new NextResponse(pdfBuffer);
    response.headers.set("Content-Type", "application/pdf");
    response.headers.set("Content-Disposition", "attachment; filename=example.pdf");

    return response;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return new NextResponse("Error generating PDF", { status: 500 });
  }
}
