import categoryModel from "@db/models/category";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const currUser = session?.user;

  const body = await req.json();

  try {
    const newData = new categoryModel({
      ...body,
      user: currUser._id,
    });

    const data = await newData.save();
    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
