import { FaRegCircle } from "react-icons/fa";

export default function ContactSearchResult() {
  return (
    <>  
        <div className="flex items-center gap-3 mb-2 p-2 bg-lightBg px-3 py-2 rounded-lg">
                  <FaRegCircle />{" "}
                  <div className="min-w-[30px] h-[30px] rounded-full overflow-hidden bg-yellow-400">
                    <img
                      src="/avatar.webp"
                      alt="name"
                      className="w-full h-full object-cover"
                    />
                  </div>{" "}
                  <p className="text-base font-bold">Himu Khatun</p>
                </div>
    </>
  );
}