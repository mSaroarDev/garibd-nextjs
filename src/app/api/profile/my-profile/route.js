import { connectDB } from "@db/connectDB";
import userModel from "@db/models/users";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import purchasePackageModel from "@db/models/purchasePackage";

export async function GET() {
  // session
  const session = await getServerSession(authOptions);

  try {
    await connectDB();

    const user = await userModel.findOne({ id: session.user.id }).populate({
      path: "purchased_packages",
    });

    return NextResponse.json({ msg: "success", data: user, session: session });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error", data: error });
  }
}
