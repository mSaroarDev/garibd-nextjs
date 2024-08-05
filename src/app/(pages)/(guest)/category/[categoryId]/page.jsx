import AdCard from "@components/AdCard";
import Paggination from "@components/Paggination";
import { getAllAds } from "@libs/api/ad";
import { Filter, House } from "lucide-react";
import Link from "next/link";

export default async function CategoryAdsPage({params, searchParams}) {
  const page = searchParams.page;
  const category_name = searchParams.category_name;
    const {categoryId} = params;
    const categoryData = await getAllAds(categoryId, page, 10)    

  return (
    <div className="bg-body">
        <div className="w-full max-w-7xl mx-auto px-4 pb-20 lg:pb-10">

        <div className="my-5 font-semibold text-base pt-5 flex items-center gap-2">
          <House className="w-4 h-4" /> <Link href="/">হোমপেজ</Link> » <span>ক্যাটেগরী</span> » {category_name}
        </div>


            <h1 className="font-medium text-2xl pb-5">{category_name} ক্যাটেগরীতে বিজ্ঞাপন সমূহ - 120 টি</h1>

            {/* layout */}
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-3">
                {/* filters */}
                <div className="bg-white border border-borderColor rounded-md">
                  {/* division */}
                  <div>
                    <h2 className="px-4 py-2 font-bold text-base">বিভাগ</h2>
                      <hr />
                      <div className="mt-2 px-4">
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">ঢাকা বিভাগ</label></p>
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">চট্টগ্রাম বিভাগ</label></p>
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">রাজশাহী বিভাগ</label></p>
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">খুলনা বিভাগ</label></p>
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">সিলেট বিভাগ</label></p>
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">বরিশাল বিভাগ</label></p>
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">রংপুর বিভাগ</label></p>
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">ময়মনসিংহ বিভাগ</label></p>
                      </div>
                  </div>
                </div>

                <div className="bg-white border border-borderColor rounded-md mt-2">
                 {/* condition */}
                  <div>
                    <h2 className="px-4 py-2 font-bold text-base">কন্ডিশন</h2>
                      <hr />
                      <div className="mt-2 px-4">
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">নতুন</label></p>
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">পুরাতন</label></p>
                        <p className="my-4"><input type="checkbox" /> <label className="ml-2">রিকন্ডিশন</label></p>
                      </div>
                  </div>
                </div>

                <button className="bg-brandColor border border-brandColor hover:bg-white  text-white hover:text-brandColor text-base font-medium px-4 py-2 rounded-md flex items-center justify-center gap-2 my-2 w-full">
                  <Filter className="w-4 h-4" />
                  <span>সার্চ করুন</span>
                </button>
              </div>

              {/* বিজ্ঞাপন সমূহ */}
              <div className="col-span-12 lg:col-span-9">
                <div className="bg-white border border-borderColor rounded-md">
                  <h2 className="px-4 py-2 font-bold text-base">বিজ্ঞাপন সমুহ</h2>
                  <hr />

                  <div className="p-5">
                    <div className="grid grid-cols-12 gap-3">
                      {categoryData && categoryData.map((item)=> <AdCard key={item?._id} data={item} />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end">
          <Paggination count={20} nextLink={`/category/${categoryId}?category_name=${category_name}`} />
        </div>
        </div>
    </div>
  );
}