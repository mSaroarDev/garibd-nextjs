import { connectDB } from "@db/connectDB";
import storeModel from "@db/models/store";
import userModel from "@db/models/users";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const currUser = session?.user;

  const body = await req.json();

  try {
    await connectDB();

    const existingStore = await storeModel.find({ user: currUser?.id });

    if (existingStore?.length > 0) {
      return NextResponse.json(
        { msg: "failed", data: "store already exist by this user" },
        { status: 400 }
      );
    }

    const newData = new storeModel({
      ...body,
      user: currUser?.id,
    });

    const data = await newData.save();

    // push data to user
    await userModel.findOneAndUpdate(
      { _id: currUser?.id },
      {
        $set: {
          store: data._id,
        },
      }
    );

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "err" }, { status: 500 });
  }
}
