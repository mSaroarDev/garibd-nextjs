import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <>
      <div className="w-full relative flex items-center">
        <input
          type="text"
          className="search-input w-full px-6 py-3 border-borderColor border-[1px] rounded-full shadow-md"
        />
        <button
          type="submit"
          className="absolute px-6 py-2 bg-brandColor text-white rounded-full right-1 top-1 bottom-1 flex items-center gap-3 hover:shadow-md hover:bg-brandColor/90 transition-all duration-150"
        >
          <Search className="w-4 h-4" />
          <span className="hidden md:block">খুজুন</span>
        </button>
      </div>
    </>
  );
}
