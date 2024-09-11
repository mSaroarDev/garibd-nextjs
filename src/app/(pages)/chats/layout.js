import MobileNav from "@components/MobileNav";
import UserDashboardNavbar from "@components/UserDashboardNavbar";
import ChatSidebar from "./components/Sidebar";

export default function layout({ children }) {
  return (
    <>
      <div className="bg-white w-full min-h-[90vh]">
        <div className="hidden md:block">
          {/* user sidebar */}
          <ChatSidebar />
        </div>

        {/* user dashbaord navbar */}
        <UserDashboardNavbar />

        {/* user content area */}
        <div className="md:ml-[280px]">
          <div className="mt-14 md:mt-14">
            {children}

            <MobileNav />
          </div>
        </div>
      </div>
    </>
  );
}
