import { connectDB } from "@db/connectDB";
import purchasePackageModel from "@db/models/purchasePackage";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const id = await params.id;

  const { currStatus, payment_status } = await req.json();

  try {
    await connectDB();

    const data = await purchasePackageModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          "payment_info.status": payment_status,
          currStatus,
        },
      }
    );

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
