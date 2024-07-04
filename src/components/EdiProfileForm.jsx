"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingButton from "./LoadingButton";
import { updateProfile } from "@libs/api/profile";
import { showError, showSuccess } from "@utils/showToast";
import Spinner from "./spinner/Spinner";

export default function EdiProfileForm({ data }) {
  // utils
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // formik
  const formik = useFormik({
    initialValues: {
      name_en: data?.profile?.name_en,
      name_bn: data?.profile?.name_bn,
      father_name: data?.profile?.father_name,
      mother_name: data?.profile?.mother_name,
      gender: data?.profile?.gender,
      dob: data?.profile?.dob,
      address: data?.profile?.address,
      nid_no: data?.profile?.nid_no,
      email: data?.email,
      mobile: data?.mobile,
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await updateProfile(data?._id, values);

        setLoading(false);
        if (res.ok) {
          showSuccess("Updated");
          router.refresh();
        } else {
          showError("Update Failed");
        }
      } catch (error) {
        showError("Internal Server Error");
      }
    },
  });

  return (
    <>
      {loading && <Spinner />}
      <form
        onSubmit={formik.handleSubmit}
        className="col-span-12 md:col-span-9"
      >
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6 px-3 flex flex-col gap-1">
            <label className="text-[15px] italic">
              পুরো নাম বাংলায় (জাতীয় পরিচয়পত্র অনুযায়ী)
            </label>
            <input
              type="text"
              id="name_bn"
              name="name_bn"
              value={formik.values.name_bn}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>

          <div className="col-span-12 md:col-span-6 px-3 flex flex-col gap-1">
            <label className="text-[15px] italic">
              Full Name in English (জাতীয় পরিচয়পত্র অনুযায়ী)
            </label>
            <input
              type="text"
              id="name_en"
              name="name_en"
              value={formik.values.name_en}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">পিতার নাম</label>
            <input
              type="text"
              id="father_name"
              name="father_name"
              value={formik.values.father_name}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">মাতার নাম</label>
            <input
              type="text"
              id="mother_name"
              name="mother_name"
              value={formik.values.mother_name}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">লিঙ্গ</label>
            <select
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              className="text-[15px]"
            >
              <option value="">সিলেক্ট করুন</option>
              <option value="পুরুষ">পুরুষ</option>
              <option value="নারী">নারী</option>
            </select>
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">
              জন্ম তারিখ (দিন/মাস/বছর)
            </label>
            <input
              type="text"
              id="dob"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">ঠিকানা</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">জাতীয় পরিচয় পত্র নং</label>
            <input
              type="text"
              id="nid_no"
              name="nid_no"
              value={formik.values.nid_no}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 mt-10">
          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">ইমেইল</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="text-[15px]"
              disabled
            />
          </div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">মোবাইল নং</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>

          <div className="col-span-12 px-4">
            <button type="submit" className="button-main">
              আপডেট করুন
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
