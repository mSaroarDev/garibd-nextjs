"use client";
import PricingCardParticles from "./PricingCardParticles";
import Link from "next/link";
import { ArrowRight, PenBox, Trash2 } from "lucide-react";
import { deletePackage } from "@libs/api/package";
import { showError, showSuccess } from "@utils/showToast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./spinner/Spinner";

export default function MembershipCard({ item, profile }) {
  // utils
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // delete the package
  const handleDelete = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      try {
        setLoading(true);
        const res = await deletePackage(item?._id);

        if (res.ok) {
          showSuccess("Deleted successfully");
          router.refresh();
        } else {
          showError("Delete Failed");
        }
      } catch (error) {
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="w-[290px] h-auto rounded-lg bg-[#FAF4EB]/80 shadow-md border border-borderColor/50 flex flex-col items-start justify-between overflow-hidden">
        <div className="w-full text-center">
          <h2 className="text-[17px] font-bold text-black mt-5">
            {item?.name}
          </h2>
          <h2 className="text-[40px] mb-6 font-bold">
            <span className="text-[30px]">৳</span> {item?.price}/-{" "}
            <span className="text-[16px]">BDT</span>
          </h2>

          <div className="particles px-7 py-4 mt-4">
            <PricingCardParticles value={item.value} duration={item.duration} />
          </div>
        </div>
        <div className="p-4 w-full">
          {!profile ? <>
            <button
              className="bg-brandColor w-full text-white px-4 py-2 rounded-md inline-flex items-center justify-center gap-5"
            >
              <span>মুল্য {item?.price}/- টাকা মাত্র</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </> : profile.role === "Admin" ? (
            <div className="flex items-center justify-between gap-2">
              <Link
                href={`/admin/membership/motocycles-and-parts/edit/${item._id}`}
                className="w-full bg-blue-600 px-4 py-2 rounded-sm text-white font-medium text-center flex items-center justify-center gap-2"
              >
                <PenBox className="w-4 h-4" />
                <span>এডিট</span>
              </Link>

              <button
                onClick={handleDelete}
                className="w-full bg-red-600 px-4 py-2 rounded-sm text-white font-medium flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                <span className="mt-1">ডিলিট</span>
              </button>
            </div>
          ) : (
            <Link
              href={`/user/membership/purchase/${item?._id}`}
              className="bg-brandColor w-full text-white px-4 py-2 rounded-md inline-flex items-center justify-center gap-5"
            >
              <span>কিনুন</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
