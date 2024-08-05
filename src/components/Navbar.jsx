"use client";
import SearchBar from "./SearchBar";
import NavCategory from "./NavCategory";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { getProfile } from "@libs/api/profile";

export default function Navbar() {
  // fixing menu
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <nav id="navbar" className={`bg-body px-5 md:px-10 py-3 text-[16px] w-full transition-all duration-300 ${
          scrolled ? "navbar-scrolled shadow-md" : ""
        }`}>
        <div className="grid grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="col-span-4 md:col-span-3 flex items-center justify-start">
            <Link href='/'><img src="/logo.svg" className="w-[120px]" /></Link>
          </div>
          <div className="col-span-8 md:col-span-6 flex items-center justify-center">
            <SearchBar />
          </div>
          <div className="hidden md:block col-span-3">
            <div className="w-full flex items-center justify-end gap-5">
              <Link href='/explore-ads' className="font-semibold underline">সকল বিজ্ঞাপন সমূহ</Link>
              <Link href='/sign-in' className="hidden lg:block bg-brandColor text-white px-5 py-2 rounded-lg">বিজ্ঞাপন দিন</Link>
              <Link href='/sign-in' className="block lg:hidden bg-brandColor text-white px-5 py-2 rounded-full">
                <Plus className="w-5 h-5" />
              </Link>
            </div> 
          </div>
        </div>
      </nav>
    </>
  );
}
