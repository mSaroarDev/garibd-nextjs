import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import categoryModel from "@db/models/category";
import companyModel from "@db/models/company";
import purchasePackageModel from "@db/models/purchasePackage";
import storeModel from "@db/models/store";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const currUser = session?.user;
  const body = await req.json();

  const {
    ad_type,
    ad_name,
    categoryId,
    companyId,
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
    categoryId,
    companyId,
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
    const currUserStore = await storeModel.findOne({ user: currUser?._id });

    const existThisTypePackage = await purchasePackageModel
      .find({
        currStatus: "active",
        user: currUser?._id,
        "package_data.category":
          ad_type === "motorcycle"
            ? "parts-and-motorcycle"
            : ad_type === "parts"
            ? "parts-and-motorcycle"
            : "all-vehicles",
      })
      .sort({ _id: -1 });

    if (existThisTypePackage?.length === 0) {
      return NextResponse.json(
        { msg: "no purchased pakages", data: "no active packages" },
        { status: 406 }
      );
    }

    // the main execution of create ad
    const newData = new adModel({
      ...formattedData,
      user: currUser?._id,
      storeId: currUserStore._id,
    });

    const data = await newData.save();

    // the package credit update
    // if the ad type id "ad"
    if (existThisTypePackage[0].package_data.type === "Ad") {
      await purchasePackageModel.findOneAndUpdate(
        { _id: existThisTypePackage[0]._id },
        {
          $inc: { "package_data.currValue": -1 },
        }
      );
    }

    if (
      existThisTypePackage[0].package_data.type === "Ad" &&
      existThisTypePackage[0].package_data.currValue === 1
    ) {
      await purchasePackageModel.findOneAndUpdate(
        { _id: existThisTypePackage[0]._id },
        {
          $set: {
            currStatus: "expired",
          },
        }
      );
    }

    // push data to targeted category ads object
    await categoryModel.updateOne(
      { _id: categoryId },
      {
        $push: {
          ads: data?._id,
        },
      }
    );

    // push data to targeted company ads object
    await companyModel.updateOne(
      { _id: companyId },
      {
        $push: {
          ads: data?._id,
        },
      }
    );

    // push data to targeted store ads object
    await storeModel.updateOne(
      { _id: currUserStore?._id },
      {
        $push: {
          store_ads: data?._id,
        },
      }
    );

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "success" }, { status: 500 });
  }
}
