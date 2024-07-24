import PageHeader from "@components/PageHeader";
import { getAllCategories } from "@libs/api/category";
import { getAllCompanies } from "@libs/api/company";
import { Puzzle } from "lucide-react";
import Link from "next/link";

export default async function CategoryPage() {
  // data
  const categories = await getAllCategories();
  const companies = await getAllCompanies();

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeader
          text="ক্যাটেগরী সমূহ"
          icon={<Puzzle className="w-5 h-5" />}
        />

        <Link href="/admin/category/create" className="button-main">
          নতুন ক্যাটেগরী
        </Link>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-5">
        {categories?.map((item, i) => (
          <Link
            key={i}
            href={`/admin/category/${item?._id}?page=1`}
            className="w-[250px] h-[90px] border border-borderColor shadow-md hover:shadow-lg rounded-md flex items-center justify-start gap-5 px-5 py-2"
          >
            <div className="w-[60px] h-auto">
              <img
                src={item?.categoryIcon}
                alt={item?.categoryName}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-bold text-md">{item?.categoryName}</h2>
              <p>{item?.ads?.length} Ads</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between mt-10">
        <PageHeader
          text="কোম্পানী সমূহ"
          icon={<Puzzle className="w-5 h-5" />}
        />

        <Link href="/admin/category/company/create" className="button-main">
          নতুন কোম্পানী
        </Link>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-5">
        {companies?.map((item, i) => (
          <Link
            key={i}
            href={`/admin/category/${item?._id}?page=1`}
            className="w-[250px] h-[90px] border border-borderColor shadow-md hover:shadow-lg rounded-md flex items-center justify-start gap-5 px-5 py-2"
          >
            <div className="w-[60px] h-auto">
              <img
                src={item?.companyIcon}
                alt={item?.companyName}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-bold text-md">{item?.companyName}</h2>
              <p>{item?.ads?.length} Ads</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
