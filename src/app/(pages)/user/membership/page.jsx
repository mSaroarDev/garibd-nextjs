import PageHeader from "@components/PageHeader";
import { Crown, Plus } from "lucide-react";
import Link from "next/link";

export default function MembershipPage() {
  return (
    <div className="p-3 md:p-5 lg:p-10 mb-20 md:mb-0">
      <div className="flex items-center justify-between">
        <div>
            <PageHeader text="মেমবারশীপ" icon={<Crown className="w-5 h-5" />} />
        </div>

        <Link href="/user/membership/type" className="button-main flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>মেমবারশীপ কিনুন</span>
        </Link>
      </div>

      {/* main content */}
      <div className="mt-5 lg:mt-10">
        <div className="bg-[#FAF4EB] p-5 rounded-xl grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-3">
            <img
              src="/king.png"
              alt=""
              className="w-[100px] lg:w-[150px] -rotate-12"
            />
          </div>
          <div className="col-span-12 md:col-span-9 mt-5 md:mt-0">
            <h2 className="text-[22px] font-bold mb-2">
              Greate! আপনি একজন প্রিমিয়াম মেমবার।
            </h2>
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
        <h1 className="text-[19px] font-bold text-center">
          আপনার ক্রয়কৃত মেমবাশীপ প্যাকেজ
        </h1>

        {/* cards */}
        <div className="flex flex-wrap items-center justify-center mt-5 gap-4"></div>
      </div>
    </div>
  );
}
