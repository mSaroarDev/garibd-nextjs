"use client";
import { useState } from "react";
import ButtonLoader from "./loaders/button-loader/Loader";
import { useFormik } from "formik";
import { showError, showSuccess } from "@utils/showToast";
import { useRouter } from "next/navigation";
import { createPackage } from "@libs/api/package";

export default function CreatePackageForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // formdata
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      type: "",
      value: "",
      duration: "",
    },
    onSubmit: async (values) => {
      const { name, price, category, type } = values;
      if (!name || !price || !category || !type) {
        return showError("Missing fields");
      }

      try {
        setLoading(true);
        const res = await createPackage(values);

        if (res.ok) {
          showSuccess("Package Created");
          // router.push("/admin/membership");
          router.back();
          router.refresh();
        } else {
          showError("Package create failed");
        }
      } catch (error) {
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  // states
  const [selectedType, setSelectedType] = useState("লাইফটাইম");

  // handle chage
  const handleValueChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    formik.handleChange;
    setSelectedType(value);
    formik.setFieldValue("type", value);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-6">
          <div className="flex items-center gap-1 mb-2">
            <label className="w-full lg:w-1/4">প্যাকেজ নামঃ </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="w-full"
              placeholder="যেমনঃ বেসিক"
            />
          </div>

          <div className="flex items-center gap-1 mb-2">
            <label className="w-full lg:w-1/4">ক্যাটেগরীঃ </label>
            <select
              name="category"
              id="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              className="w-full"
            >
              <option value="">সিলেক্ট করুন</option>
              <option value="parts-and-motorcycle">পার্টস ও মোটরসাইকেল</option>
              <option value="all-vehicles">সকল যানবাহন</option>
            </select>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <label className="w-full lg:w-1/4">মুল্যঃ </label>
            <input
              type="text"
              name="price"
              id="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              className="w-full"
              placeholder="499 (ইংরেজী অক্ষরে লিখতে হবে)"
            />
          </div>

          <div className="flex items-center gap-1 mb-2">
            <label className="w-full lg:w-1/4">ধরনঃ </label>
            <select
              name="type"
              id="type"
              value={formik.values.type}
              onChange={handleValueChange}
              className="w-full"
            >
              <option value="">সিলেক্ট করুন</option>
              <option value="Ad">অ্যাড ভিত্তিক</option>
              <option value="Monthly">মাস ভিত্তিক</option>
              <option value="Lifetime">লাইফটাইম</option>
            </select>
          </div>
        </div>

        {/* 2nd column */}
        <div className="col-span-12 lg:col-span-6">
          {selectedType === "Ad" && (
            <div className="flex items-center gap-1 mb-2">
              <label className="w-full lg:w-1/4">পরিমানঃ </label>
              <input
                type="text"
                name="value"
                id="value"
                value={formik.values.value}
                onChange={formik.handleChange}
                className="w-full"
                placeholder="যেমনঃ 5 (ইংরেজী অক্ষরে লিখতে হবে)"
              />
            </div>
          )}

          {selectedType === "Monthly" && (
            <div className="flex items-center gap-1 mb-2">
              <label className="w-full lg:w-1/4">মাসের পরিমানঃ </label>
              <input
                type="text"
                name="duration"
                id="duration"
                value={formik.values.duration}
                onChange={formik.handleChange}
                className="w-full"
                placeholder="যেমনঃ 6 (ইংরেজী অক্ষরে লিখতে হবে)"
              />
            </div>
          )}
        </div>

        <div className="col-span-12 flex items-center justify-end">
          {loading ? (
            <button
              type="submit"
              className="button-main flex items-center gap-2 pointer-events-none cursor-progress"
            >
              <ButtonLoader /> <span>অপেক্ষা করুন...</span>
            </button>
          ) : (
            <button type="submit" className="button-main">
              তৈরী করুন
            </button>
          )}
        </div>
      </form>
    </>
  );
}
