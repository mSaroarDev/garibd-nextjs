import CategoryCard from "@components/CategoryCard";
import { getAllCompanies } from "@libs/api/company";
import { BookmarkCheck } from "lucide-react";

export default async function CompaniesPage() {
  //fetch categories
  const companies = await getAllCompanies();

  return (
    <>
      {/* brows by company */}
      <section className="py-10 md:py-20 bg-body px-5">
        <main>
          <div className="section__header flex items-center justify-center mb-10">
            <h1 className="font-bold text-[20px] flex items-center gap-4">
              <BookmarkCheck className="w-5 h-5" />
              <span>কোম্পানী অনুযায়ী অ্যাড দেখুন</span>
            </h1>
          </div>

          {/* main content */}
          <div className="grid grid-cols-12 gap-2 md:gap-5">
            {companies &&
              companies.map((item) => (
                <CategoryCard key={item?._id} data={item} />
              ))}
          </div>
        </main>
      </section>
      {/* brows by company */}
    </>
  );
}
