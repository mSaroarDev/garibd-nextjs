import documentModel from "@db/models/documets";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  // current user
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ msg: "unauthorized" }, { status: 401 });
  }

  // get the form data
  const body = await req.json();

  try {
    const document = new documentModel({
      ...body,
      approval_status: "Pending",
      user: session?.user?.id,
    });

    const data = await document.save();

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
