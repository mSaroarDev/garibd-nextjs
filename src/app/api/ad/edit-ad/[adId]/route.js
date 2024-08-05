import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  const { adId } = params;
  const session = await getServerSession(authOptions);
  const currUser = session?.user;
  const body = await req.json();

  const {
    ad_type,
    ad_name,
    condition,
    short_desc,
    model,
    kilo_hr,
    horse,
    cc,
    size,
    weight,
    wheel_size,
    cylinder,
    load_capacity,
    mylase,
    breaking_type,
    air_condition,
    power_stearing,
    fuel_type,
    documents,
    driver_type,
    price,
    isFeatured,
  } = body;

  const formattedData = {
    ad_type:
      ad_type === "motorcycle"
        ? "parts-and-motorcycle"
        : ad_type === "parts"
        ? "parts-and-motorcycle"
        : "all-vehicles",
    ad_name,
    condition,
    short_desc,
    model,
    kilo_hr,
    others_info: {
      horse,
      cc,
      size,
      weight,
      wheel_size,
      cylinder,
      load_capacity,
      mylase,
      breaking_type,
    },
    air_condition,
    power_stearing,
    fuel_type,
    documents,
    driver_type,
    price,
    isFeatured,
  };

  try {
    await connectDB();
    const data = await adModel.findByIdAndUpdate(
      { _id: adId },
      {
        $set: {
          ad_name,
          condition,
          short_desc,
          model,
          kilo_hr,
          "others_info.horse": horse,
          "others_info.cc": cc,
          "others_info.size": size,
          "others_info.weight": weight,
          "others_info.wheel_size": wheel_size,
          "others_info.cylinder": cylinder,
          "others_info.load_capacity": load_capacity,
          " others_info.mylase": mylase,
          "others_info.breaking_type": breaking_type,
          air_condition,
          power_stearing,
          fuel_type,
          documents,
          driver_type,
          price,
          isFeatured,
        },
      }
    );

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "success" }, { status: 500 });
  }
}
