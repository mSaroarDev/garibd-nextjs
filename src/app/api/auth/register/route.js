import { connectDB } from "@app/db/connectDB";
import { NextResponse } from "next/server";
import userModel from "@app/db/models/users";
import bcrypt from "bcrypt";

export async function POST(req) {
  const formData = await req.json();
  const { nickname, mobile, email, password1 } = formData;
  const hashedPassword = bcrypt.hashSync(password1.toString(), 10);

  try {
    await connectDB();

    const existUser =
      (await userModel.findOne({ mobile })) ||
      (await userModel.findOne({ email }));

    if (existUser) {
      return NextResponse.json({
        msg: "duplicate",
        data: "duplicate email or mobile",
      });
    }

    const info = new userModel({
      nickname,
      mobile,
      email,
      password: hashedPassword,
    });
    const data = await info.save();

    return NextResponse.json({ msg: "success", data: data });
  } catch (error) {
    return NextResponse.json({ msg: "error", data: error });
  }
}