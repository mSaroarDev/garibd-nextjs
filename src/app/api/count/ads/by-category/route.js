import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("id");
  const currStatus = searchParams.get("status");

  const query = { categoryId };

  if (currStatus) {
    query.currStatus = currStatus;
  }

  try {
    await connectDB();

    const data = await adModel.countDocuments(query);

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
