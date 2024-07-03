import { Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecomendedAdCard() {
  return (
    <>
      <Link to="/" className="ads__card h-fit md:h-[340px] col-span-6 md:col-span-3 bg-white border-[1px] border-borderColor rounded-md shadow-md flex flex-col items-start justify-between hover:shadow-lg">
        <div>
          <div className="image w-full h-[180px] object-cover overflow-hidden relative">
            <img
              src="/image.jpeg"
              alt="Ads title"
              className="w-full h-full object-cover rounded-t-md"
            />
            <span className="absolute top-2 right-2 bg-white h-10 w-10 rounded-full flex items-center justify-center">
                <img src="/premium-icon.svg" className="w-5 h-5" />
            </span>
          </div>
          <div className="px-5 py-3">
            <h1 className="text-[14px] md:text-[17px] font-semibold">
              TATA 407 LPT CNG 2020 model NEW CONDITION
            </h1>
            <p className="text-[17px] md:text-[18px] font-bold mt-2">৳ 2,50,000/-</p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between text-[13px] py-2 px-3">
          <p className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>নাটোর, রাজশাহী</span>
          </p>

          <p className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>১০ দিন</span>
          </p>
        </div>
      </Link>
    </>
  );
}
