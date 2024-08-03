import BackButton from "@components/BackButton";
import PageHeader from "@components/PageHeader";
import Paggination from "@components/Paggination";
import UserAdListRow from "@components/UserAdListRow";
import UserAdListRowMobile from "@components/UserAdListRowMobile";
import { getMyAds } from "@libs/api/ad";
import { getProfile } from "@libs/api/profile";
import { allMyAdsCount } from "@libs/api/stats";
import { authOptions } from "@libs/authOptions";
import { Gift } from "lucide-react";
import { getServerSession } from "next-auth";

export default async function AdsByThisUser({ params, searchParams }) {
  const session = await getServerSession(authOptions);
  const profile = await getProfile(params.userId);
  const userId = params.userId;
  const page = searchParams.page;
  const myAds = await getMyAds(userId, page, 10);
  const totalMyAds = await allMyAdsCount(userId);

  return (
    <div className="p-5">
      <BackButton />
      <div className="flex items-center justify-between mb-5">
        <PageHeader
          icon={<Gift />}
          text={`${profile?.nickname}- এর বিজ্ঞাপন সমুহ`}
        />

        {/* <Link href="/user/my-ads/create-ad" className="button-main">
          নতুন বিজ্ঞাপন
        </Link> */}
      </div>

      <div className="hidden md:block">
        <div className="relative overflow-x-auto">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  বিজ্ঞাপন টাইটেল
                </th>
                <th scope="col" className="px-6 py-3">
                  ক্যাটেগরী
                </th>
                <th scope="col" className="px-6 py-3">
                  কন্ডিশন
                </th>
                <th scope="col" className="px-6 py-3">
                  অবস্থা
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  পদক্ষেপ
                </th>
              </tr>
            </thead>
            <tbody>
              {myAds.map((item) => (
                <UserAdListRow key={item?._id} data={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="block md:hidden">
        {myAds.map((item) => (
          <UserAdListRowMobile key={item?._id} data={item} />
        ))}
      </div>

      <div className="flex items-center justify-end">
        <Paggination count={parseInt(totalMyAds)} nextLink="/user/my-ads" />
      </div>
    </div>
  );
}
