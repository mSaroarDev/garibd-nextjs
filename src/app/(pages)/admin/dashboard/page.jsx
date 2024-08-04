import StatCard from "@components/StatCard";
import { overallStatistics } from "@libs/api/stats";
import convertToBanglaNumber from "@utils/convertNumbertoBangla";

export default async function AdminDashboardPage() {
  // get statistics
  const stats = await overallStatistics();
  console.log("stats:", );
  
  const {
    soldAds,
    notSoldAds,
    allAds,
    categories,
    companies,
    membership,
    store,
    newPayments,
    allPayments,
    newDocuments, allUsers
  } = stats;

  return (
    <>
      <div className="flex items-center justify-between p-7">
        <div className="text-[22px] font-bold">Welcome, Mr. Saroar Jahan</div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-12 gap-4  px-7">
        <StatCard
          count={convertToBanglaNumber(parseInt(allAds))}
          text="মোট বিজ্ঞাপন"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(soldAds))}
          text="বিক্রিত বিজ্ঞাপন"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(notSoldAds))}
          text="অবিক্রিত বিজ্ঞাপন"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(allUsers))}
          text="মোট ব্যবহারকারী"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(categories))}
          text="মোট ক্যাটাগরী"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(companies))}
          text="মোট কোম্পানী"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(membership))}
          text="একটিভ মেম্বারশীপ"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(store))}
          text="মোট স্টোর"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(newPayments))}
          text="নতুন পেমেন্ট"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(allPayments))}
          text="মোট পেমেন্ট"
        />
        <StatCard
          count={convertToBanglaNumber(parseInt(newDocuments))}
          text="নতুন ডকুমেন্ট"
        />
      </div>
    </>
  );
}
