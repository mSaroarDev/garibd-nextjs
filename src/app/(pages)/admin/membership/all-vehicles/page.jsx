import MembershipCard from "@components/MembershipCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminMembershipPage() {
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
          <MembershipCard />
          <MembershipCard />
          <MembershipCard />
        </div>
      </div>

      {/* monthly packages */}
      <div className="border border-borderColor rounded-lg overflow-hidden mt-5">
        <div className="bg-lightBg px-4 py-2 font-bold text-base">
          মাসিক প্যাকেজ
        </div>

        <div className="p-3 md:p-5 flex flex-wrap items-start gap-5">
          <MembershipCard />
          <MembershipCard />
          <MembershipCard />
        </div>
      </div>

      {/* lifetime */}
      <div className="border border-borderColor rounded-lg overflow-hidden mt-5">
        <div className="bg-lightBg px-4 py-2 font-bold text-base">
          লাইফটাইম প্যাকেজ
        </div>

        <div className="p-3 md:p-5 flex flex-wrap items-start gap-5">
          <MembershipCard />
        </div>
      </div>
    </>
  );
}
