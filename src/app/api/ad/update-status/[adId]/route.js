import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { adId } = params;
  const { status } = await req.json();
  console.log("status", status);

  try {
    await connectDB();

    const data = await adModel.findByIdAndUpdate(
      { _id: adId },
      {
        $set: {
          currStatus: status,
        },
      }
    );

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error");
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
