import { connectDB } from "@db/connectDB";
import purchasePackageModel from "@db/models/purchasePackage";
import { authOptions } from "@libs/authOptions";
import convertDateAndTime from "@utils/convertDateAndTime";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const packageData = await req.json();
  const { name, price, category, type, value, duration } = packageData;
  const paid_time = new Date().toISOString();

  // session
  const session = await getServerSession(authOptions);
  const currUser = session?.user;

  try {
    await connectDB();

    const newData = new purchasePackageModel({
      package_data: {
        name,
        price,
        category,
        type,
        value,
        duration,
      },
      payment_info: {
        paymentMethod: "",
        paidFrom: "",
        trxId: "",
        paidAt: convertDateAndTime(paid_time),
      },
      user: currUser._id,
    });
    const data = await newData.save();

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (err) {
    console.log("err is: ", err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
