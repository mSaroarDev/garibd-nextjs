import { Printer } from "lucide-react";

export default function AdDetails({adData}) {
    console.log("adDetails", adData);
    
  return (
    <>
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">কোম্পানীঃ</label>
                <p className="col-span-9">{adData?.companyId?.companyName}</p>
            </div>
            <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">কন্ডিশনঃ</label>
                <p className="col-span-9">{adData?.condition}</p>
            </div>
            {adData?.model && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">মডেলঃ</label>
                <p className="col-span-9">{adData?.model}</p>
            </div>
            )}
            
            {adData?.kilo_hr && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">কিলো/ঘন্টাঃ</label>
                <p className="col-span-9">{adData?.kilo_hr}</p>
            </div>
            )}
            
            {adData?.others_info?.horse && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">হর্সঃ</label>
                <p className="col-span-9">{adData?.others_info?.horse}</p>
            </div>
            )}

            {adData?.others_info?.cc && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">সিসিঃ</label>
                <p className="col-span-9">{adData?.others_info?.cc}</p>
            </div>
            )}

            {adData?.others_info?.size && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">সাইজঃ</label>
                <p className="col-span-9">{adData?.others_info?.size}</p>
            </div>
            )}

            {adData?.others_info?.weight && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">ওজনঃ</label>
                <p className="col-span-9">{adData?.others_info?.weight}</p>
            </div>
            )}
            
            {adData?.others_info?.wheel_size && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">চাকার সাইজঃ</label>
                <p className="col-span-9">{adData?.others_info?.wheel_size}</p>
            </div>
            )}
            
            {adData?.others_info?.cylinder && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">সিলিন্ডারঃ</label>
                <p className="col-span-9">{adData?.others_info?.cylinder}</p>
            </div>
            )}
            
            {adData?.others_info?.load_capacity && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">লোড ক্ষমতাঃ</label>
                <p className="col-span-9">{adData?.others_info?.load_capacity}</p>
            </div>
            )}
            
            {adData?.others_info?.mylase && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">মাইলেজঃ</label>
                <p className="col-span-9">{adData?.others_info?.mylase}</p>
            </div>
            )}
            
            {adData?.others_info?.breaking_type && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">ব্রেকিং টাইপঃ</label>
                <p className="col-span-9">{adData?.others_info?.breaking_type}</p>
            </div>
            )}

            <div className="col-span-12">
                <hr />
            </div>

            {adData?.air_condition && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">এয়ার কন্ডিশনঃ</label>
                <p className="col-span-9">{adData?.air_condition}</p>
            </div>
            )}

            {adData?.power_stearing && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">পাওয়ার স্টিয়ারিংঃ</label>
                <p className="col-span-9">{adData?.power_stearing}</p>
            </div>
            )}

            {adData?.fuel_type && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">জালানীঃ</label>
                <p className="col-span-9">{adData?.fuel_type}</p>
            </div>
            )}

            {adData?.documents && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">কাগজপত্রঃ</label>
                <p className="col-span-9">{adData?.documents}</p>
            </div>
            )}

            {adData?.driver_type && (
                <div className="col-span-12 md:col-span-6 grid grid-cols-12">
                <label className="col-span-3">ড্রাইভার টাইপঃ</label>
                <p className="col-span-9">{adData?.driver_type}</p>
            </div>
            )}

            <div className="col-span-12">
                <hr />
            </div>

            {adData?.short_desc && (
                <div className="col-span-12">
                <label className="col-span-12">ডেসক্রিপশনঃ</label>
                    <div className="col-span-12"
                        dangerouslySetInnerHTML={{__html: adData?.short_desc}}
                    />
            </div>
            )}

            <div className="col-span-12">
                <hr />
            </div>

            <div className="col-span-12 flex items-center justify-end">
                <button className="button-main flex items-center gap-2">
                    <Printer className="w-4 h-4" />
                    <span>প্রিন্ট করুন</span>
                </button>
            </div>

        </div>
    </>
  );
}