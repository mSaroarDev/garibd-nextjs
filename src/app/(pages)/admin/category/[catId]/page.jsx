import AdListRow from "@components/AdListRow";
import BackButton from "@components/BackButton";
import PageHeader from "@components/PageHeader";
import Paggination from "@components/Paggination";
import UserAdListRow from "@components/UserAdListRow";
import { getAllAds } from "@libs/api/ad";
import { adsByThisCategory } from "@libs/api/stats";
import convertToBanglaNumber from "@utils/convertNumbertoBangla";
import { Puzzle } from "lucide-react";
import Link from "next/link";

export default async function CategoryPage({ params, searchParams }) {
  // utils
  const { catId } = params;
  const page = searchParams.page;

  // data
  const allAdsByThisCategory = await getAllAds(catId, page, 10);
  const allAdsByThisCategoryCount = await adsByThisCategory(catId);
  

  return (
    <>
     <BackButton />

      <div className="flex items-center justify-between">
        <PageHeader
          text={`অ্যাড সমূহ: (${convertToBanglaNumber(allAdsByThisCategoryCount)} টি বিজ্ঞাপন)`}
          icon={<Puzzle className="w-5 h-5" />}
        />

        <Link href="/admin/category/create" className="button-main">
          অ্যাড পোস্ট করুন
        </Link>
      </div>

      <div className="mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  গাড়ির নাম
                </th>
                <th scope="col" className="px-6 py-3">
                  ক্যাটেগরী
                </th>
                <th scope="col" className="px-6 py-3">
                  কোম্পানীর নাম
                </th>
                <th scope="col" className="px-6 py-3">
                  মুল্য
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  পদক্ষেপ
                </th>
              </tr>
            </thead>
            <tbody>
              {allAdsByThisCategory?.map((item)=> <UserAdListRow key={item?._id} data={item} />)}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Paggination count={parseInt(allAdsByThisCategory[0]?.categoryId?.ads?.length)} nextLink={`/admin/category/${catId}`} />
      </div>
    </>
  );
}
