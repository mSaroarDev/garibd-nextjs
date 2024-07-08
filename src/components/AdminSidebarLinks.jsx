"use client"
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
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebarLinks() {
  const pathname = usePathname()

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
        href="/admin/my-store"
        className={`user-sidebar-link ${
          pathname.startsWith("/admin/my-store") && "user-sidebar-link-active"
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
        onClick={()=> signOut({callbackUrl: "/sign-in"})}
        className={`user-sidebar-link`}
      >
        <LogOut className="w-5 h-5 text-redColor" />
        <span>লগ আউট</span>
      </button>
    </>
  );
}
