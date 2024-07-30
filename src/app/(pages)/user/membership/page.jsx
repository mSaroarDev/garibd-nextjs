import CancelPlanButton from "@components/CancelPlanButton";
import MembershipCard from "@components/MembershipCard";
import PageHeader from "@components/PageHeader";
import {
  getPurchagePackagesMonthly,
  getPurchasePackagesByUserID,
  setExpire,
} from "@libs/api/purchagePackage";
import { authOptions } from "@libs/authOptions";
import convertToBanglaNumber from "@utils/convertNumbertoBangla";
import calculateRemainingTime from "@utils/remainingDays";
import { Crown, Plus } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function MembershipPage() {
  // session
  const session = await getServerSession(authOptions);
  const currUser = session?.user;

  // check the monthly packages if expired
  const existMonthlyPackages = await getPurchagePackagesMonthly(currUser?._id);

  if (existMonthlyPackages) {
    await setExpire(currUser?._id);
  }

  // fetch currUser purchases
  const data = await getPurchasePackagesByUserID(currUser?._id);

  const motorCylePackage =
    data &&
    data.filter(
      (item) => item?.package_data?.category === "parts-and-motorcycle"
    );

  const allVehiclesPackage =
    data &&
    data.filter((item) => item?.package_data?.category === "all-vehicles");

  return (
    <div className="p-3 md:p-5 lg:p-10 mb-20 md:mb-0">
      <div className="flex items-center justify-between">
        <div>
          <PageHeader text="মেমবারশীপ" icon={<Crown className="w-5 h-5" />} />
        </div>

        <Link
          href="/user/membership/type"
          className="button-main flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>মেমবারশীপ কিনুন</span>
        </Link>
      </div>

      {/* membership cards */}
      <div className="mt-10 membership__cards">
        {/* cards */}

        <div className="grid grid-cols-12 gap-5">
          {motorCylePackage?.length > 0 &&
          motorCylePackage[0]?.package_data?.currStatus !== "expired" ? (
            <div className="col-span-12 md:col-span-6 border border-borderColor rounded-md overflow-hidden">
              <div className="bg-lightBg px-4 py-2 text-base font-bold">
                মোটরসাইকেল ও যন্ত্রাংশ
              </div>
              <div className="p-3 flex flex-col md:flex-row items-center md:items-start justify-center gap-5">
                <MembershipCard item={motorCylePackage[0]?.package_data} />
                <div className="flex flex-col gap-1 w-full">
                  <div className="bg-lightBg rounded-md p-3 shadow-md w-full border-2 border-blue-600">
                    <h2 className="font-bold text-lg w-full">
                      {motorCylePackage[0]?.package_data?.currValue ? (
                        <>
                          {" "}
                          অ্যাড বাকী আছেঃ{" "}
                          {convertToBanglaNumber(
                            motorCylePackage[0]?.package_data?.currValue
                          )}{" "}
                          টি
                        </>
                      ) : motorCylePackage[0]?.package_data?.duration ? (
                        <>
                          মেয়াদ আছেঃ <br />{" "}
                          {calculateRemainingTime(
                            motorCylePackage[0]?.package_data?.startDate,
                            motorCylePackage[0]?.package_data?.endDate
                          )}
                        </>
                      ) : (
                        <>মেয়াদ আছেঃ Unlimited</>
                      )}
                    </h2>
                  </div>

                  <CancelPlanButton data={motorCylePackage[0]} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {allVehiclesPackage?.length > 0 &&
          allVehiclesPackage[0]?.package_data?.currStatus !== "expired" ? (
            <div className="col-span-12 md:col-span-6 border border-borderColor rounded-md overflow-hidden">
              <div className="bg-lightBg px-4 py-2 text-base font-bold">
                সকল গাড়িসমূহ
              </div>
              <div className="p-3 flex flex-col md:flex-row items-center md:items-start justify-center gap-5">
                <MembershipCard item={allVehiclesPackage[0]?.package_data} />

                <div className="flex flex-col gap-1 w-full">
                  <div className="bg-lightBg rounded-md p-3 shadow-md w-full border-2 border-blue-600">
                    <h2 className="font-bold text-lg">
                      {allVehiclesPackage[0]?.package_data?.currValue ? (
                        <>
                          {" "}
                          অ্যাড বাকী আছেঃ{" "}
                          {convertToBanglaNumber(
                            allVehiclesPackage[0]?.package_data?.currValue
                          )}{" "}
                          টি
                        </>
                      ) : allVehiclesPackage[0]?.package_data?.duration ? (
                        <>
                          মেয়াদ আছেঃ <br />{" "}
                          {calculateRemainingTime(
                            allVehiclesPackage[0]?.package_data?.startDate,
                            allVehiclesPackage[0]?.package_data?.endDate
                          )}
                        </>
                      ) : (
                        <>মেয়াদ আছেঃ Unlimited</>
                      )}
                    </h2>
                  </div>

                  <CancelPlanButton data={allVehiclesPackage[0]} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
