import { connectDB } from "@db/connectDB";
import profileModel from "@db/models/profile";
import userModel from "@db/models/users";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { id } = params;
  const body = await req.json();

  const {
    name_en,
    name_bn,
    father_name,
    mother_name,
    gender,
    dob,
    address,
    nid_no,
    mobile,
  } = body;

  try {
    await connectDB();

    const updatedProfile = await profileModel.findOneAndUpdate(
      { user: id },
      {
        $set: {
          name_en: name_en,
          name_bn: name_bn,
          father_name: father_name,
          mother_name: mother_name,
          gender: gender,
          dob: dob,
          address: address,
          nid_no: nid_no,
        },
      }
    );

    const updatedUser = await userModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          mobile: mobile,
        },
      }
    );

    return NextResponse.json(
      { msg: "success", data: { updatedUser, updatedProfile } },
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
