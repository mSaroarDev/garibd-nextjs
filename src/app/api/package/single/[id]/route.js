import { connectDB } from "@db/connectDB";
import packageModel from "@db/models/package";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = params.id;

  try {
    await connectDB();

    const res = await packageModel.findOne({ _id: id });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
