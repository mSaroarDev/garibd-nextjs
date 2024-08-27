import adModel from "@db/models/ad";
import purchasePackageModel from "@db/models/purchasePackage";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  try {
    await connectDB();

    // get my ads
    const myads = await adModel.countDocuments({ user: userId });

    // sold ads
    const soldAds = await adModel.countDocuments({
      user: userId,
      currStatus: "Sold",
    });

    // not sold ads
    const notSoldAds = await adModel.countDocuments({
      user: userId,
      currStatus: "Not Sold",
    });

    // my payments
    const myPayments = await purchasePackageModel.countDocuments({
      user: userId,
      "payment_info.status": "Accepted",
    });

    return NextResponse.json(
      {
        msg: "error",
        data: { myads, soldAds, notSoldAds, myPayments },
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
