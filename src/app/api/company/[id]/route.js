import { connectDB } from "@db/connectDB";
import { NextResponse } from "next/server";
import companyModel from "@db/models/company";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectDB();

    const data = await companyModel.findOne({ _id: id }).populate("ads");
    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
