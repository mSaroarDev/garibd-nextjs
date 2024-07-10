import Link from "next/link";

export default function MembershipTypeSelectionPage() {
  return (
    <div className="p-3 lg:p-5">
      <div className="border border-borderColor rounded-lg overflow-hidden">
        <div className="bg-lightBg px-4 py-2 font-bold text-base">
          ক্যাটেগরী পছন্দ করুন
        </div>

        <div className="p-3 md:p-5 grid grid-cols-12 gap-2">
          <Link
            href="/user/membership/motocycles-and-parts"
            className="col-span-12 lg:col-span-6 border border-borderColor p-3 rounded-lg flex items-start gap-5 w-full hover:bg-brandColor/5"
          >
            <div className="min-w-[40px] h-[40px]">
              <img
                src="/transport.png"
                alt="Spairs"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="">
              <h2 className="text-base font-bold">
                মোটর সাইকেল এবং গাড়ির যন্ত্রাংশ
              </h2>
              <p>
                মোটর সাইকেল এবং সকল গাড়ির যন্ত্রাংশ সংক্রান্ত প্যাকেজ নিতে এই
                ক্যাটেগরী সিলেক্ট করুন।
              </p>
            </div>
          </Link>

          <Link
            href="/user/membership/all-vehicles"
            className="col-span-12 lg:col-span-6 border border-borderColor p-3 rounded-lg flex items-start gap-5 w-full hover:bg-brandColor/5"
          >
            <div className="min-w-[40px] h-[40px]">
              <img
                src="/tractor.png"
                alt="Spairs"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="">
              <h2 className="text-base font-bold">সকল ধরনের গাড়ি</h2>
              <p>
                সকল ধরনের গাড়ি সংক্রান্ত প্যাকেজ নিতে এই ক্যাটেগরী সিলেক্ট করুন।
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
