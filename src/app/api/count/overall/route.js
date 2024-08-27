import { connectDB } from "@db/connectDB";
import adModel from "@db/models/ad";
import categoryModel from "@db/models/category";
import companyModel from "@db/models/company";
import documentModel from "@db/models/documets";
import purchasePackageModel from "@db/models/purchasePackage";
import storeModel from "@db/models/store";
import userModel from "@db/models/users";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    // get my ads
    const allAds = await adModel.countDocuments();

    // sold ads
    const soldAds = await adModel.countDocuments({
      currStatus: "Sold",
    });

    // not sold ads
    const notSoldAds = await adModel.countDocuments({
      currStatus: "Not Sold",
    });

    // all users
    const allUsers = await userModel.countDocuments();

    // category
    const categories = await categoryModel.countDocuments();

    // conpanies
    const companies = await companyModel.countDocuments();

    // membership
    const membership = await purchasePackageModel.countDocuments({
      currStatus: "active",
    });

    // stores
    const store = await storeModel.countDocuments();

    // new payment
    const newPayments = await purchasePackageModel.countDocuments({
      "payment_info.status": "pending",
    });

    // accepted payment
    const allPayments = await purchasePackageModel.countDocuments({
      "payment_info.status": "Accepted",
    });

    // accepted payment
    const newDocuments = await documentModel.countDocuments({
      approval_status: "Pending",
    });

    return NextResponse.json(
      {
        msg: "error",
        data: {
          soldAds,
          notSoldAds,
          allAds,
          categories,
          companies,
          membership,
          store,
          newPayments,
          allPayments,
          newDocuments,
          allUsers,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "error" }, { status: 500 });
  }
}
