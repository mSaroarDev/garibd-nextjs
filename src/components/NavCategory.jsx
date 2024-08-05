import { getAllCompanies } from "@libs/api/company";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function NavCategory() {
  // get all companies
  const data = await getAllCompanies();

  return (
    <>
      <div className="bg-lightBg py-2 px-5 hidden lg:flex items-center justify-center gap-2">
        <span className="font-bold text-[16px]">কোম্পানী সমুহ:</span>{" "}
        {data &&
          data?.slice(0, 6).map((item, i) => (
            <Link
              href="/"
              key={i}
              className="mx-3 font-medium hover:underline hover:text-brandColor">
              {item?.companyName}
            </Link>
          ))}
        <span className="font-bold text-[16px] ml-5">
          <Link href="/companies" className="flex items-center gap-2">
            <span>সকল কোম্পানী সমূহ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </span>
      </div>
    </>
  );
}
