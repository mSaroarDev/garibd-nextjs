"use client"
import CompleteProfileForm from "@components/CompleteProfileForm";
import { useUserInfo } from "@utils/useUserInfo";
import { ArrowLeft } from "lucide-react";

export default function CompleteProfilePage() {
    const currUser = useUserInfo();
    
  return (
    <>
        <div className="py-5 mb-10 lg:mb-0 lg:py-0 min-h-screen w-full flex items-start lg:items-center justify-center">
        <main className="shadow-lg p-5 rounded-xl">
            <div className="flex items-center justify-between">
                <button className="button-main flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    <span>ফিরুন</span>
                </button>
            </div>

            <div className="mt-7">
                <h1 className="font-bold text-xl mb-4">প্রোফাইল সম্পন্ন করুন</h1>

                <CompleteProfileForm />
            </div>
        </main>
        </div>
    </>
  );
}