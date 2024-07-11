"use client";
import { useState } from "react";

export default function PaymentInfoForm({ icon, method }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-white w-[400px] h-auto border border-borderColor p-10 rounded-lg flex flex-col items-center justify-start gap-2">
      <div className="w-[120px] h-auto">
        <img src={icon} alt={method} className="w-full h-full object-contain" />
      </div>

      <div className="how-to-send mt-3">
        <ul className="text-base">
          <li>
            » আপনার {method} Personal Account থেকে 01798456380 এই নম্বরে Send
            Money করুন
          </li>
          <li>» Send Money করার সময় রেফারেন্স হিসেবে আপনার নাম লিখুন</li>
          <li>
            » Send Money সফল হওয়ার পর আপনার Transaction No টি নিচে লিখে সাবমিট
            করুন।
          </li>
        </ul>
      </div>

      <div className="mt-5 w-full">
        <form className="w-full">
          <label>পেমেন্ট Transaction Id</label>
          <input type="text" className="w-full mt-1 mb-3" />
          <label>যে নম্বর থেকে পেমেন্ট করেছেন তার শেষ চার ডিজিট</label>
          <input type="text" className="w-full mt-1 mb-3" />
          <label>রেফারেন্স নং</label>
          <input type="text" className="w-full mt-1" />

          {loading ? (
            <button
              className={`payment-button flex items-center justify-center ${
                method === "bKash"
                  ? "bKash"
                  : method === "Nagad"
                  ? "Nagad"
                  : method === "Rocket"
                  ? "Rocket"
                  : method === "Bank_Transfer"
                  ? "Bank_Transfer"
                  : ""
              }`}
            >
              <span className="button-loader-2"></span>
            </button>
          ) : (
            <button
              className={`payment-button ${
                method === "bKash"
                  ? "bKash"
                  : method === "Nagad"
                  ? "Nagad"
                  : method === "Rocket"
                  ? "Rocket"
                  : method === "Bank_Transfer"
                  ? "Bank_Transfer"
                  : ""
              }`}
            >
              Submit Information
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
