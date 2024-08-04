import BackButton from "@components/BackButton";
import CreateAdForm from "@components/CreateAdForm";
import EditAdForm from "@components/EditAdForm";
import PageHeader from "@components/PageHeader";
import { getSingleAdInfo } from "@libs/api/ad";
import { getAllCategories } from "@libs/api/category";
import { getAllCompanies } from "@libs/api/company";
import { getProfile } from "@libs/api/profile";
import { authOptions } from "@libs/authOptions";
import { Gift } from "lucide-react";
import { getServerSession } from "next-auth";

export default async function EditAd({ params }) {
  // fetch categories
  const session = await getServerSession(authOptions);
  const profile = await getProfile(session?.user?._id);
  
  // get data
  const adData = await getSingleAdInfo(params?.adId);

  // fetch categories
  const categories = await getAllCategories();
  const companies = await getAllCompanies();

  return (
    <div className="p-5 mb-14 md:mb-10 lg:mb-5">
      <BackButton />
      <PageHeader text="বিজ্ঞাপন এডিট করুন" icon={<Gift />} />

      <EditAdForm
        categories={categories}
        companies={companies}
        adData={adData}
        profile={profile}
      />
    </div>
  );
}
