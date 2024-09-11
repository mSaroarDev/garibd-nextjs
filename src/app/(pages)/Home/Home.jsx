import CategoryCard from "@components/CategoryCard";
import Navbar from "@components/Navbar";
import { getAllCategories } from "@libs/api/category";
import Link from "next/link";
import "./Home.css";

const Homepage = async () => {
  const categories = await getAllCategories();

  return (
    <>
      <header>
        <Navbar />

        <div className="headerBtm">
          <div className="headerSearch w-2/3 lg:w-1/2">
            <div className="location">
              <p>লোকেশন</p>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div className="search">
              <input
                type="search"
                className="focus:outline-0"
                placeholder="গাড়ি, সেবা সার্চ করুন...."
              />
              <i className="fa-solid fa-magnifying-glass text-center my-auto"></i>
            </div>
          </div>
          <div className="heroSlidericon">
            <Link href="/">
              <i className="fa-solid fa-angle-left text-center my-auto"></i>
            </Link>
            <Link href="#">
              <i className="fa-solid fa-angle-right text-center my-auto"></i>
            </Link>
          </div>
        </div>
      </header>

      <div className="catagorySection">
        <h1 className="text-lg font-bold">ক্যাটাগরি অনুযায়ী বিজ্ঞাপন দেখুন</h1>
        <div className="catagories grid grid-cols-12 gap-2">
          {categories &&
            categories?.map((item, i) => <CategoryCard key={i} data={item} />)}
        </div>
      </div>
    </>
  );
};

export default Homepage;
