"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  // back button
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.back()}
        className="button-main flex items-center gap-2 mb-5"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>ফিরুন</span>
      </button>
    </>
  );
}
