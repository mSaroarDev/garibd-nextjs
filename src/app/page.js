import AdminAdImage from "@components/AdminAdImage";
import Footer from "@components/Footer";
import HomeMobileNav from "@components/HomeMobileNav";
import Navbar from "@components/Navbar";
import NavCategory from "@components/NavCategory";
import { BookmarkCheck } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  //fetch categories
  // const categories = await getAllCategories();
  // const companies = await getAllCompanies();

  // featured ad
  // const featuredAdsArray = await featuredAds();

  return (
    <>
      <Navbar />
      <NavCategory />

      <AdminAdImage />

      <section>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12">
            {/* <Slideshow featuredAdsArray={featuredAdsArray} /> */}
          </div>
        </div>
      </section>

      {/* premium featured ads section */}
      <section className="py-10 md:py-20 bg-body px-5">
        <main>
          <div className="section__header flex items-center justify-center mb-10">
            <h1 className="font-bold text-[20px] flex items-center gap-4">
              <BookmarkCheck className="w-5 h-5" />
              <span>ক্যাটেগরী অনুযায়ী অ্যাড দেখুন</span>
            </h1>
          </div>

          {/* main content */}
          {/* <div className="grid grid-cols-12 gap-2 md:gap-5">
            {categories &&
              categories.map((item) => (
                <CategoryCard key={item?._id} data={item} />
              ))}
          </div> */}
        </main>
      </section>
      {/* premium featured ads section end */}

      {/* brows by company */}
      <section className="py-10 md:py-20 bg-body px-5">
        <main>
          <div className="section__header flex items-center justify-center mb-10">
            <h1 className="font-bold text-[20px] flex items-center gap-4">
              <BookmarkCheck className="w-5 h-5" />
              <span>কোম্পানী অনুযায়ী অ্যাড দেখুন</span>
            </h1>
          </div>

          {/* main content */}
          <div className="grid grid-cols-12 gap-2 md:gap-5">
            {/* {companies &&
              companies.map((item) => (
                <CategoryCard key={item?._id} data={item} />
              ))} */}
          </div>
        </main>
      </section>
      {/* brows by company */}

      {/* buy and sell section start */}
      <section className="py-10 md:py-20 px-5 bg-white">
        <main>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 p-5">
              <div className="bg-lightBg rounded-md p-5 border-[1px] border-borderColor flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
                <img src="/car-sale.png" alt="" className="w-[150px]" />
                <div>
                  <h1 className="font-bold text-[18px] mb-2">
                    পুরোনো গাড়ি বিক্রয় করুন. <br /> এবং নতুন গাড়ি কিনুন
                  </h1>
                  <p>
                    যদি আপনার অপ্রয়োজনীয় পুরাতন গাড়ি থাকে তাহলে তা বিক্রয় করুন।
                    এবং নতুন একটি কিনুন।
                  </p>
                  <Link
                    href="/"
                    className="bg-brandColor px-4 py-2 text-white rounded-md inline-block mt-3"
                  >
                    বিক্রয়ের অ্যাড দিন
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 p-5">
              <div className="bg-lightBg rounded-md p-5 border-[1px] border-borderColor flex flex-col md:flex-row items-center justify-center md:justify-start gap-6">
                <img src="/earn.png" alt="" className="w-[120px]" />
                <div>
                  <h1 className="font-bold text-[18px] mb-2">
                    গাড়িবিডি থেকে <br /> And make you happy
                  </h1>
                  <p>
                    You can earn money from GariBD. Just join our affiliate
                    programme and start earning.
                  </p>
                  <Link
                    href="/"
                    className="bg-brandColor px-4 py-2 text-white rounded-md inline-block mt-3"
                  >
                    Start Earning
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      {/* buy and sell section end */}

      {/* total stats start */}
      <section className="bg-body py-10 md:py-20 px-5">
        <main>
          <div className="grid grid-cols-12 gap-3 md:gap-7">
            <div className="col-span-6 md:col-span-4 lg:col-span-3 bg-[#EAEBF9] rounded-md shadow-md p-3 md:p-5 flex flex-col items-center justify-center">
              <h2 className="text-[40px] font-bold">10,000+</h2>
              <p className="text-[18px] font-medium">সকল বিজ্ঞাপন সমূহ</p>
            </div>

            <div className="col-span-6 md:col-span-4 lg:col-span-3 bg-[#FAF4EB] rounded-md shadow-md p-3 md:p-5 flex flex-col items-center justify-center">
              <h2 className="text-[40px] font-bold">150+</h2>
              <p className="text-[18px] font-medium">নতুন বিজ্ঞাপন</p>
            </div>

            <div className="col-span-6 md:col-span-4 lg:col-span-3 bg-[#F4F9EB] rounded-md shadow-md p-3 md:p-5 flex flex-col items-center justify-center">
              <h2 className="text-[40px] font-bold">250+</h2>
              <p className="text-[18px] font-medium">প্রিমিয়াম সদস্য</p>
            </div>

            <div className="col-span-6 md:col-span-4 lg:col-span-3 bg-[#EAEBF9] rounded-md shadow-md p-3 md:p-5 flex flex-col items-center justify-center">
              <h2 className="text-[40px] font-bold">1000+</h2>
              <p className="text-[18px] font-medium">প্রিমিয়াম বিজ্ঞাপন</p>
            </div>
          </div>
        </main>
      </section>
      {/* total stats end */}

      <HomeMobileNav />
      <Footer />
    </>
  );
}
