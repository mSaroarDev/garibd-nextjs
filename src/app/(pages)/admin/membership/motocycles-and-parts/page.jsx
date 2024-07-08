import MembershipCard from "@components/MembershipCard";
import { getPackages } from "@libs/api/package";
import { getProfile } from "@libs/api/profile";
import { authOptions } from "@libs/authOptions";
import { ArrowLeft } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function AdminMembershipPage() {
  // utils
  const session = await getServerSession(authOptions);
  const profile = await getProfile(session?.user?.id);

  // get all packages
  const adsPackages = await getPackages("Ad", "parts-and-motorcycle");
  const monthlyPackages = await getPackages("Monthly", "parts-and-motorcycle");
  const lifetimePackages = await getPackages("Lifetime", "parts-and-motorcycle");

  return (
    <>
    
      <div className="flex items-center justify-between mb-5">
        <Link
          href="/admin/membership"
          className="button-main flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>ব্যাক করুন</span>
        </Link>
        <Link href="/admin/membership/create" className="button-main">
          প্যাকেজ তৈরী করুন
        </Link>
      </div>

      
      {/* ads packages */}
      <div className="border border-borderColor rounded-lg overflow-hidden">
        <div className="bg-lightBg px-4 py-2 font-bold text-base">
          অ্যাড ভিত্তিক
        </div>

        <div className="p-3 md:p-5 flex flex-wrap items-start gap-5">
          {adsPackages.map((item, i)=> <MembershipCard key={i} item={item} profile={profile} />)}
        </div>
      </div>

      {/* monthly packages */}
      <div className="border border-borderColor rounded-lg overflow-hidden mt-5">
        <div className="bg-lightBg px-4 py-2 font-bold text-base">
          মাসিক প্যাকেজ
        </div>

        <div className="p-3 md:p-5 flex flex-wrap items-start gap-5">
          {monthlyPackages.map((item, i)=> <MembershipCard key={i} item={item} profile={profile} />)}
        </div>
      </div>

      {/* lifetime */}
      <div className="border border-borderColor rounded-lg overflow-hidden mt-5">
        <div className="bg-lightBg px-4 py-2 font-bold text-base">
          লাইফটাইম প্যাকেজ
        </div>

        <div className="p-3 md:p-5 flex flex-wrap items-start gap-5">
          {lifetimePackages.map((item, i)=> <MembershipCard key={i} item={item} profile={profile} />)}
        </div>
      </div>
    </>
  );
}
