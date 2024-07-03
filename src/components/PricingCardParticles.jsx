import { CircleCheckBig } from "lucide-react";

export default function PricingCardParticles() {
  return (
    <>
      <p className="flex items-center gap-3 mb-2">
        <CircleCheckBig className="w-4 h-4" />
        <span className="text-[16px] font-semibold">২টি অ্যাড</span>
      </p>
    </>
  );
}
