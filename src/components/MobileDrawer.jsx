import { CircleEllipsis } from "lucide-react";
import MobileUserSidebaras from "./MobileUserSidebarLinks";

export default function MobileDrawer() {
  return (
    <div className="inline-flex">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer-4" className="drawer-button ">
            <CircleEllipsis className="w-6 h-6" />
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 z-50 pt-14">
            {/* Sidebar content here */}
            <MobileUserSidebaras />
          </ul>
        </div>
      </div>
    </div>
  );
}
