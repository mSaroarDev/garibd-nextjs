import { connectDB } from "@db/connectDB";
import userModel from "@db/models/users";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { id } = params;
  const { status } = await req.json();

  try {
    await connectDB();

    const data = await userModel.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          status,
        },
      }
    );
    return NextResponse.json({ msg: "success", data }, { status: 200 });
  } catch (err) {
    console.log("err: ", err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
