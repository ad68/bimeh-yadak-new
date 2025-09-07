import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json(); // دریافت اطلاعات پرداخت
    console.log("Payment callback:", body);

    // استخراج اطلاعات مورد نیاز برای نمایش در صفحه
    const queryParams = new URLSearchParams({
      success: body.success || "",
      purchaseId: body.purchaseId || "",
      amount: body.amount || "",
      name: body.name || "",
      date: body.date || "",
      time: body.time || "",
      pspName: body.pspName || "",
    });

    // ریدایرکت به صفحه نهایی
    return NextResponse.redirect(new URL(`/callback/payment?${queryParams.toString()}`, req.url));
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json({ error: "Error processing payment" }, { status: 500 });
  }
}
