import {
  ClipboardList,
  ContactRound,
  Crown,
  LayoutPanelLeft,
  ListCollapse,
  LogOut,
  MessagesSquare,
  Settings,
  Store,
  Wallet,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function UserSidebarLinks() {
  const { pathname} = useLocation();

  return (
    <>
      <Link
        to="/user/dashboard"
        className={`user-sidebar-link mt-7 ${
          pathname.startsWith("/user/dashboard") && "user-sidebar-link-active"
        }`}
      >
        <LayoutPanelLeft className="w-5 h-5 text-redColor" />
        <span>ওভারভিউ</span>
      </Link>
      <Link
        to="/user/messages"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/messages") && "user-sidebar-link-active"
        }`}
      >
        <MessagesSquare className="w-5 h-5 text-redColor" />
        <span>চ্যাট</span>
      </Link>
      <Link
        to="/user/my-ads?page=1"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/my-ads") && "user-sidebar-link-active"
        }`}
      >
        <ListCollapse className="w-5 h-5 text-redColor" />
        <span>আমার বিজ্ঞাপনসমূহ</span>
      </Link>
      <Link
        to="/user/membership"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/membership") && "user-sidebar-link-active"
        }`}
      >
        <Crown className="w-5 h-5 text-redColor" />
        <span>মেমবারশিপ</span>
      </Link>
      <Link
        to="/user/my-store"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/my-store") && "user-sidebar-link-active"
        }`}
      >
        <Store className="w-5 h-5 text-redColor" />
        <span>স্টোর ইনফো</span>
      </Link>
      <Link
        to="/user/my-profile"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/my-profile") && "user-sidebar-link-active"
        }`}
      >
        <ContactRound className="w-5 h-5 text-redColor" />
        <span>আমার প্রোফাইল</span>
      </Link>
      <Link
        to="/user/payments"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/payments") && "user-sidebar-link-active"
        }`}
      >
        <Wallet className="w-5 h-5 text-redColor" />
        <span>পেমেন্ট সমূহ</span>
      </Link>
      <Link
        to="/user/documents"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/documents") && "user-sidebar-link-active"
        }`}
      >
        <ClipboardList className="w-5 h-5 text-redColor" />
        <span>ভেরিফাই</span>
      </Link>
      {/* <Link
        to="/user/settings"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/settings") && "user-sidebar-link-active"
        }`}
      >
        <Settings className="w-5 h-5 text-redColor" />
        <span>সেটিংস</span>
      </Link> */}
      <Link
        to="/"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/settings") && "user-sidebar-link-active"
        }`}
      >
        <LogOut className="w-5 h-5 text-redColor" />
        <span>লগ আউট</span>
      </Link>
    </>
  );
}
