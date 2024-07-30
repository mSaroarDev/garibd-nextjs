import { connectDB } from "@db/connectDB";
import purchasePackageModel from "@db/models/purchasePackage";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  try {
    await connectDB();

    const data = await purchasePackageModel.find({
      "package_data.type": "Monthly",
      currStatus: "active",
      "payment_info.status": "Accepted",
      user: userId,
    });

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
