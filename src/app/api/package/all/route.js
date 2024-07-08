import { connectDB } from "@db/connectDB";
import packageModel from "@db/models/package";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const category = searchParams.get("category");

  try {
    await connectDB();

    const res = await packageModel.find({ type, category });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
