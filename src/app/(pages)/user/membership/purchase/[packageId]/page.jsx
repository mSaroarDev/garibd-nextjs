import MembershipBuyComp from "@components/MembershipBuyComp";
import MembershipCard from "@components/MembershipCard";
import { getSinglePackage } from "@libs/api/package";

export default async function PurchasePackageId({ params }) {
  const { packageId } = params;
  const packageData = await getSinglePackage(packageId);

  return (
    <div className="p-3 lg:p-5 my-14 lg:my-5">
        <MembershipBuyComp packageData={packageData}  />
    </div>
  );
}
