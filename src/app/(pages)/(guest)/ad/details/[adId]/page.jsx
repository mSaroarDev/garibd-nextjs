import AdsDetailsComponent from "@components/AdDetailsComponent";
import AdminAdImage from "@components/AdminAdImage";
import { getSingleAdInfo } from "@libs/api/ad";
import Link from "next/link";

export default async function AdDetailsPage({ params }) {
    const { adId } = params;
    const adDetails = await getSingleAdInfo(adId);

  return (
    <div className="bg-body">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-2 py-3">
          <Link href="/" className="font-semibold">Home</Link>
          <span className="font-semibold">»</span>
          <Link href={`/category/${adDetails?.companyId?._id}?category_name=${adDetails?.companyId?.companyName}`} className="font-semibold">{adDetails?.companyId?.companyName}</Link>
          <span className="font-semibold">»</span>
          <span className="">{adDetails?.ad_name}</span>
        </div>
        <div className="bg-white">
          <AdsDetailsComponent adDetails={adDetails} />

          <AdminAdImage />
        </div>
      </div>
    </div>
  );
}
