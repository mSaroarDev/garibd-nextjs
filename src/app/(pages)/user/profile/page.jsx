import PageHeader from "@components/PageHeader";
import ProfileInfoField from "@components/ProfileInfoField";
import userModel from "@db/models/users";
import { getProfile } from "@libs/api/profile";
import { authOptions } from "@libs/authOptions";
import { CircleUserRound, Key, PenBox, User } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function MyProfile() {
  const session = await getServerSession(authOptions);
  const profile = await getProfile(session?.user?.id);

  return (
    <div className="p-5 md:p-10">
      <div>
        <PageHeader
          text="আমার প্রোফাইল"
          icon={<CircleUserRound className="w-5 h-5" />}
        />
      </div>

      {/* profile contents */}
      <div className="mt-10 mb-20 md:mb-0">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-3 flex flex-col items-center justify-start w-full">
            <div className="h-[150px] w-[150px] rounded-full ring-2 ring-brandColor object-cover overflow-hidden">
              <img
                src={profile?.image}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="w-full mt-5 flex flex-col font-semibold">
              <Link
                href="/user/profile"
                className="flex items-center gap-3 px-4 py-2 bg-lightBg border-b border-borderColor"
              >
                <User className="w-4 h-4" />
                <span>আমার প্রোফাইল</span>
              </Link>

              <Link
                href="/user/profile/edit"
                className="flex items-center gap-3 px-4 py-2 bg-lightBg border-b border-borderColor"
              >
                <PenBox className="w-4 h-4" />
                <span>এডিট প্রোফাইল</span>
              </Link>

              <Link
                href="/user/profile/change-password"
                className="flex items-center gap-3 px-4 py-2 bg-lightBg"
              >
                <Key className="w-4 h-4" />
                <span>পাসওয়ার্ড পরিবর্তন</span>
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[18px] font-semibold mb-5">প্রোফাইল তথ্য</h2>
            <div className="grid grid-cols-12 gap-5">
              <ProfileInfoField
                text="নাম (বাংলায়)"
                value={profile?.profile?.name_bn}
              />
              <ProfileInfoField
                text="নাম (ইংরেজীতে)"
                value={profile?.profile?.name_en}
              />
              <ProfileInfoField
                text="পিতার নাম"
                value={profile?.profile?.father_name}
              />
              <ProfileInfoField
                text="মাতার নাম"
                value={profile?.profile?.mother_name}
              />
              <ProfileInfoField text="লিঙ্গ" value={profile?.profile?.gender} />
              <ProfileInfoField
                text="জন্ম তারিখ"
                value={profile?.profile?.dob}
              />
              <ProfileInfoField
                text="ঠিকানা"
                value={profile?.profile?.address}
              />
              <ProfileInfoField
                text="জাতীয় পরিচয়পত্র নং"
                value={profile?.profile?.nid_no}
              />
            </div>

            <div className="grid grid-cols-12 gap-5 mt-10">
              <ProfileInfoField text="ইমেইল" value={profile?.email} />
              <ProfileInfoField text="মোবাইল নং" value={profile?.mobile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
