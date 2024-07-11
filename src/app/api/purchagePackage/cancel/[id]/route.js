import { connectDB } from "@db/connectDB";
import purchasePackageModel from "@db/models/purchasePackage";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { id } = params;

  try {
    await connectDB();

    const res = await purchasePackageModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          currStatus: "expired",
        },
      }
    );

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
