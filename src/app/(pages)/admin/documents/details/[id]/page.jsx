"use client";
import BackButton from "@components/BackButton";
import DocumentDetails from "@components/DocumentDetails";
import Spinner from "@components/spinner/Spinner";
import { adminReview, getDocumentByDocId } from "@libs/api/documents";
import { showError, showSuccess } from "@utils/showToast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function VerifyDocumentPage({ params }) {
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [lastDocument, setLastDocument] = useState(null);
  const fetchDocument = async () => {
    try {
      const res = await getDocumentByDocId(id);
      setLastDocument(res);
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocument();
  }, [router]);

  // review api
  const reviewDoc = async (status) => {
    try {
      setLoading(true);
      const res = await adminReview(id, { status: status });

      if (res.ok) {
        showSuccess("Updated");
        router.back();
        router.refresh();
      } else {
        showError("Failed");
      }
    } catch (error) {
      showError("Internal Server Error");
    } finally {
      setLoading(false);
    }
  };

  // review document status
  const modal = () =>
    Swal.fire({
      title: "Review Document?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      showDenyButton: true,
      denyButtonText: "Reject",
      confirmButtonColor: "#3085d6",
      denyButtonColor: "#d33",
      canceButtonColor: "#ffa500",
      confirmButtonText: "Approve",
    }).then((result) => {
      if (result.isConfirmed) {
        reviewDoc("Verified");
        router.refresh();
      } else if (result.isDenied) {
        reviewDoc("Rejected");
        router.refresh();
      }
    });

  return (
    <div>
      {loading && <Spinner />}
      <div className="flex items-center justify-between">
        <BackButton />

        <div className="flex items-center justify-between gap-5">
          <h1 className="text-[20px] font-semibold">
            {lastDocument?.approval_status}
          </h1>
          {lastDocument?.approval_status !== "Verified" && (
            <button onClick={() => modal()} className="button-main">
              রিভিউ করুন
            </button>
          )}
        </div>
      </div>
      {/* <div className="w-full flex flex-col items-center justify-center shadow-md rounded-xl border border-borderColor p-10">
          <img src="/pending.avif" alt="Pending" className="w-[100px] h-auto" />
          <h2 className="text-center text-xl font-bold mt-5">
            আপনার কাগজপত্র পেন্ডিং অবস্থায় আছে।
          </h2>
        </div> */}

      <DocumentDetails lastDocument={lastDocument} />
    </div>
  );
}
