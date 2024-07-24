import { connectDB } from "@db/connectDB";
import storeModel from "@db/models/store";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const data = await storeModel.countDocuments();

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
