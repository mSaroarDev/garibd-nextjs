"use client";
import {
  getPurchagePackageInfo,
  updatePayemntInfo,
} from "@libs/api/purchagePackage";
import { showError, showSuccess } from "@utils/showToast";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "./spinner/Spinner";
import convertToBanglaNumber from "@utils/convertNumbertoBangla";

export default function PaymentInfoForm({ icon, method, packageId }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // formik
  const formik = useFormik({
    initialValues: {
      paymentMethod: method,
      amount: "",
      paidFrom: "",
      reference: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await updatePayemntInfo(packageId, values);

        if (res.ok) {
          showSuccess("Payment Under Review");
          router.push("/payment-success");
          router.refresh();
        } else {
          showError("Payment Failed");
        }
      } catch (error) {
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  // get package data
  const [data, setData] = useState();
  const getPackageData = async () => {
    try {
      const res = await getPurchagePackageInfo(packageId);
      setData(res);
    } catch (error) {
      console.log("Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPackageData();
  }, [packageId]);

  return (
    <>
      {loading && <Spinner />}
      <div className="bg-white w-[400px] h-auto border border-borderColor p-10 rounded-lg flex flex-col items-center justify-start gap-2">
        <div className="w-[120px] h-auto">
          <img
            src={icon}
            alt={method}
            className="w-full h-full object-contain"
          />
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

        <div className="flex items-center justify-center my-3">
          <h2 className="font-bold text-lg">
            ৳{" "}
            <span className="text-[30px]">
              {convertToBanglaNumber(data?.package_data?.price)}
            </span>{" "}
            টাকা
          </h2>
        </div>

        <div className="w-full">
          <form onSubmit={formik.handleSubmit} className="w-full">
            <label>পেমেন্ট Transaction Id</label>
            <input
              type="text"
              id="trxId"
              name="trxId"
              onChange={formik.handleChange}
              value={formik.values.trxId}
              className="w-full mt-1 mb-3 uppercase"
            />
            <label>টাকার পরিমান</label>
            <input
              type="text"
              id="amount"
              name="amount"
              onChange={formik.handleChange}
              value={formik.values.amount}
              className="w-full mt-1 mb-3"
            />
            <label>যে নম্বর থেকে পেমেন্ট করেছেন তার শেষ চার ডিজিট</label>
            <input
              type="text"
              id="paidFrom"
              name="paidFrom"
              onChange={formik.handleChange}
              value={formik.values.paidFrom}
              className="w-full mt-1 mb-3"
            />
            {/* <label>রেফারেন্স নং</label>
          <input
            type="text"
            id="reference"
            name="reference"
            onChange={formik.handleChange}
            value={formik.values.reference}
            className="w-full mt-1"
          /> */}

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
                type="submit"
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
    </>
  );
}
