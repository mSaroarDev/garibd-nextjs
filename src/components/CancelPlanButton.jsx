"use client";

import { cancelCurrentPlan } from "@libs/api/purchagePackage";
import { showError, showSuccess } from "@utils/showToast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./spinner/Spinner";

export default function CancelPlanButton({ data }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCancle = async () => {
    const confirmed = window.confirm("Are you sure you want to cancel plan?");

    if (confirmed) {
      try {
        setLoading(true);
        const res = await cancelCurrentPlan(data?._id);

        if (res.ok) {
          showSuccess("Plan Cancled");
          router.refresh();
        } else {
          showError("Plan cancle failed");
        }
      } catch (error) {
        console.log(error);
        showError("Internal Server Error");
      }finally{
        setLoading(false)
      }
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <button
        onClick={handleCancle}
        className="bg-red-600 text-white px-4 py-2 rounded-md"
      >
        প্লান বাতিল করুন
      </button>
    </>
  );
}
