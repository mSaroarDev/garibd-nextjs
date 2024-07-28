import userModel from "@db/models/users";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { connectDB } from "@db/connectDB";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  const { oldPassword, newPassword } = body;
  const hashedPasswrod = await bcrypt.hash(newPassword, 10);

  try {
    await connectDB();

    const thisUser = await userModel.findOne({ email: session?.user?.email });

    const isValidOldPassword = await bcrypt.compare(
      oldPassword,
      thisUser?.password
    );

    if (!isValidOldPassword) {
      return NextResponse.json(
        { msg: "failed", data: "old password is not correct" },
        { status: 400 }
      );
    }

    await userModel.findOneAndUpdate(
      { email: session?.user?.email },
      {
        $set: {
          password: hashedPasswrod,
        },
      }
    );

    return NextResponse.json(
      { msg: "success", data: "password changed" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "error", data: "internal server error" },
      { status: 500 }
    );
  }
}
