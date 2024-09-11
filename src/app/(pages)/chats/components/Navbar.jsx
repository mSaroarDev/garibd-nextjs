import Image from "next/image";
import Link from "next/link";
import { TbDoorExit } from "react-icons/tb";

export default function Navbar() {
  return (
    <>
      <div className="bg-body py-3 px-5 lg:px-10 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-md">
        <Link href="/chat/home">
          <h1 className="text-xl font-bold">ChatBook</h1>{" "}
        </Link>

        <div className="flex items-center gap-10">
          <Link
            href="/chat/start"
            className="bg-brand text-white px-2 py-1 rounded-md text-sm"
          >
            New Chat
          </Link>
          <button className="text-[18px]">
            <TbDoorExit />
          </button>
          <Link
            href="/my-profile"
            className="w-[50px] h-[50px] bg-yellow-600 rounded-full overflow-hidden"
          >
            <img src="/avatar.webp" className="w-full h-full object-cover" />
          </Link>
        </div>
      </div>
    </>
  );
}
