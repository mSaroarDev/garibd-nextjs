import SignUpForm from "@components/SignUpForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-body px-3">
        <div className="bg-lightBg w-full max-w-[400px] border-[1px] border-borderColor rounded-xl p-7 mb-10 md:mb-0">
          <h2 className="font-bold text-[22px] text-center">
            নতুন অ্যাকাউন্ট খুলুন
          </h2>
          <div className="login__box mt-5">
            <SignUpForm />
          </div>
          <div className="mt-7 text-center">
            পুরাতন অ্যাকাউন্ট আছে?{" "}
            <Link href="/sign-in" className="text-blue-600">
              লগিন করুন
            </Link>
          </div>
          <div className="mt-3 flex items-center justify-center">
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
