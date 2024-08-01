import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import { NextResponse } from "next/server";
import categoryModel from "@db/models/category";
import companyModel from "@db/models/company";
import userModel from "@db/models/users";

export async function GET(req, { params }) {
  const { adId } = params;

  try {
    await connectDB();

    const data = await adModel
      .findOne({ _id: adId })
      .populate("categoryId companyId user");

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
