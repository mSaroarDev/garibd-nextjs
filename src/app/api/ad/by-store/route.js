import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { searchParams } = new URL(req.url);
  const storeId = searchParams.get("store");
  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const currStatus = searchParams.get("status");

  try {
    await connectDB();

    const query = { storeId };
    if (currStatus) {
      query.currStatus = currStatus;
    }

    const data = await adModel
      .find(query)
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
