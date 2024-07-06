import StoreCreateForm from "@components/StoreCreateForm";
import { getStoreInfo } from "@libs/api/store";
import { authOptions } from "@libs/authOptions";
import { getServerSession } from "next-auth";

export default function StoreInfoPage() {

  return (
    <>
    <div className="p-5 md:p-10">
        <div className="border border-borderColor rounded-md overflow-hidden">
            <div className="__head bg-lightBg px-4 py-2 text-[18px] font-semibold">
                স্টোর তথ্য
            </div>

            {/* main */}
            <div className="p-5">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-3">
                    <img src={"/store.png"} alt="Store" className="w-[200px]" />
                  </div>
                  
                  <div className="mt-3 col-span-12 md:col-span-9">
                    <StoreCreateForm />
                  </div>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}