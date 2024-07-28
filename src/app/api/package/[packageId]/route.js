import { connectDB } from "@db/connectDB";
import packageModel from "@db/models/package";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { packageId } = params;

  try {
    await connectDB();

    const data = await packageModel.find({ _id: packageId });

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
