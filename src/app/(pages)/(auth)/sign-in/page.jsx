import SignInForm from "@components/SignInForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-body px-3">
        <div className="bg-lightBg w-full max-w-[400px] border-[1px] border-borderColor rounded-xl p-7">
          <h2 className="font-bold text-[22px] text-center">সাইন ইন করুন</h2>
          <div className="login__box mt-5">
            <SignInForm />
          </div>
          <div className="mt-10 text-center">
            কোন অ্যাকাউন্ট নেই?{" "}
            <Link href="/register" className="text-blue-600">
              অ্যাকাউন্ট তৈরী করুন
            </Link>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <Link href="/" className="text-brandColor flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>হোমপেজে ফিরুন</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
