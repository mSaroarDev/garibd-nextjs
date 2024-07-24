import { connectDB } from "@db/connectDB";
import companyModel from "@db/models/company";
import { NextResponse } from "next/server";
import adModel from "@db/models/ad";

export async function GET() {
  try {
    await connectDB();

    const data = await companyModel.find().populate("ads");
    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error", error }, { status: 500 });
  }
}
