import StatCard from "@components/StatCard";
import { userStatistics } from "@libs/api/stats";
import { authOptions } from "@libs/authOptions";
import convertToBanglaNumber from "@utils/convertNumbertoBangla";
import { getServerSession } from "next-auth";

export default async function UserDashboardPage() {
  // const session = await getServerSession(authOptions);
  // const currUser = session?.user;

  // // get statistics
  // const stats = await userStatistics(currUser?._id);
  // const { myads, soldAds, notSoldAds, myPayments } = stats;

  return (
    <>
      <div className="flex items-center justify-between p-7">
        <div className="text-[22px] font-bold">Welcome, Mr. Saroar Jahan</div>
      </div>

      {/* main content */}
      {/* <div className="grid grid-cols-12 gap-4  px-7">
        <StatCard
          count={convertToBanglaNumber(parseInt(myads))}
          text="আমার বিজ্ঞাপন সমূহ"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(soldAds))}
          text="বিক্রিত গাড়ি"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(notSoldAds))}
          text="অবিক্রিত গাড়ি"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(myPayments))}
          text="মোট পেমেন্ট"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(myads))}
          text="নতুন মেসেজ"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(myads))}
          text="নোটিফিকেশন"
        />
      </div> */}
    </>
  );
}
