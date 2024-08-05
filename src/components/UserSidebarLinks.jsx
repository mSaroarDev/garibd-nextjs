"use client";
import {
  ClipboardList,
  ContactRound,
  Crown,
  LayoutPanelLeft,
  ListCollapse,
  LogOut,
  MessagesSquare, Store,
  Wallet
} from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserSidebarLinks() {
  const pathname = usePathname();

  return (
    <>
      <Link
        href="/user/dashboard"
        className={`user-sidebar-link mt-3 ${
          pathname.startsWith("/user/dashboard") && "user-sidebar-link-active"
        }`}
      >
        <LayoutPanelLeft className="w-5 h-5 text-redColor" />
        <span>ওভারভিউ</span>
      </Link>
      <Link
        href="/user/chats"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/chats") && "user-sidebar-link-active"
        }`}
      >
        <MessagesSquare className="w-5 h-5 text-redColor" />
        <span>চ্যাট</span>
      </Link>
      <Link
        href="/user/my-ads?page=1"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/my-ads") && "user-sidebar-link-active"
        }`}
      >
        <ListCollapse className="w-5 h-5 text-redColor" />
        <span>আমার বিজ্ঞাপনসমূহ</span>
      </Link>
      <Link
        href="/user/membership"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/membership") && "user-sidebar-link-active"
        }`}
      >
        <Crown className="w-5 h-5 text-redColor" />
        <span>মেমবারশিপ</span>
      </Link>
      <Link
        href="/user/my-store?page=1"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/my-store") && "user-sidebar-link-active"
        }`}
      >
        <Store className="w-5 h-5 text-redColor" />
        <span>স্টোর ইনফো</span>
      </Link>
      <Link
        href="/user/profile"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/profile") && "user-sidebar-link-active"
        }`}
      >
        <ContactRound className="w-5 h-5 text-redColor" />
        <span>আমার প্রোফাইল</span>
      </Link>
      <Link
        href="/user/payments"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/payments") && "user-sidebar-link-active"
        }`}
      >
        <Wallet className="w-5 h-5 text-redColor" />
        <span>পেমেন্ট সমূহ</span>
      </Link>
      <Link
        href="/user/documents"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/documents") && "user-sidebar-link-active"
        }`}
      >
        <ClipboardList className="w-5 h-5 text-redColor" />
        <span>ভেরিফাই</span>
      </Link>
      {/* <Link
        href="/user/settings"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/settings") && "user-sidebar-link-active"
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
