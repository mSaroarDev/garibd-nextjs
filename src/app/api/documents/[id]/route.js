import documentModel from "@db/models/documets";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const document = await documentModel.find({ user: id }).sort({ _id: -1 });

    return NextResponse.json(
      { msg: "success", data: document },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
