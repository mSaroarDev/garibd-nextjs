import purchasePackageModel from "@db/models/purchasePackage";
import { NextResponse } from "next/server";
import userModel from "@db/models/users";
import { connectDB } from "@db/connectDB";

export async function GET(req, { params }) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  try {
    await connectDB();

    const data = await purchasePackageModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ _id: -1 })
      .populate("user");

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
