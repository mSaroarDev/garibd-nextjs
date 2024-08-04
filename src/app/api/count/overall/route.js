import adModel from "@db/models/ad";
import purchasePackageModel from "@db/models/purchasePackage";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // get my ads
    const allAds = await adModel.countDocuments();

    // sold ads
    const soldAds = await adModel.countDocuments();

    // not sold ads
    const notSoldAds = await adModel.countDocuments();

    // my payments
    const myPayments = await purchasePackageModel.countDocuments();

    return NextResponse.json(
      {
        msg: "error",
        data: { soldAds, notSoldAds, myPayments, allAds },
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
