"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <nav id="navbar" className={`bg-body px-3 md:px-5 py-3 text-[16px] w-full transition-all duration-300 ${
          scrolled ? "navbar-scrolled shadow-md" : ""
        }`}>
        <div class="headerTop">
          <div class="logo">
            <Link href="/">
              <img src="/logo transparent.png" alt="" />
            </Link>
          </div>
          
          <div class="headerTopNav hidden lg:block">
            <ul>
              <li class="nav1">
                <Link href="/">হোম</Link>
              </li>
              <li class="nav2">
                <Link href="/explore-ads">সকল বিজ্ঞাপন</Link>
              </li>
              <li class="nav3">
                <Link href="/packages">প্যাকেজ সমূহ</Link>
              </li>
              <li class="nav4">
                <Link href="/stores">স্টোর সমূহ</Link>
              </li>
              <li class="nav5">
                <Link href="/public-posts">পাবলিক পোষ্ট</Link>
              </li>
              <li class="nav5">
                <Link href="/services">সার্ভিস সমূহ</Link>
              </li>
            </ul>
          </div>

          <div class="lang_IconSec hidden lg:flex">
            <div class="language">
              <select name="" id="">
                <option class="eng" value="">
                  English
                </option>
                <option class="ben" value="">
                  বাংলা
                </option>
              </select>
            </div>

            <div class="liveChat hidden lg:flex">
              <a class="topicon flex" href="#">
                <img src="/chat black.png" alt="" />
              </a>
            </div>
            <div class="account hidden lg:flex">
              <Link href="/sign-in" class="topicon flex">
                {" "}
                <img src="/user2 black.png" alt="" />
              </Link>
            </div>
          </div>

          <Link href="/create-ads" id="" class="postAds">
            <img src="/catagory/animation/add-1--unscreen.gif" alt="" />
            <p className="hidden md:block">বিজ্ঞাপন পোষ্ট করুন</p>
            <p className="block md:hidden">বিজ্ঞাপন দিন</p>
          </Link>
        </div>
      </nav>
    </>
  );
}
