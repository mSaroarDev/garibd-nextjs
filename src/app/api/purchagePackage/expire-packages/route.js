import { connectDB } from "@db/connectDB";
import purchasePackageModel from "@db/models/purchasePackage";
import moment from "moment";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  //   const now = moment().toISOString();
  const now = new Date().toISOString();

  //   console.log(`Current Date-Time: ${now}`);
  //   console.log(`User ID: ${userId}`);

  try {
    await connectDB();

    const data = await purchasePackageModel.updateMany(
      {
        currStatus: "active",
        user: userId,
        "package_data.type": "Monthly",
        "package_data.endDate": { $lt: now },
        "payment_info.status": "Accepted",
      },
      {
        $set: { currStatus: "expired" },
      }
    );

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
