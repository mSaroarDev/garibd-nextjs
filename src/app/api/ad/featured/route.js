import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const data = await adModel
      .find({
        isFeatured: true,
        currStatus: "Not Sold",
      })
      .populate("categoryId companyId");

    return NextResponse.json({ msg: "err", data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "err" }, { status: 500 });
  }
}
