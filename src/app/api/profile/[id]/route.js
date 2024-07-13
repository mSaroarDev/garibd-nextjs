import { connectDB } from "@db/connectDB";
import userModel from "@db/models/users";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const id = await params.id;

  try {
    await connectDB();
    const user = await userModel.findOne({ _id: id }).populate("profile");

    return NextResponse.json({ msg: "success", data: user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error", data: "internal server error" });
  }
}
