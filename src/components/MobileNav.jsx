"use client"
import { CircleUserRound, MessageSquareText, Plus, Search } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <>
      <div className="w-full fixed bottom-0 block md:hidden bg-brandColor px-10 py-3">
        <div className="w-full flex items-center justify-between text-white">
          <Link href="/" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
          <Link href="/">
            <Search className="w-6 h-6" />
          </Link>
          <Link href="/" className="bg-blue-600 text-white p-3 rounded-full flex items-center justify-center -mt-5">
            <Plus className="w-6 h-6" />
          </Link>
          <Link href="/">
            <MessageSquareText className="w-6 h-6" />
          </Link>
          <Link href="/sign-in">
            <CircleUserRound className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </>
  );
}
