import { getServerSession } from "next-auth";
import PricingCardParticles from "./PricingCardParticles";
import { authOptions } from "@libs/authOptions";
import { getProfile } from "@libs/api/profile";
import Link from "next/link";
import { PenBox, Trash2 } from "lucide-react";

export default async function MembershipCard({ item }) {
  const session = await getServerSession(authOptions);
  const profile = await getProfile(session?.user?.id);
  console.log("profile", profile);

  return (
    <>
      <div className="w-[290px] h-auto rounded-lg bg-[#FAF4EB]/80 shadow-md border border-borderColor/50 flex flex-col items-start justify-between overflow-hidden">
        <div className="w-full text-center">
          <h2 className="text-[17px] font-bold text-black mt-5">
            {item?.name}
          </h2>
          <h2 className="text-[40px] font-medium mb-6">
            <span className="text-[30px]">৳</span> {item?.price}/-{" "}
            <span className="text-[16px]">BDT</span>
          </h2>

          <div className="particles px-7 py-4 mt-4">
            <PricingCardParticles value={item.value} duration={item.duration} />
          </div>
        </div>
        <div className="p-4 w-full">
          {profile.role === "Admin" ? (
            <div className="flex items-center justify-between gap-2">
              <Link
                href={`/admin/membership/motocycles-and-parts/edit/${item._id}`}
                className="w-full bg-blue-600 px-4 py-2 rounded-sm text-white font-medium text-center flex items-center justify-center gap-2"
              >
                <PenBox className="w-4 h-4" />
                <span>এডিট</span>
              </Link>
              <button className="w-full bg-red-600 px-4 py-2 rounded-sm text-white font-medium flex items-center justify-center gap-2">
                <Trash2 className="w-4 h-4" />
                <span className="mt-1">ডিলিট</span>
              </button>
            </div>
          ) : (
            <button className="bg-brandColor w-full text-white px-4 py-3 rounded-md">
              কিনুন
            </button>
          )}
        </div>
      </div>
    </>
  );
}
