import PageHeader from "@components/PageHeader";
import StoreAdsListCard from "@components/StoreAdsListCard";
import { getStoreInfo } from "@libs/api/store";
import { authOptions } from "@libs/authOptions";
import { ListTree } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function StoreInfoPage() {

  // get user id
  const session = await getServerSession(authOptions);
  const storeInfo = await getStoreInfo(session?.user?.id)

  return (
    <>
    <div className="p-5 md:p-10">
        <div className="border border-borderColor rounded-md overflow-hidden">
            <div className="__head bg-lightBg px-4 py-2 text-[18px] font-semibold">
                স্টোর তথ্য
            </div>

            {/* main */}
            <div className="p-5">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-3">
                    <img src={storeInfo ? "/store.png" : "/no_store_found.png"} alt="Store" className="w-[200px]" />
                  </div>
                  <div className="col-span-12 md:col-span-9 pt-5">
                    <h2 className="font-medium text-[25px]">{storeInfo ? storeInfo?.store_name : "আপনি কোন স্টোর তৈরী করেন নি"}</h2>
                    <p>{storeInfo ? storeInfo?.store_address : ""}</p>
                    {storeInfo && <div>
                      <p className="mt-3">মোট বিজ্ঞাপনঃ ১১০ টি</p>
                      <p>বিক্রিত বিজ্ঞাপনঃ ৯০ টি</p>
                      <p>চলমান বিজ্ঞাপনঃ ১০ টি</p>
                    </div>}

                    {!storeInfo && <Link href="/user/my-store/create" className="button-main mt-3 inline-block">স্টোর তৈরী করুন</Link>}
                  </div>
                </div>
            </div>
        </div>

        {/* list */}
        {storeInfo && (
          <div className="flex flex-col items-start justify-between mb-14 md:mb-0 mt-7">
          <div className="w-full">
            <PageHeader
              icon={<ListTree className="w-5 h-5" />}
              text="স্টোর এ বিজ্ঞাপন সমূহ"
            />
  
            <div className="ads__area flex flex-col gap-2">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        #
                      </th>
                      <th scope="col" className="px-6 py-3">
                        তারিখ
                      </th>
                      <th scope="col" className="px-6 py-3">
                        নাম
                      </th>
                      <th scope="col" className="px-6 py-3">
                        মুল্য
                      </th>
                      <th scope="col" className="px-6 py-3">
                        অবস্থা
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <StoreAdsListCard />
                    <StoreAdsListCard />
                    <StoreAdsListCard />
                    <StoreAdsListCard />
                    <StoreAdsListCard />
                    <StoreAdsListCard />
                    <StoreAdsListCard />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  
          {/* paggiantion */}
          <div className="flex items-end justify-end">
            {/* <Paggination count={25} nextLink={pathname} /> */}
          </div>
        </div>
        )}
    </div>
    </>
  )
}