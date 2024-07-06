"use client";
import { createStore } from "@libs/api/store";
import { showError, showSuccess } from "@utils/showToast";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./spinner/Spinner";

export default function StoreCreateForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // formik
  const formik = useFormik({
    initialValues: {
      store_name: "",
      store_address: "",
      store_type: "",
      store_product_type: "",
      store_owener_name: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await createStore(values);

        if (res.ok) {
          showSuccess("Store Created");
          router.push("/user/my-store");
          router.refresh();
        } else {
          showError("Store Already Exist By This User");
        }
      } catch (error) {
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      {loading && <Spinner />}
      <form onSubmit={formik.handleSubmit} className="mb-10 lg:mb-3">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 lg:gap-7 mb-4 md:mb-2">
          <label className="whitespace-nowrap">স্টোরের নামঃ</label>
          <input
            type="text"
            id="store_name"
            name="store_name"
            value={formik.values.store_name}
            onChange={formik.handleChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 lg:gap-7 mb-4 md:mb-2">
          <label className="whitespace-nowrap">স্টোর মালিকের নামঃ</label>
          <input
            type="text"
            id="store_owener_name"
            name="store_owener_name"
            value={formik.values.store_owener_name}
            onChange={formik.handleChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 lg:gap-7 mb-4 md:mb-2">
          <label className="whitespace-nowrap">স্টোরের ঠিকানাঃ</label>
          <input
            type="text"
            id="store_address"
            name="store_address"
            value={formik.values.store_address}
            onChange={formik.handleChange}
            className="w-full"
          />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 lg:gap-7 mb-4 md:mb-2">
          <label className="whitespace-nowrap">স্টোরের ধরনঃ</label>
          <select
            type="text"
            id="store_type"
            name="store_type"
            value={formik.values.store_type}
            onChange={formik.handleChange}
            className="w-full"
          >
            <option value="">সিলেক্ট করুন</option>
            <option value="All">সকল</option>
            <option value="Physical">বাস্তব দোকান</option>
            <option value="Virtual">অনলাইন দোকান</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 lg:gap-7 mb-4 md:mb-2">
          <label className="whitespace-nowrap">পন্যের ধরনঃ</label>
          <select
            id="store_product_type"
            name="store_product_type"
            value={formik.values.store_product_type}
            onChange={formik.handleChange}
            className="w-full"
          >
            <option value="">সিলেক্ট করুন</option>
            <option value="All">সকল</option>
            <option value="New">নতুন পন্য</option>
            <option value="Recondition">রিকন্ডিশন পন্য</option>
            <option value="New & Old">নতুন এবং পুরাতন</option>
            <option value="New & Recondition">নতুন এবং রিকন্ডিশন</option>
            <option value="New, Old & Recondition">
              নতুন, পুরাতন ও রিকন্ডিশন
            </option>
          </select>
        </div>

        <div className="flex items-center justify-end">
          <button type="submit" className="button-main">
            স্টোর তৈরী করুন
          </button>
        </div>
      </form>
    </>
  );
}
