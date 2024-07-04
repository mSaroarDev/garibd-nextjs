import userModel from "@db/models/users";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  const { picture } = body;

  try {
    const newdata = await userModel.findOneAndUpdate(
      { email: session?.user?.email },
      {
        $set: {
          image: picture,
        },
      }
    );

    return NextResponse.json(
      { msg: "success", data: newdata },
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
