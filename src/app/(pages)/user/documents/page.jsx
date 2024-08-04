import UploadDocument from "@components/UploadDocument";
import { getDocuments } from "@libs/api/documents";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";

export default async function VerifyDocumentPage() {
  const session = await getServerSession(authOptions);

  // get documents
  const documents = await getDocuments(session?.user?.id);
  const lastDocument = documents && documents[0];

  if (lastDocument?.approval_status === "Pending") {
    return (
      <div className='p-3 lg:p-5'>
        <div className="w-full flex flex-col items-center justify-center shadow-md rounded-xl border border-borderColor p-10">
          <img src="/pending.avif" alt="Pending" className="w-[100px] h-auto" />
          <h2 className="text-center text-xl font-bold mt-5">
            আপনার কাগজপত্র পেন্ডিং অবস্থায় আছে।
          </h2>
        </div>

        <UploadDocument lastDocument={lastDocument} />
      </div>
    );
  }

  if (lastDocument?.approval_status === "Rejected") {
    return (
      <div className='p-3 lg:p-5 pb-14'>
        <div className="w-full flex flex-col items-center justify-center shadow-md rounded-xl border border-borderColor p-10">
          <img
            src="/not-accepted.png"
            alt="Rejected"
            className="w-[100px] h-auto"
          />
          <h2 className="text-center text-xl font-bold mt-5">
            আপনার কাগজপত্র গ্রহনযোগ্য নয়। পুনরায় আপলোড করুন।
          </h2>
        </div>

        <UploadDocument lastDocument={lastDocument} />
      </div>
    );
  }

  if (lastDocument?.approval_status === "Verified") {
    return (
      <div className='p-3 lg:p-5'>
        <div className="w-full flex flex-col items-center justify-center shadow-md rounded-xl border border-borderColor p-10">
          <img
            src="/verified.png"
            alt="Verified"
            className="w-[100px] h-auto"
          />
          <h2 className="text-center text-xl font-bold mt-5">
            আপনার কাগজপত্র গ্রহন করা হয়েছে। আপনি একজন ভেরিফাইড মেমবার।
          </h2>
        </div>

        <UploadDocument lastDocument={lastDocument} />
      </div>
    );
  }

  // Default case when approval_status is not "Pending", "Rejected", or "Verified"
  return (
    <div className='p-3 lg:p-5'>
      <div className="w-full flex flex-col items-center justify-center shadow-md rounded-xl border border-borderColor p-10 mb-14 md:mb-5">
        <img
          src="/not-found.avif"
          alt="Not Found"
          className="w-[100px] h-auto"
        />
        <h2 className="text-center text-xl font-bold mt-5">
          আপনার কাগজপত্র এখনও আপলোড করা হয়নি
        </h2>
      </div>

      <UploadDocument lastDocument={lastDocument} />
    </div>
  );
}
