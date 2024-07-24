import { connectDB } from "@db/connectDB";
import storeModel from "@db/models/store";
import { NextResponse } from "next/server";

export async function GET(req) {
  // grab the page no and limit
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  try {
    await connectDB();

    const data = await storeModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
