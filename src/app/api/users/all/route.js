import { connectDB } from "@db/connectDB";
import userModel from "@db/models/users";
import { NextResponse } from "next/server";
import profileModel from "@db/models/profile";
import storeModel from "@db/models/store";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  try {
    await connectDB();

    const data = await userModel
      .find()
      .limit(limit || 0)
      .skip((page && (page - 1) * limit) || 0)
      .populate("profile")
      .populate("store")
      .exec();

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
