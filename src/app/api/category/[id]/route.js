import { connectDB } from "@db/connectDB";
import categoryModel from "@db/models/category";
import { NextResponse } from "next/server";
import adModel from "@db/models/ad";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectDB();

    const data = await categoryModel.findOne({ _id: id }).populate("ads");
    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
