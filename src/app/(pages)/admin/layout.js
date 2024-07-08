import AdminSidebar from "@components/AdminSidebar";
import UserDashboardNavbar from "@components/UserDashboardNavbar";

export default async function AdminLayout({ children }) {
  return (
    <>
      <div className="bg-white w-full min-h-screen">
        <div className="hidden md:block">
          {/* user sidebar */}
          <AdminSidebar />
        </div>

        {/* user dashbaord navbar */}
        <UserDashboardNavbar />

        {/* user content area */}
        <div className="md:ml-[280px]">
          <div className="mt-14 md:mt-14 p-3 md:p-5">{children}</div>
        </div>
      </div>
    </>
  );
}
