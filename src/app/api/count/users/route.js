import { connectDB } from "@db/connectDB";
import userModel from "@db/models/users";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const data = await userModel.countDocuments();

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
