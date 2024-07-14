import { connectDB } from "@db/connectDB";
import purchasePackageModel from "@db/models/purchasePackage";
import userModel from "@db/models/users";
import { authOptions } from "@libs/authOptions";
import convertDateAndTime from "@utils/convertDateAndTime";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const packageData = await req.json();
  const { name, price, category, type, value, duration } = packageData;
  const paid_time = new Date().toISOString();

  // date function
  const getEndDate = () => {
    if (duration !== "") {
      const todayDate = new Date();
      const endDate = new Date(todayDate);
      endDate.setMonth(endDate.getMonth() + parseInt(duration) || "");

      const endDateIso = endDate.toISOString();

      return endDateIso;
    }
  };

  // session
  const session = await getServerSession(authOptions);
  const currUser = session?.user;

  try {
    await connectDB();

    // check the package is already exist
    const existPackage = await purchasePackageModel
      .find({
        "package_data.category": category && category,
        user: currUser._id,
        currStatus: "Pending" || "Active",
      })
      .sort({ _id: -1 });

    if (existPackage?.length > 0) {
      return NextResponse.json({ msg: "exist package" }, { status: 400 });
    }

    const newData = new purchasePackageModel({
      package_data: {
        name,
        price,
        category,
        type,
        value: (value && parseInt(value)) || "",
        currValue: (value && parseInt(value)) || "",
        duration,
        startDate: paid_time,
        endDate: (duration && getEndDate()) || "",
      },
      payment_info: {
        paymentMethod: "",
        paidFrom: "",
        trxId: "",
        paidAt: "",
        status: "pending",
      },
      user: currUser._id,
    });
    const data = await newData.save();

    await userModel.updateOne(
      { _id: currUser._id },
      {
        $push: {
          packages: data?._id,
        },
      }
    );

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (err) {
    console.log("err is: ", err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
