import { CircleCheckBig, Clock3, Gift, PackagePlus } from "lucide-react";

export default function PricingCardParticles({ value, duration }) {
  return (
    <>
      <p className="flex items-center gap-3 mb-2">
        {value === "" ? (
          <>
            <Gift className="w-4 h-4" />
            <span className="text-[16px] font-semibold">{`আনলিমিটেড বিজ্ঞাপন`}</span>
          </>
        ) : (
          <>
            <Gift className="w-4 h-4" />
            <span className="text-[16px] font-semibold">{`${value} টি বিজ্ঞাপন`}</span>
          </>
        )}
      </p>

      <p className="flex items-center gap-3 mb-2">
        {duration === "" ? (
          <>
            <Clock3 className="w-4 h-4" />
            <span className="text-[16px] font-semibold">{`আনলিমিটেড মেয়াদ`}</span>
          </>
        ) : (
          <>
            <Clock3 className="w-4 h-4" />
            <span className="text-[16px] font-semibold">{`${duration} মাস মেয়াদ`}</span>
          </>
        )}
      </p>
    </>
  );
}
