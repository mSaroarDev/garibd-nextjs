import BackButton from "@components/BackButton";
import NewCategoryForm from "@components/NewCategoryForm";
import PageHeader from "@components/PageHeader";
import { ArrowLeft, Puzzle } from "lucide-react";
import Link from "next/link";

export default function CategoryPage() {
  return (
    <>
      <BackButton />

      <div className="flex items-center justify-between my-5">
        <PageHeader
          text="নতুন কোম্পানী"
          icon={<Puzzle className="w-5 h-5" />}
        />
      </div>

      <div>
        <NewCategoryForm type="company" />
      </div>
    </>
  );
}
