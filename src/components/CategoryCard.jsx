"use client";
import Link from "next/link";

export default function CategoryCard({image, name, ads_count}) {
  return (
    <>
      <Link
        href="/"
        className="col-span-4 lg:col-span-3 flex flex-col md:flex-row items-center justify-center md:justify-start bg-lightBg hover:bg-white px-5 py-4 gap-4 rounded-md"
      >
        <img src={image} alt="" className="w-14 md:ml-5" />
        <div>
          <h3 className="md:text-[17px] font-semibold text-center md:text-left">
            {name}
          </h3>
          <p className="text-xs md:text-sm text-center md:text-left">
            {ads_count} টি অ্যাড
          </p>
        </div>
      </Link>
    </>
  );
}
