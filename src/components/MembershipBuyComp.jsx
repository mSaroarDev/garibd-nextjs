"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import PricingCardParticles from "./PricingCardParticles";
import Link from "next/link";
import { useState } from "react";
import { createPurchasePackage } from "@libs/api/purchagePackage";
import { showError, showSuccess } from "@utils/showToast";
import Spinner from "./spinner/Spinner";

export default function MembershipBuyComp({ packageData }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // create a purchase
  const handlePurchase = async () => {
    try {
      setLoading(true);
      const res = await createPurchasePackage(packageData);

      if (res.ok) {
        // router.push(`/user/membership/purchase/payment/${packageData._id}`);
        router.push(`/payment`);
        router.refresh();
      } else {
        showError("দুঃখিত। একটি সমস্যা হয়েছে।");
      }
    } catch (error) {
      showError("অভ্যন্তরীন সার্ভার ত্রুটি।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <button
        onClick={() => router.back()}
        className="button-main flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>ব্যাক করুন</span>
      </button>

      <div className="border border-borderColor rounded-lg mt-5">
        <div className="bg-lightBg px-4 py-2 font-bold text-base">
          মেমবারশীপ কিনুন
        </div>

        <div className="">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-5 flex items-center justify-center">
              <div className="w-[350px] h-full">
                <img
                  src="/payment.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 px-10 py-5 border-t md:border-l border-borderColor">
              <h2 className="font-bold text-base">আপনার প্যাকেজ বিবরন</h2>

              <div>
                <h2 className="mt-5 font-bold text-lg">
                  প্যাকেজের নামঃ {packageData.name}
                </h2>
                <p className="text-[16px] font-semibold">
                  ক্যাটেগরীঃ{" "}
                  {packageData.category === "parts-and-motorcycle"
                    ? "মোটর সাইকেল এবং গাড়ির যন্ত্রাংশ"
                    : "সকল গাড়ি"}
                </p>
                <div className="border border-borderColor w-fit px-4 py-2 my-2 rounded-lg">
                  <PricingCardParticles
                    duration={packageData.duration}
                    value={packageData.value}
                  />
                </div>
                <p className="text-3xl lg:text-[35px] font-bold mt-5">
                  ৳ {packageData.price}/- টাকা
                </p>

                <button
                  onClick={handlePurchase}
                  className="button-main inline-block mt-5"
                >
                  পেমেন্ট করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
