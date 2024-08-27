import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { userId } = params;
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  try {
    await connectDB();

    const data = await adModel
      .find({ user: userId })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("categoryId companyId storeId user")
      .sort({ _id: -1 });

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
