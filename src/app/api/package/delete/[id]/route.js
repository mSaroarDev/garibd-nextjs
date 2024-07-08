import { connectDB } from "@db/connectDB";
import packageModel from "@db/models/package";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await connectDB();

    const res = await packageModel.findOneAndDelete({ _id: id }, { new: true });

    return NextResponse.json({ msg: "success", data: res }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
