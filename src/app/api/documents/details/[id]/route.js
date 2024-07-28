import { connectDB } from "@db/connectDB";
import documentModel from "@db/models/documets";
import { NextResponse } from "next/server";
import userModel from "@db/models/users";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectDB();

    const document = await documentModel.findOne({ _id: id }).sort({ _id: -1 });
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
