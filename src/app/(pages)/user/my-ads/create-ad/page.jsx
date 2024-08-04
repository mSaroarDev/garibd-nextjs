import BackButton from "@components/BackButton";
import CreateAdForm from "@components/CreateAdForm";
import PageHeader from "@components/PageHeader";
import { getAllCategories } from "@libs/api/category";
import { getAllCompanies } from "@libs/api/company";
import { getProfile } from "@libs/api/profile";
import { authOptions } from "@libs/authOptions";
import { Gift } from "lucide-react";
import { getServerSession } from "next-auth";

export default async function CreateAd() { 
  // fetch categories
  const session = await getServerSession(authOptions);
  const profile = await getProfile(session?.user?._id);
  const categories = await getAllCategories();
  const companies = await getAllCompanies();

  return (
    <div className="p-5 mb-14 md:mb-10 lg:mb-5">
      <BackButton />
      <PageHeader text="নতুন বিজ্ঞাপন দিন" icon={<Gift />} />

      <CreateAdForm categories={categories} companies={companies} profile={profile} />
    </div>
  );
}
