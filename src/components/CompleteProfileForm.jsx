import { ArrowRight } from "lucide-react";

export default function CompleteProfileForm() {
  return (
    <>
      <form className="col-span-12 md:col-span-9">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6 px-3 flex flex-col gap-1">
            <label className="text-[15px] italic">
              পুরো নাম (জাতীয় পরিচয়পত্র অনুযায়ী)
            </label>
            <input className="text-[15px]" />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">পিতার নাম</label>
            <input className="text-[15px]" />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">মাতার নাম</label>
            <input className="text-[15px]" />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">লিঙ্গ</label>
            <select className="text-[15px]">
              <option value="">সিলেক্ট করুন</option>
              <option value="">পুরুষ</option>
              <option value="">মহিলা</option>
            </select>
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">জন্ম তারিখ</label>
            <input className="text-[15px]" />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">ঠিকানা</label>
            <input className="text-[15px]" />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">জাতীয় পরিচয় পত্র নং</label>
            <input className="text-[15px]" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 mt-10">
          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">ইমেইল</label>
            <input className="text-[15px]" />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">মোবাইল নং</label>
            <input className="text-[15px]" />
          </div>

          <div className="col-span-12 px-4">
            <button className="button-main flex items-center gap-2">
              <span>পরবর্তী</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
