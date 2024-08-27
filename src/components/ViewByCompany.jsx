import { getAllCompanies } from "@libs/api/company";
import CategoryCard from "./CategoryCard";

export default async function ViewByCompany() {
    //fetch categories
  const companies = await getAllCompanies();


  return (
    <>
         <div className="grid grid-cols-12 gap-2 md:gap-5">
            {companies &&
              companies.map((item) => (
                <CategoryCard key={item?._id} data={item} />
              ))}
          </div>
    </>
  );
}