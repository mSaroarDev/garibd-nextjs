"use client";
import DocumentDetails from "@components/DocumentDetails";
import Spinner from "@components/spinner/Spinner";
import UploadDocument from "@components/UploadDocument";
import { getDocumentByDocId } from "@libs/api/documents";
import { useEffect, useState } from "react";

export default function VerifyDocumentPage({ params }) {
  const { id } = params;
  const [loading, setLoading] = useState(true);

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
  }, []);

  return (
    <div className="p-3 lg:p-5">
      {loading && <Spinner />}
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
