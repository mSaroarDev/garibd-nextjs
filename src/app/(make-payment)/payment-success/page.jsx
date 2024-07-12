"use client";
import Counter from "@components/Counter";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/user/payments");
    }, 4000);
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-black/10 flex items-center justify-center">
        <div className="bg-white w-[380px] h-auto shadow-lg p-5 rounded-md">
          <h2 className="font-bold text-[22px] text-center">পেমেন্ট ভেরিফাই</h2>

          <div className="flex flex-col items-center justify-center gap-4 login mt-10 uppercase text-sm">
            <div className="">
              <div className="flex flex-col gap-5 items-center justify-center w-full text-green-500">
                <img src="./check.png" className="w-36 h-auto" alt="check" />

                <span className="text-2xl text-green-600 font-bold">
                  Success
                </span>
                <p className="text-gray-600 capitalize mb-10 -mt-5 text-center">
                  আপনার পেমেন্টটি রিভিউ অবস্থায় আছে। পেমেন্ট যাচাই শেষে আপনার
                  পেকেজটি সয়ংক্রিয় ভাবে ড্যাশবোর্ডে ‍যুক্ত হয়ে যাবে
                </p>
              </div>
            </div>

            <Counter />

            <Link
              href={"/user/payments"}
              type="submit"
              className="bg-[#005C9D] py-2 w-full uppercase text-white rounded-md mt-3 text-center"
            >
              Go to Payments Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
