import { connectDB } from "@db/connectDB";
import purchasePackageModel from "@db/models/purchasePackage";
import convertDateAndTime from "@utils/convertDateAndTime";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { id } = params;
  const paid_time = new Date().toISOString();
  const body = await req.json();
  const { paymentMethod, amount, paidFrom, trxId } = body;

  try {
    await connectDB();

    const res = await purchasePackageModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          "payment_info.paymentMethod": paymentMethod,
          "payment_info.amount": amount,
          "payment_info.paidFrom": paidFrom,
          "payment_info.trxId": trxId.toUpperCase(),
          "payment_info.paidAt": convertDateAndTime(paid_time),
          "payment_info.status": "pending",
        },
      }
    );

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
