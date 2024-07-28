import { connectDB } from "@db/connectDB";
import paymentModel from "@db/models/payment";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const data = await paymentModel.countDocuments();

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
