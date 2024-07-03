import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-body px-3">
        <div className="bg-lightBg w-full max-w-[400px] border-[1px] border-borderColor rounded-xl p-7">
          <h2 className="font-bold text-[22px] text-center">সাইন ইন করুন</h2>
          <div className="login__box mt-5">
            <form className="w-full flex flex-col gap-3">
              <input type="text" placeholder="Mobile No / Email" />
              <input type="text" placeholder="Password" />
              <button className="button-main" type="submit">
                সাইন ইন
              </button>
              <p className="text-right my-2">
                <Link href="/">পাসওয়ার্ড ভুলে গেছেন?</Link>
              </p>
              <p className="my-2 text-center">সোসিয়াল লগিন</p>
              <div className="flex items-center justify-between gap-5">
                <button
                  type="button"
                  className="bg-blue-800 text-white flex items-center justify-center gap-4 w-full p-2 rounded-sm shadow-sm"
                >
                  <img src="/facebook.png" alt="" className="w-2" />
                  <span>ফেইসবুক</span>
                </button>

                <button
                  type="button"
                  className="bg-white text-black flex items-center justify-center gap-4 w-full p-2 rounded-sm shadow-sm"
                >
                  <img src="/google.svg" className="w-5" />
                  <span>গুগল</span>
                </button>
              </div>
            </form>
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
