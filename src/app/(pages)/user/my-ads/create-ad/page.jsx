import BackButton from "@components/BackButton";
import CreateAdForm from "@components/CreateAdForm";
import PageHeader from "@components/PageHeader";
import { getAllCategories } from "@libs/api/category";
import { getAllCompanies } from "@libs/api/company";
import { Gift } from "lucide-react";

export default async function CreateAd() {
  // fetch categories
  const categories = await getAllCategories();
  const companies = await getAllCompanies();

  return (
    <div className="p-5 mb-14 md:mb-10 lg:mb-5">
      <BackButton />
      <PageHeader text="নতুন বিজ্ঞাপন দিন" icon={<Gift />} />

      <CreateAdForm categories={categories} companies={companies} />
    </div>
  );
}
