"use client";
import { createCategory } from "@libs/api/category";
import { showError, showSuccess } from "@utils/showToast";
import { uploadImage } from "@utils/uploadImage";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./spinner/Spinner";

export default function NewCategoryForm() {
  // utils
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // image
  const uploadImageToServer = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const image = e.target.files[0];
      const res = await uploadImage(image);
      formik.setFieldValue("categoryIcon", res.res);
    } catch (error) {
      console.log(error);
      showError("Failed to change");
    } finally {
      setLoading(false);
    }
  };

  //formik
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      categoryIcon: "",
    },
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const res = await createCategory(values);

        if (res.ok) {
          showSuccess("Category Created");
          router.push("/admin/category");
          router.refresh();
        } else {
          showError("Category Create Failed");
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
      <div className="border border-borderColor rounded-lg overflow-hidden">
        <div className="px-4 py-2 bg-lightBg">নতুন ক্যাটেগরী</div>

        <form
          onSubmit={formik.handleSubmit}
          className="p-5 flex flex-col gap-2"
        >
          <label>ক্যাটেগরী নাম</label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            onChange={formik.handleChange}
            value={formik.values.categoryName}
          />
          <label>ছবি</label>
          <input
            type="file"
            id="categoryIcon"
            name="categoryIcon"
            onChange={(e) => uploadImageToServer(e)}
            className="w-fit"
          />
          <button type="submit" className="button-main w-fit">
            সাবমিট
          </button>
        </form>
      </div>
    </>
  );
}
