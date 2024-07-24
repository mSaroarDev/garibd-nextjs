import AdListRow from "@components/AdListRow";
import PageHeader from "@components/PageHeader";
import Paggination from "@components/Paggination";
import { getAllAds } from "@libs/api/ad";
import { getSingleCategory } from "@libs/api/category";
import convertToBanglaNumber from "@utils/convertNumbertoBangla";
import { ArrowLeft, Puzzle } from "lucide-react";
import Link from "next/link";

export default async function CategoryPage({ params, searchParams }) {
  // utils
  const { catId } = params;
  const page = searchParams.page;

  // data
  const adsByThisCategory = await getAllAds(catId, page, 10);

  return (
    <>
      <Link
        href="/admin/category"
        className="flex items-center gap-2 button-main w-fit mb-5"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>ফিরুন</span>
      </Link>

      <div className="flex items-center justify-between">
        <PageHeader
          text={`অ্যাড সমূহ: ${adsByThisCategory[0]?.categoryId?.categoryName} - (${convertToBanglaNumber(adsByThisCategory[0]?.categoryId?.ads?.length)} টি বিজ্ঞাপন)`}
          icon={<Puzzle className="w-5 h-5" />}
        />

        <Link href="/admin/category/create" className="button-main">
          অ্যাড পোস্ট করুন
        </Link>
      </div>

      <div className="mt-5">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  গাড়ির নাম
                </th>
                <th scope="col" class="px-6 py-3">
                  ক্যাটেগরী
                </th>
                <th scope="col" class="px-6 py-3">
                  কোম্পানীর নাম
                </th>
                <th scope="col" class="px-6 py-3">
                  মুল্য
                </th>
                <th scope="col" class="px-6 py-3 text-right">
                  পদক্ষেপ
                </th>
              </tr>
            </thead>
            <tbody>
              {adsByThisCategory?.map((item)=> <AdListRow key={item?._id} data={item} />)}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Paggination count={parseInt(adsByThisCategory[0]?.categoryId?.ads?.length)} nextLink={`/admin/category/${catId}`} />
      </div>
    </>
  );
}
