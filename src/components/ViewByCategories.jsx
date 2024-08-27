import { getAllCategories } from "@libs/api/category";
import CategoryCard from "./CategoryCard";

export default async function ViewByCategories() {
  const categories = await getAllCategories();

  return (
    <>
      {/* main content */}
      <div className="grid grid-cols-12 gap-2 md:gap-5">
        {categories &&
          categories.map((item) => (
            <CategoryCard key={item?._id} data={item} />
          ))}
      </div>
    </>
  );
}
