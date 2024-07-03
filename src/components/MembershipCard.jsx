import PricingCardParticles from "./PricingCardParticles";

export default function MembershipCard() {
  return (
    <>
      <div className="w-[290px] h-auto rounded-lg bg-[#FAF4EB]/80 shadow-md border border-borderColor/50 flex flex-col items-start justify-between overflow-hidden">
        <div className="w-full text-center">
          <h2 className="text-[17px] font-medium text-black mt-5">স্টার্টার প্যাক</h2>
          <h2 className="text-[40px] font-bold mb-6"><span className="text-[30px]">৳</span> ৩৫০/- <span className="text-[16px]">BDT</span></h2>

          <div className="particles px-7 py-4 mt-4">
            <PricingCardParticles />
            <PricingCardParticles />
            <PricingCardParticles />
            <PricingCardParticles />
            <PricingCardParticles />
            <PricingCardParticles />
          </div>
        </div>
        <div className="p-4 w-full">
            <button className="bg-brandColor w-full text-white px-4 py-3 rounded-md">কিনুন</button>
        </div>
      </div>
    </>
  );
}
