import UserDashboardNavbar from "@components/UserDashboardNavbar";
import UserSidebar from "@components/UserSidebar";

export default async function UserLayout({ children }) {
  return (
    <>
      <div className="bg-white w-full min-h-[90vh]">
        <div className="hidden md:block">
          {/* user sidebar */}
          <UserSidebar />
        </div>

        {/* user dashbaord navbar */}
        <UserDashboardNavbar />

        {/* user content area */}
        <div className="md:ml-[280px]">
          <div className="mt-14 md:mt-14">{children}</div>
        </div>
      </div>
    </>
  );
}
