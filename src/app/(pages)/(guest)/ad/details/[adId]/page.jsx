import AdsDetailsComponent from "@components/AdDetailsComponent";
import AdminAdImage from "@components/AdminAdImage";
import { getSingleAdInfo } from "@libs/api/ad";

export default async function AdDetailsPage({ params }) {
    const { adId } = params;
    const adDetails = await getSingleAdInfo(adId);

  return (
    <div className="bg-body">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="bg-white">
          <AdsDetailsComponent adDetails={adDetails} />

          <AdminAdImage />
        </div>
      </div>
    </div>
  );
}
