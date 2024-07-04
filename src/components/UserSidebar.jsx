import Link from "next/link";
import UserSidebarLinks from "./UserSidebarLinks";

export default function UserSidebar() {
  return (
    <>
      <div className="w-[280px] fixed top-0 bottom-0 left-0 z-50">
        <div className="w-full h-full border-r border-borderColor">
          <div className="flex flex-col">
            <div className="p-5 mt-5">
              <Link href="/">
                <img src="/logo.svg" className="w-[120px]" />
              </Link>
            </div>

            <UserSidebarLinks />
          </div>
        </div>
      </div>
    </>
  );
}
