import { connectDB } from "@db/connectDB";
import documentModel from "@db/models/documets";
import { NextResponse } from "next/server";
import userModel from "@db/models/users";
import storeModel from "@db/models/store";

export async function GET(req) {
  try {
    await connectDB();

    const data = await documentModel
      .find({
        approval_status: {
          $in: ["Pending", "Rejected", "Verified"],
        },
      })
      .populate({
        path: "user",
        populate: {
          path: "store",
        },
      });

    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
