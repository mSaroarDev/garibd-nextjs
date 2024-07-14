import PageHeader from "@components/PageHeader";
import { getAllCategories } from "@libs/api/category";
import { Puzzle } from "lucide-react";
import Link from "next/link";

export default async function CategoryPage() {
  // data
  const categories = await getAllCategories();

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeader
          text="ক্যাটেগরী সমূহ"
          icon={<Puzzle className="w-5 h-5" />}
        />

        <Link href="/admin/category/create" className="button-main">নতুন ক্যাটেগরী</Link>
      </div>

      <div className="mt-5 flex items-center gap-5">
        {categories?.map((item, i)=> (
          <Link key={i} href={`/admin/category/${item?._id}`} className="w-[250px] h-[90px] border border-borderColor shadow-md hover:shadow-lg rounded-md flex items-center justify-start gap-5 px-5 py-2">
          <div className="w-[60px] h-auto">
            <img src={item?.categoryIcon} alt={item?.categoryName} className="w-full h-full object-contain" />
          </div>
          <div>
            <h2 className="font-bold text-lg">{item?.categoryName}</h2>
            <p>{item?.ads?.length} Ads</p>
          </div>
        </Link>
        ))}
      </div>
    </>
  );
}
