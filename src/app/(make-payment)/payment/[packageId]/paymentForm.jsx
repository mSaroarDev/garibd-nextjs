"use client";
import PaymentSelection from "@components/PaymentSelection";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentForm({ packageId }) {
  const router = useRouter();

  // selected method
  const [selectedMethod, setSelectedMethod] = useState("");
  const handleSelect = (value) => {
    setSelectedMethod(value);
  };

  // useEffect(() => {
  //   console.log(selectedMethod);
  // }, [selectedMethod]);

  return (
    <>
      <div className="h-screen w-full bg-black/10 flex items-center justify-center p-3 lg:p-5">
        <div className="bg-white w-[400px] h-auto shadow-lg p-5 lg:p-10 rounded-md">
          <h1 className="text-center text-lg font-bold">
            পেমেন্ট মেথড সিলেক্ট করুন
          </h1>
          <p>আপনি যেই মাধ্যমে ডিপোজিট করতে চান তা সিলেক্ট করুন...</p>

          <div className="mt-5">
            <div className="flex flex-col gap-2">
              <PaymentSelection
                packageId={packageId}
                image="/bkash.png"
                methodName={"bKash"}
                handleSelect={handleSelect}
                extraClasses={selectedMethod === "bKash" ? "border-blue-600" : "border-borderColor"}
                selected={selectedMethod === "bKash" ? true : false}
              />
              <PaymentSelection
                packageId={packageId}
                image="/rocket.png"
                methodName={"Rocket"}
                handleSelect={handleSelect}
                extraClasses={selectedMethod === "Rocket" ? "border-blue-600" : "border-borderColor"}
                selected={selectedMethod === "Rocket" ? true : false}
              />
              <PaymentSelection
                packageId={packageId}
                image="/nagad.webp"
                methodName={"Nagad"}
                handleSelect={handleSelect}
                extraClasses={selectedMethod === "Nagad" ? "border-blue-600" : "border-borderColor"}
                selected={selectedMethod === "Nagad" ? true : false}
              />
              <PaymentSelection
                packageId={packageId}
                image="/bank.webp"
                methodName={"Bank_Transfer"}
                handleSelect={handleSelect}
                extraClasses={selectedMethod === "Bank_Transfer" ? "border-blue-600" : "border-borderColor"}
                selected={selectedMethod === "Bank_Transfer" ? true : false}
              />
            </div>
          </div>

          <div className="w-full mt-5">
            <Link
              href={`/payment/${packageId}/${selectedMethod}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-md w-full text-center flex items-center justify-center gap-4"
            >
              <span>Make Payment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => router.back()}
              className="bg-white border border-borderColor px-4 py-2 text-blue-600 rounded-md flex items-center justify-center mt-3 w-full text-center"
            >
              <span>No Thanks</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
