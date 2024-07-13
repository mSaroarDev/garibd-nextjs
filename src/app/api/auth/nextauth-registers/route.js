import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import userModel from "@db/models/users";
import { connectDB } from "@db/connectDB";
import profileModel from "@db/models/profile";
import documentModel from "@db/models/documets";

export async function POST(req) {
  const formData = await req.json();
  const { name, email, image } = formData;

  const hashedPassword = await bcrypt.hash("123456", 10);

  // need if not email
  const uniqueNumber = Math.floor(1000 + Math.random() * 9000);

  try {
    // connect db
    await connectDB();

    const ifExistEmail = await userModel.findOne({ email });

    if (ifExistEmail) {
      return NextResponse.json({ msg: "Welcome Back" });
    }

    const userData = new userModel({
      nickname: name,
      mobile: "",
      email: email || `${uniqueNumber}.dummymail@gmail.com`,
      image,
      password: hashedPassword,
      packages: [],
    });

    const userInfo = await userData.save();

    // Automatically create an empty profile for the user
    const newProfile = new profileModel();
    newProfile.user = userInfo._id;
    await newProfile.save();

    // document
    const newDocument = new documentModel();
    newDocument.user = userInfo._id;
    await newDocument.save();

    // Link the created profile to the user
    userData.profile = newProfile._id;
    userData.document = newDocument._id;

    //finally save the userdata
    await userData.save();

    return NextResponse.json({ msg: "success" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { msg: "server error", data: err },
      { status: 500 }
    );
  }
}
