import AdCard from "@components/AdCard";
import Paggination from "@components/Paggination";
import { getStoreAds } from "@libs/api/ad";
import { adsByThisStore } from "@libs/api/stats";
import { Filter, House } from "lucide-react";
import Link from "next/link";

export default async function StoreAdsPage({ params, searchParams }) {
  const page = searchParams.page;
  const { storeId } = params;
  const storeAds = await getStoreAds(storeId, page, 10, "Not Sold");
  const adCount = await adsByThisStore(storeId, "Not Sold");
  

  return (
    <>
      <div className="bg-body">
        <div className="w-full max-w-7xl mx-auto px-4 pb-20 lg:pb-10">
          <div className="my-5 font-semibold text-base pt-5 flex items-center gap-2">
            <House className="w-4 h-4" /> <Link href="/">হোমপেজ</Link> »{" "}
            <span>Store</span> {storeAds && "»"}{" "}
            {storeAds && storeAds[0]?.storeId?.store_name}
          </div>

          <h1 className="font-medium text-2xl pb-5">
            {storeAds && storeAds[0]?.storeId?.store_name} এ বিজ্ঞাপন সমূহ - {adCount} টি
          </h1>

          {/* layout */}
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-3">
              {/* filters */}
              <div className="bg-white border border-borderColor rounded-md">
                {/* division */}
                <div>
                  <h2 className="px-4 py-2 font-bold text-base">স্টোর ইনফো</h2>
                  <hr />
                  <div className="mt-2 px-4 flex items-start gap-2 p-5">
                    <div className="w-[50px] h-[50px]">
                      <img
                        src="/store.png"
                        alt="name"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h1 className="text-base font-bold flex items-center gap-2">
                        <span>
                          {storeAds && storeAds[0]?.storeId?.store_name}
                        </span>
                        <img
                          src="/verified1.png"
                          alt="Verified"
                          className="w-5 h-5"
                        />
                      </h1>
                      <p>{storeAds && storeAds[0]?.storeId?.store_address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-white border border-borderColor rounded-md mt-2">
                
                <div>
                  <h2 className="px-4 py-2 font-bold text-base">কন্ডিশন</h2>
                  <hr />
                  <div className="mt-2 px-4">
                    <p className="my-4">
                      <input type="checkbox" />{" "}
                      <label className="ml-2">নতুন</label>
                    </p>
                    <p className="my-4">
                      <input type="checkbox" />{" "}
                      <label className="ml-2">পুরাতন</label>
                    </p>
                    <p className="my-4">
                      <input type="checkbox" />{" "}
                      <label className="ml-2">রিকন্ডিশন</label>
                    </p>
                  </div>
                </div>
              </div> */}

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
                    {storeAds &&
                      storeAds?.map((item) => (
                        <AdCard key={item?._id} data={item} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Paggination
              count={parseInt(adCount)}
              nextLink={`/store/${storeId}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
