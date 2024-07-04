"use client";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingButton from "./LoadingButton";
import { changePassword, updateProfile } from "@libs/api/profile";
import { showError, showSuccess } from "@utils/showToast";
import Spinner from "./spinner/Spinner";

export default function ChangePasswordForm({ data }) {
  // utils
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // formik
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      newPassword2: "",
    },
    onSubmit: async (values) => {
      const { oldPassword, newPassword, newPassword2 } = values;
      if (!oldPassword || !newPassword || !newPassword2) {
        return showError("Please input all fields.");
      }

      if (newPassword !== newPassword2) {
        return showError("Password didn't match.");
      }

      if (newPassword.length < 6) {
        return showError("Password must be more than 6 character");
      }

      try {
        setLoading(true);
        const res = await changePassword(values);

        setLoading(false);
        if (res.status === 400) {
          return showError("পুরাতন পাসওয়ার্ড সঠিক নয়");
        }

        if (res.status === 200) {
          showSuccess("Password Updated");
          router.refresh();
          router.push('/user/profile')
        } else {
          showError("Password Change Failed");
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
        <div className="grid grid-cols-12 md:col-span-6 gap-3">
          <div className="col-span-12 md:col-span-6 px-3 flex flex-col gap-1">
            <label className="text-[15px] italic">পুরাতন পাসওয়ার্ড</label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>

          <div className="grid grid-cols-12 md:col-span-6 gap-3"></div>

          <div className="col-span-12 md:col-span-6 px-3 flex flex-col gap-1">
            <label className="text-[15px] italic">নতুন পাসওয়ার্ড</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>

          <div className="grid grid-cols-12 md:col-span-6 gap-3"></div>

          <div className="col-span-12 md:col-span-6 px-4 flex flex-col gap-1">
            <label className="text-[15px] italic">
              পুনরায় নতুন পাসওয়ার্ড লিখুন
            </label>
            <input
              type="password"
              id="newPassword2"
              name="newPassword2"
              value={formik.values.newPassword2}
              onChange={formik.handleChange}
              className="text-[15px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 mt-10">
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
