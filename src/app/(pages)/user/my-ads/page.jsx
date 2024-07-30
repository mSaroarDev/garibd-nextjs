import PageHeader from "@components/PageHeader";
import Paggination from "@components/Paggination";
import UserAdListRow from "@components/UserAdListRow";
import { Gift, SquareCheckBig } from "lucide-react";
import Link from "next/link";

export default function MyAdsPage() {
  return (
    <div className="p-5">
        <div className="flex items-center justify-between">

      <PageHeader icon={<Gift />} text="আমার বিজ্ঞাপন সমুহ" />

      <Link href="/user/my-ads/create-ad" className="button-main">নতুন বিজ্ঞাপন</Link>
        </div>

      <div className="mt-5">
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
                  দাম
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
              <UserAdListRow />
              <UserAdListRow />
              <UserAdListRow />
              <UserAdListRow />
              <UserAdListRow />
              <UserAdListRow />
              <UserAdListRow />
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Paggination count={34} nextLink="/user/my-ads" />
      </div>
    </div>
  );
}
