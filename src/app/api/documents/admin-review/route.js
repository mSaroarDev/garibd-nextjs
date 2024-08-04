import { connectDB } from "@db/connectDB";
import documentModel from "@db/models/documets";
import { NextResponse } from "next/server";
import userModel from "@db/models/users";

export async function POST(req, { params }) {
  const { searchParams } = new URL(req.url);
  const docId = searchParams.get("id");
  const { status } = await req.json();

  try {
    await connectDB();

    const document = await documentModel.findByIdAndUpdate(
      { _id: docId },
      {
        $set: {
          approval_status: status,
        },
      }
    );
    // .populate("user");

    return NextResponse.json(
      { msg: "success", data: document },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
