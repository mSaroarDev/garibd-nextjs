import purchasePackageModel from "@db/models/purchasePackage";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { userId } = params;

  try {
    const data = await purchasePackageModel
      .find({
        user: userId,
      })
      .sort({ _id: -1 });

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
