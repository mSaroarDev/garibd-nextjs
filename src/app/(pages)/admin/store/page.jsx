import PageHeader from "@components/PageHeader";
import Paggination from "@components/Paggination";
import StoreListRow from "@components/StoreListRow";
import { allStoresCount } from "@libs/api/stats";
import { getAllStore } from "@libs/api/store";
import { Store } from "lucide-react";

export default async function StorePage({ searchParams }) {
  // page and limit
  const page = searchParams.page;

  // get data
  const data = await getAllStore(page, 10);

  // store count
  const totalSotores = await allStoresCount();

  return (
    <>
      <PageHeader text="স্টোর সমূহ" icon={<Store className="w-5 h-5" />} />

      <div className="mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  স্টোর নাম
                </th>
                <th scope="col" className="px-6 py-3">
                  ধরন
                </th>
                <th scope="col" className="px-6 py-3">
                  মোট বিজ্ঞাপন
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 flex items-center justify-end gap-2"
                >
                  পদক্ষেপ
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <StoreListRow key={item?._id} data={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* paggination */}
      <div className="flex items-center justify-end">
        <Paggination count={parseInt(totalSotores)} nextLink="/admin/store" />
      </div>
    </>
  );
}
