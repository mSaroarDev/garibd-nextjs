"use client";
import {
  ClipboardList,
  ContactRound,
  Crown,
  LayoutPanelLeft,
  ListCollapse,
  LogOut,
  MessagesSquare,
  Puzzle,
  Settings,
  Store,
  Wallet,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebarLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/admin/dashboard"
        className={`user-sidebar-link mt-7 ${
          pathname.startsWith("/admin/dashboard") && "user-sidebar-link-active"
        }`}
      >
        <LayoutPanelLeft className="w-5 h-5 text-redColor" />
        <span>ওভারভিউ</span>
      </Link>
      <Link
        href="/admin/chats"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/chats") && "user-sidebar-link-active"
        }`}
      >
        <MessagesSquare className="w-5 h-5 text-redColor" />
        <span>চ্যাট সমুহ</span>
      </Link>
      <Link
        href="/admin/users?page=1"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/users") && "user-sidebar-link-active"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#ff7070"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
        <span>ব্যবহারকারী</span>
      </Link>
      <Link
        href="/admin/category"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/category") && "user-sidebar-link-active"
        }`}
      >
        <Puzzle className="w-5 h-5 text-redColor" />
        <span>ক্যাটেগরী সমূহ</span>
      </Link>
      <Link
        href="/admin/ads?page=1"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/my-ads") && "user-sidebar-link-active"
        }`}
      >
        <ListCollapse className="w-5 h-5 text-redColor" />
        <span>বিজ্ঞাপনসমূহ</span>
      </Link>
      <Link
        href="/admin/membership"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/membership") && "user-sidebar-link-active"
        }`}
      >
        <Crown className="w-5 h-5 text-redColor" />
        <span>মেমবারশিপ</span>
      </Link>
      <Link
        href="/admin/store?page=1"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/store") && "user-sidebar-link-active"
        }`}
      >
        <Store className="w-5 h-5 text-redColor" />
        <span>স্টোর সমূহ</span>
      </Link>
      <Link
        href="/admin/profile"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/profile") && "user-sidebar-link-active"
        }`}
      >
        <ContactRound className="w-5 h-5 text-redColor" />
        <span>এডমিন প্রোফাইল</span>
      </Link>
      <Link
        href="/admin/payments"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/payments") && "user-sidebar-link-active"
        }`}
      >
        <Wallet className="w-5 h-5 text-redColor" />
        <span>পেমেন্ট সমূহ</span>
      </Link>
      <Link
        href="/admin/documents"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/documents") && "user-sidebar-link-active"
        }`}
      >
        <ClipboardList className="w-5 h-5 text-redColor" />
        <span>ডকুমেন্ট ভেরিফাই</span>
      </Link>
      {/* <Link
        href="/admin/settings"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/settings") && "user-sidebar-link-active"
        }`}
      >
        <Settings className="w-5 h-5 text-redColor" />
        <span>সেটিংস</span>
      </Link> */}
      <button
        onClick={() => signOut({ callbackUrl: "/sign-in" })}
        className={`user-sidebar-link`}
      >
        <LogOut className="w-5 h-5 text-redColor" />
        <span>লগ আউট</span>
      </button>
    </>
  );
}
