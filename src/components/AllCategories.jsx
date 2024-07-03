import { LayoutPanelLeft } from "lucide-react";
import { Link } from "react-router-dom";

const listCategories = [
  {
    id: 1,
    name: "ট্রাক",
  },
  {
    id: 2,
    name: "পিকাপ",
  },
  {
    id: 3,
    name: "কাভার ভ্যান",
  },
  {
    id: 4,
    name: "জ্যাক",
  },
  {
    id: 5,
    name: "ড্রাম ট্র্যাক",
  },
  {
    id: 6,
    name: "ট্রাক্টর",
  },
  {
    id: 7,
    name: "বাস",
  },
  {
    id: 8,
    name: "প্রাইভেট কার",
  },
  {
    id: 9,
    name: "হাইএস",
  },
  {
    id: 10,
    name: "মোটরসাইকেল",
  },
  {
    id: 1,
    name: "গাড়ির যন্ত্রাংশ",
  },
  {
    id: 2,
    name: "অন্যান্য",
  },
];

export default function AllCategories() {
  return (
    <>
      <div className="flex flex-col">
        <div className="px-7 py-2 border-b-[1px] border-borderColor bg-lightBg font-bold flex items-center gap-3">
        <LayoutPanelLeft className="w-5 h-5" />
            <span>ক্যাটেগরী সমূহ</span>
        </div>
        {listCategories &&
          listCategories.map((item, i) => (
            <Link
              key={i}
              className="px-7 py-2 border-b-[1px] border-borderColor hover:bg-lightBg transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
      </div>
    </>
  );
}
