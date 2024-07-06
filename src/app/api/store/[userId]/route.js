import { connectDB } from "@db/connectDB";
import storeModel from "@db/models/store";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { userId } = params;

  try {
    await connectDB();

    const data = await storeModel.findOne({ user: userId });

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
