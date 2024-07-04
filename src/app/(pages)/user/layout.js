import UserSidebar from "@components/UserSidebar";
import { MessagesSquare } from "lucide-react";
import Link from "next/link";

export default function UserLayout({ children }) {
  return (
    <>
      <div className="bg-white w-full min-h-screen">
        <div className="hidden md:block">
          {/* user sidebar */}
          <UserSidebar />
        </div>

        {/* user dashbaord navbar */}
        {/* user topbar */}
        <div className="fixed top-0 right-0 md:left-[280px] w-full md:w-auto bg-white shadow-md py-2 px-5 flex items-center justify-between z-30">
          <div>
            <div className="md:hidden">
              <img src="/logo.svg" className="w-[120px]" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/user/messages"
              className="hidden bg-lightBg px-4 py-2 rounded-md md:flex items-center gap-2 font-semibold"
            >
              <MessagesSquare className="w-4 h-4" />
              <span>Chats</span>
            </Link>
            <button className="button-main">বিজ্ঞাপন দিন</button>
            <div className="avatar">
              <div className="min-w-10 h-10 rounded-full ring ring-primary overflow-hidden">
                <Link href="/">
                  <img
                    src="/avatar.jpg"
                    className="w-full h-full object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* user content area */}
        <div className="md:ml-[280px]">
          <div className="mt-14 md:mt-14">{children}</div>
        </div>
      </div>
    </>
  );
}