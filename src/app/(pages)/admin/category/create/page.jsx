import NewCategoryForm from "@components/NewCategoryForm";
import PageHeader from "@components/PageHeader";
import { ArrowLeft, Puzzle } from "lucide-react";
import Link from "next/link";

export default function CategoryPage() {
  return (
    <>
      <Link
        href="/admin/category"
        className="button-main flex items-center gap-2 w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>ফিরুন</span>
      </Link>

      <div className="flex items-center justify-between mt-5">
        <PageHeader
          text="নতুন ক্যাটেগরী"
          icon={<Puzzle className="w-5 h-5" />}
        />
      </div>

      <div>
        <NewCategoryForm />
      </div>
    </>
  );
}
