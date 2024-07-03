"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Toyota",
    link: "/",
  },
  {
    id: 2,
    name: "Ashok Layland",
    link: "/",
  },
  {
    id: 3,
    name: "TATA",
    link: "/",
  },
  {
    id: 4,
    name: "Honda",
    link: "/",
  },
  {
    id: 5,
    name: "Hitachi",
    link: "/",
  },
  {
    id: 6,
    name: "Hino",
    link: "/",
  },
];

export default function NavCategory() {
  return (
    <>
      <div className="bg-lightBg py-2 px-5 hidden lg:flex items-center justify-center gap-2">
        <span className="font-bold text-[16px]">ফিচার্ড ক্যাটেগরীসমূহ:</span>{" "}
        {data &&
          data.map((item, i) => (
            <Link href="/"
              key={i}
              className="mx-3 font-medium hover:underline hover:text-brandColor">
              {item?.name}
            </Link>
          ))}
          <span className="font-bold text-[16px] ml-5">
            <Link href="/all-categories" className="flex items-center gap-2">
                <span>সকল ক্যাটেগরী সমূহ</span>
                <ArrowRight className="w-4 h-4" />
            </Link>
          </span>
      </div>
    </>
  );
}
