import { EyeOff, Pen, SquareCheckBig, Trash } from "lucide-react";
import { Link } from "react-router-dom";

export default function MyListingAdCard() {
  return (
    <>
      <Link to='/' className="w-full h-[160px] md:h-[140px] bg-white border border-borderColor flex items-start gap-2 rounded-md overflow-hidden hover:shadow-md transition-all duration-300">
        <div className="w-[200px] h-full bg-black">
          <img
            src="/image-3.jpeg"
            alt="name"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-3">
          <h3 className="text-[15px] md:text-[17px] font-semibold">
            TATA 407 LPT CNG 2020 model NEW CONDITION
          </h3>
          <p>in Category Tata</p>
          <p className="text-[15px] md:text-[15px] font-bold mt-1">
            ৳ 2,50,000/-
          </p>
          <div className="mt-3 flex items-center gap-1">
            <button
              className="rounded-sm bg-purple-700 text-white p-2"
              title="Edit this Ad"
            >
              <Pen className="w-3 h-3" />
            </button>
            <button
              className="rounded-sm bg-red-500 text-white p-2"
              title="Delete"
            >
              <Trash className="w-3 h-3" />
            </button>
            <button
              className="rounded-sm bg-brandColor text-white p-2"
              title="Mark As Sold"
            >
              <SquareCheckBig className="w-3 h-3" />
            </button>
            <button
              className="rounded-sm bg-blue-600 text-white p-2"
              title="Push Ad"
            >
              <EyeOff className="w-3 h-3" />
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
