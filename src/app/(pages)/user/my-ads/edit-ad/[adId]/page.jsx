import BackButton from "@components/BackButton";
import CreateAdForm from "@components/CreateAdForm";
import EditAdForm from "@components/EditAdForm";
import PageHeader from "@components/PageHeader";
import { getSingleAdInfo } from "@libs/api/ad";
import { getAllCategories } from "@libs/api/category";
import { getAllCompanies } from "@libs/api/company";
import { Gift } from "lucide-react";

export default async function EditAd({params}) {
  // get data
  const adData = await getSingleAdInfo(params?.adId);

  // fetch categories
  const categories = await getAllCategories();
  const companies = await getAllCompanies();

  return (
    <div className="p-5 mb-14 md:mb-10 lg:mb-5">
      <BackButton />
      <PageHeader text="বিজ্ঞাপন এডিট করুন" icon={<Gift />} />

      <EditAdForm categories={categories} companies={companies} adData={adData} />
    </div>
  );
}
