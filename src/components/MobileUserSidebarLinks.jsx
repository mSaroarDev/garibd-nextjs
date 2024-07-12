"use client"
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
import { usePathname } from "next/navigation";

export default function MobileUserSidebaras() {
  const pathname = usePathname()

  return (
    <>
      <a
        href="/user/dashboard"
        className={`user-sidebar-link mt-7 ${
          pathname.startsWith("/user/dashboard") && "user-sidebar-link-active"
        }`}
      >
        <LayoutPanelLeft className="w-5 h-5 text-redColor" />
        <span>ওভারভিউ</span>
      </a>
      <a
        href="/user/chats"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/chats") && "user-sidebar-link-active"
        }`}
      >
        <MessagesSquare className="w-5 h-5 text-redColor" />
        <span>চ্যাট</span>
      </a>
      <a
        href="/user/my-ads?page=1"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/my-ads") && "user-sidebar-link-active"
        }`}
      >
        <ListCollapse className="w-5 h-5 text-redColor" />
        <span>আমার বিজ্ঞাপনসমূহ</span>
      </a>
      <a
        href="/user/membership"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/membership") && "user-sidebar-link-active"
        }`}
      >
        <Crown className="w-5 h-5 text-redColor" />
        <span>মেমবারশিপ</span>
      </a>
      <a
        href="/user/my-store"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/my-store") && "user-sidebar-link-active"
        }`}
      >
        <Store className="w-5 h-5 text-redColor" />
        <span>স্টোর ইনফো</span>
      </a>
      <a
        href="/user/profile"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/profile") && "user-sidebar-link-active"
        }`}
      >
        <ContactRound className="w-5 h-5 text-redColor" />
        <span>আমার প্রোফাইল</span>
      </a>
      <a
        href="/user/payments"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/payments") && "user-sidebar-link-active"
        }`}
      >
        <Wallet className="w-5 h-5 text-redColor" />
        <span>পেমেন্ট সমূহ</span>
      </a>
      <a
        href="/user/documents"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/documents") && "user-sidebar-link-active"
        }`}
      >
        <ClipboardList className="w-5 h-5 text-redColor" />
        <span>ভেরিফাই</span>
      </a>
      {/* <a
        href="/user/settings"
        className={`user-sidebar-link ${
          pathname.startsWith("/user/settings") && "user-sidebar-link-active"
        }`}
      >
        <Settings className="w-5 h-5 text-redColor" />
        <span>সেটিংস</span>
      </a> */}
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
