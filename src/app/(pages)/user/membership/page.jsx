import MembershipCard from "@components/MembershipCard";
import PageHeader from "@components/PageHeader";
import { getPurchasePackagesByUserID } from "@libs/api/purchagePackage";
import { authOptions } from "@libs/authOptions";
import { Crown, Plus } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function MembershipPage() {
  // session
  const session = await getServerSession(authOptions);
  const currUser = session?.user;

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

      {/* main content */}
      <div className="mt-5 lg:mt-10">
        <div
          className={`${
            data?.length < 1 ? "bg-gray-100" : "bg-[#FAF4EB]"
          } p-5 rounded-xl grid grid-cols-12 gap-2`}
        >
          <div className="col-span-12 md:col-span-3">
            <img
              src={"/king.png"}
              alt=""
              className="w-[100px] lg:w-[150px] -rotate-12"
            />
          </div>
          <div className="col-span-12 md:col-span-9 mt-5 md:mt-0">
            <p>
              একজন প্রিমিয়াম মেমবার হিসেবে গাড়ি বিডির সকল প্রিমিয়াম ফিচার্স
              গ্রহন করুন তাও আবার একই সাবক্রিপসন এই।
            </p>
            <p className="text-[20px] font-semibold mt-3 text-center md:text-left">
              {" "}
              অ্যাড বাকী আছে: ২{" "}
            </p>
          </div>
        </div>
      </div>

      {/* membership cards */}
      <div className="mt-10 membership__cards">

        {/* cards */}
        
         <div className="grid grid-cols-12 gap-5">
         {motorCylePackage?.length > 0 && motorCylePackage[0]?.package_data?.currStatus !== "expired" ?
          <div className="col-span-12 md:col-span-6 border border-borderColor rounded-md overflow-hidden">
            <div className="bg-lightBg px-4 py-2 text-base font-bold">মোটরসাইকেল ও যন্ত্রাংশ</div>
            <div className="p-3 flex items-center justify-center">
              <MembershipCard item={motorCylePackage[0]?.package_data}  />
            </div>
          </div> : ""}

          {allVehiclesPackage?.length > 0 && allVehiclesPackage[0]?.package_data?.currStatus !== "expired" ?
          <div className="col-span-12 md:col-span-6 border border-borderColor rounded-md overflow-hidden">
            <div className="bg-lightBg px-4 py-2 text-base font-bold">সকল গাড়িসমূহ</div>
            <div className="p-3 flex items-center justify-center ">
              <MembershipCard item={allVehiclesPackage[0]?.package_data}  />
            </div>
          </div> : ""}
        </div>
      </div>
    </div>
  );
}
