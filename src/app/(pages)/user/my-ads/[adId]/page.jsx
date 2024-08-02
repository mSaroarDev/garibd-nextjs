import AdsDetailsComponent from "@components/AdDetailsComponent";
import { getSingleAdInfo } from "@libs/api/ad";

export default async function AdsDetailsPage({ params }) {
  const { adId } = params;
  const adDetails = await getSingleAdInfo(adId);

  return (
    <div className="bg-body">
      <AdsDetailsComponent adDetails={adDetails} />
    </div>
  );
}
