import { connectDB } from "@db/connectDB";
import packageModel from "@db/models/package";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  // session
  const session = await getServerSession(authOptions);
  const currUser = session?.user;

  try {
    await connectDB();

    const newData = new packageModel({
      ...body,
      user: currUser._id,
    });

    const data = await newData.save();

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
