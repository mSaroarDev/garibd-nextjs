import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import categoryModel from "@db/models/category";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const currUser = session?.user;
  const body = await req.json();
  const { categoryId } = body;

  try {
    await connectDB();

    const newData = new adModel({
      ...body,
      user: currUser?._id,
    });

    const data = await newData.save();

    // push data to targeted category ads object
    await categoryModel.updateOne(
      { id: categoryId },
      {
        $push: {
          ads: data?._id,
        },
      }
    );

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "success" }, { status: 500 });
  }
}
