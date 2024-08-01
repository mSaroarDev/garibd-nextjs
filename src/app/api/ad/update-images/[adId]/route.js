import adModel from "@db/models/ad";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { adId } = params;
  const { images, video } = await req.json();

  try {
    const data = await adModel.findByIdAndUpdate(
      { _id: adId },
      {
        $set: {
          images,
          video,
        },
      }
    );

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log("error");
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
