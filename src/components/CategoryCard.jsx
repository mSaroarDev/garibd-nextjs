"use client";
import Link from "next/link";

export default function CategoryCard({ data }) {
  return (
    <>
      <Link
        href={`/category/${data?._id}?category_name=${data?.categoryName}`}
        className="cat1 truck col-span-6 md:col-span-3 lg:col-span-2 px-5 py-2"
      >
        <div className="catImg">
          <img src={data?.categoryIcon} alt="" />
        </div>
        <div className="adTitle_adCount">
          <div className="adTitle">
            <h4>{data?.categoryName}</h4>
          </div>
          <div className="adCount">
            <h6>{data?.ads?.length} এডস</h6>
          </div>
        </div>
      </Link>
    </>
  );
}
