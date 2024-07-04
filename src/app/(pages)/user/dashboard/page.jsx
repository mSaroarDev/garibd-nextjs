import StatCard from "@components/StatCard";


export default function UserDashboardPage() {
  return (
    <>
      <div className="flex items-center justify-between p-7">
        <div className="text-[22px] font-bold">Welcome, Mr. Saroar Jahan</div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-12 gap-4  px-7">
        <StatCard count={25} text="আমার বিজ্ঞাপন সমূহ" />
        <StatCard count={20} text="বিক্রিত গাড়ি" />
        <StatCard count={5} text="অবিক্রিত গাড়ি" />
        <StatCard count={25} text="মোট পেমেন্ট" />
        <StatCard count={1} text="নতুন মেসেজ" />
        <StatCard count={5} text="নোটিফিকেশন" />
      </div>
    </>
  );
}
