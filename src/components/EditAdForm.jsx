"use client";
import { editAdById } from "@libs/api/ad";
import { showError, showSuccess } from "@utils/showToast";
import { useFormik } from "formik";
import JoditEditor from "jodit-react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Spinner from "./spinner/Spinner";

export default function EditAdForm({ categories, companies, adData, profile }) {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const joditConfig = {
    height: "300px",
  };

  const [activeTextBox, setActiveTextBox] = useState(false);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // selected ad type
  const [selectedAdType, setSelectedAdType] = useState("");
  const handleAdTypeChange = (e) => {
    setSelectedAdType(e.target.value);
    formik.setFieldValue("ad_type", e.target.value);
  };

  // form values
  const formik = useFormik({
    initialValues: {
      ad_type:
        adData?.ad_type === "parts-and-motorcycle"
          ? "motorcycle"
          : adData?.ad_type === "parts-and-motorcycle"
          ? "parts"
          : "all-vehicles",
      ad_name: adData?.ad_name,
      condition: adData?.condition,
      short_desc: adData?.short_desc,
      model: adData?.model,
      kilo_hr: adData?.kilo_hr,
      horse: adData?.others_info?.horse,
      cc: adData?.others_info?.horse,
      size: adData?.others_info?.size,
      weight: adData?.others_info?.weight,
      wheel_size: adData?.others_info?.wheel_size,
      cylinder: adData?.others_info?.cylinder,
      load_capacity: adData?.others_info?.load_capacity,
      mylase: adData?.others_info?.mylase,
      breaking_type: adData?.others_info?.breaking_type,
      air_condition: adData?.air_condition,
      power_stearing: adData?.power_stearing,
      fuel_type: adData?.fuel_type,
      documents: adData?.documents,
      driver_type: adData?.driver_type,
      price: adData?.price,
      isFeatured: adData?.isFeatured
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const res = await editAdById(adData?._id, values);

        if (res.ok) {
          showSuccess("Ad Updated");
          const data = await res.json();
          router.push(
            `/user/my-ads/create-ad/upload-images/${data?.data?._id}`
          );
          router.refresh();
        } else if (res.status === 406) {
          showError("কোন প্যাকেজ একটিভ নেই");
        } else {
          showError("Ad Create Failed");
        }
      } catch (error) {
        showError("Internal Server Error");
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    setSelectedAdType(
      adData?.ad_type === "parts-and-motorcycle"
        ? "motorcycle"
        : adData?.ad_type === "parts-and-motorcycle"
        ? "parts"
        : "all-vehicles"
    );

    setContent(adData?.short_desc);
  }, [adData?._id]);

  return (
    <>
      {loading && <Spinner />}
      <div className="mt-5">
        <form onSubmit={formik.handleSubmit}>
          <div className="border border-borderColor  rounded-lg overflow-hidden">
            <div className="px-5 py-2 bg-slate-100 text-[17px] font-semibold">
              বিজ্ঞাপন এর ধরন
            </div>
            <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-5 p-5 items-center">
              <label htmlFor="" className="col-span-12 md:col-span-3">
                বিজ্ঞাপন এর ধরন পছন্দ করুন:
              </label>
              <select
                id="ad_type"
                name="ad_type"
                value={formik.values.ad_type}
                onChange={(e) => handleAdTypeChange(e)}
                className="w-full col-span-12 md:col-span-9"
              >
                <option value="">পছন্দ করুন</option>
                <option value="parts">যন্ত্রাংশসমূহ</option>
                <option value="motorcycle">মোটর সাইকেল</option>
                <option value="all-vehicles">অন্যান্য সকল গাড়ি</option>
              </select>
            </div>
          </div>
          {selectedAdType !== "" && (
            // ads core fields
            <div className="border border-borderColor  rounded-lg overflow-hidden mt-5">
              <div className="px-5 py-2 bg-slate-100 text-[17px] font-semibold">
                সাধারন বিবরন
              </div>
              <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-5 p-5 items-center">
                <label className="col-span-12 md:col-span-3" htmlFor="">
                  নাম/টাইটেল:
                </label>
                <input
                  type="text"
                  id="ad_name"
                  name="ad_name"
                  value={formik.values.ad_name}
                  onChange={formik.handleChange}
                  className="w-full col-span-12 md:col-span-9"
                />

                <label className="col-span-12 md:col-span-3" htmlFor="">
                  মুল্য (টাকায়):
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  className="w-full col-span-9 md:col-span-3"
                />

                <div className="w-full col-span-3 md:col-span-6 ml-5 font-bold">
                  /- টাকা
                </div>

                {/* <label
                  className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                  htmlFor=""
                >
                  ক্যাটেগরী:
                </label>
                <select
                  id="categoryId"
                  name="categoryId"
                  value={formik.values.categoryId}
                  onChange={formik.handleChange}
                  className="w-full col-span-12 md:col-span-9"
                >
                  <option value="">সিলেক্ট করুন</option>
                  {categories &&
                    categories.map((item) => (
                      <option key={item?._id} value={item?._id}>
                        {item?.categoryName}
                      </option>
                    ))}
                </select>

                <label
                  className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                  htmlFor=""
                >
                  কোম্পানী:
                </label>
                <select
                  id="companyId"
                  name="companyId"
                  value={formik.values.companyId}
                  onChange={formik.handleChange}
                  className="w-full col-span-12 md:col-span-9"
                >
                  <option value="">সিলেক্ট করুন</option>
                  {companies &&
                    companies.map((item) => (
                      <option key={item?._id} value={item?._id}>
                        {item?.companyName}
                      </option>
                    ))}
                </select> */}

                <label
                  className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                  htmlFor=""
                >
                  কন্ডিশন:
                </label>
                <select
                  id="condition"
                  name="condition"
                  value={formik.values.condition}
                  onChange={formik.handleChange}
                  className="w-full col-span-12 md:col-span-9"
                >
                  <option value="">সিলেক্ট করুন</option>
                  <option value="নতুন">নতুন</option>
                  <option value="পুরাতন">পুরাতন</option>
                  <option value="রিকন্ডিশন">রিকন্ডিশন</option>
                </select>

                {selectedAdType === "all-vehicles" ||
                selectedAdType === "motorcycle" ? (
                  <>
                    <label className="col-span-12 md:col-span-3" htmlFor="">
                      মডেল:
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={formik.values.model}
                      onChange={formik.handleChange}
                      className="w-full col-span-12 md:col-span-9"
                    />

                    <label className="col-span-12 md:col-span-3" htmlFor="">
                      কিলো/ঘন্টা:
                    </label>
                    <input
                      type="text"
                      id="kilo_hr"
                      name="kilo_hr"
                      value={formik.values.kilo_hr}
                      onChange={formik.handleChange}
                      className="w-full col-span-12 md:col-span-9"
                    />
                  </>
                ) : (
                  ""
                )}

                <label
                  className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                  htmlFor=""
                >
                  শর্ট ডেসক্রিপশন:
                </label>
                <div className="w-full col-span-12 md:col-span-9">
                  {content !== "" ? (
                    <>
                      <JoditEditor
                        ref={editor}
                        value={content}
                        onBlur={(newContent) => {
                          formik.setFieldValue("short_desc", newContent);
                        }}
                        config={joditConfig}
                      />{" "}
                    </>
                  ) : (
                    <>
                      <button
                        className="button-main"
                        onClick={() => setActiveTextBox(true)}
                      >
                        ডেসক্রিপশন যুক্ত করুন
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* others description */}
          {selectedAdType === "all-vehicles" ||
          selectedAdType === "motorcycle" ? (
            <div className="border border-borderColor  rounded-lg overflow-hidden mt-5">
              <div className="px-5 py-2 bg-slate-100 text-[17px] font-semibold">
                অন্যান্য বিবরন
              </div>
              <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-5 p-5 items-center">
                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                    htmlFor=""
                  >
                    কত হর্স:
                  </label>
                  <input
                    type="text"
                    id="horse"
                    name="horse"
                    value={formik.values.horse}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0 text-left md:text-right mr-0 md:mr-4"
                    htmlFor=""
                  >
                    কত সিসি:
                  </label>
                  <input
                    type="text"
                    id="cc"
                    name="cc"
                    value={formik.values.cc}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                    htmlFor=""
                  >
                    কত সাইজ:
                  </label>
                  <input
                    type="text"
                    id="size"
                    name="size"
                    value={formik.values.size}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0 text-left md:text-right mr-0 md:mr-4"
                    htmlFor=""
                  >
                    ওজন:
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                    htmlFor=""
                  >
                    চাকার সাইজ:
                  </label>
                  <input
                    type="text"
                    id="wheel_size"
                    name="wheel_size"
                    value={formik.values.wheel_size}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0 text-left md:text-right mr-0 md:mr-4"
                    htmlFor=""
                  >
                    সিলিন্ডার:
                  </label>
                  <input
                    type="text"
                    id="cylinder"
                    name="cylinder"
                    value={formik.values.cylinder}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                    htmlFor=""
                  >
                    লোড ক্ষমতা:
                  </label>
                  <input
                    type="text"
                    id="load_capacity"
                    name="load_capacity"
                    value={formik.values.load_capacity}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0 text-left md:text-right mr-0 md:mr-4"
                    htmlFor=""
                  >
                    মাইলেজ:
                  </label>
                  <input
                    type="text"
                    id="mylase"
                    name="mylase"
                    value={formik.values.mylase}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                    htmlFor=""
                  >
                    ব্রেকিং টাইপ:
                  </label>
                  <input
                    type="text"
                    id="breaking_type"
                    name="breaking_type"
                    value={formik.values.breaking_type}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {/* more info */}
          {selectedAdType === "all-vehicles" ||
          selectedAdType === "motorcycle" ? (
            <div className="border border-borderColor  rounded-lg overflow-hidden mt-5">
              <div className="px-5 py-2 bg-slate-100 text-[17px] font-semibold">
                এক্সট্রা ইনফো
              </div>
              <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-5 p-5 items-center">
                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                    htmlFor=""
                  >
                    এয়ার কন্ডিশন:
                  </label>
                  <select
                    id="air_condition"
                    name="air_condition"
                    value={formik.values.air_condition}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  >
                    <option value="">সিলেক্ট করুন</option>
                    <option value="আছে">আছে</option>
                    <option value="নাই">নাই</option>
                  </select>
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0 text-left md:text-right mr-0 md:mr-4"
                    htmlFor=""
                  >
                    পাওয়ার স্টিয়ারিং:
                  </label>
                  <select
                    id="power_stearing"
                    name="power_stearing"
                    value={formik.values.power_stearing}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  >
                    <option value="">সিলেক্ট করুন</option>
                    <option value="আছে">আছে</option>
                    <option value="নাই">নাই</option>
                  </select>
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                    htmlFor=""
                  >
                    জালানী:
                  </label>
                  <select
                    id="fuel_type"
                    name="fuel_type"
                    value={formik.values.fuel_type}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  >
                    <option value="">সিলেক্ট করুন</option>
                    <option value="ডিজেল">ডিজেল</option>
                    <option value="পেট্রোল">পেট্রোল</option>
                    <option value="অক্টেন">অক্টেন</option>
                    <option value="বিদ্যুৎ">বিদ্যুৎ</option>
                    <option value="অন্যান্য">অন্যান্য</option>
                  </select>
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0 text-left md:text-right mr-0 md:mr-4"
                    htmlFor=""
                  >
                    কাগজপত্র:
                  </label>
                  <input
                    id="documents"
                    name="documents"
                    value={formik.values.documents}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  />
                </div>

                <div className="col-span-12 lg:col-span-6 gap-1 grid grid-cols-12 items-center">
                  <label
                    className="col-span-12 md:col-span-3 mt-1 md:mt-0"
                    htmlFor=""
                  >
                    ড্রাইভিং টাইপ:
                  </label>
                  <select
                    id="driver_type"
                    name="driver_type"
                    value={formik.values.driver_type}
                    onChange={formik.handleChange}
                    className="w-full col-span-12 md:col-span-9"
                  >
                    <option value="">সিলেক্ট করুন</option>
                    <option value="ম্যানুয়াল ড্রাইভার">
                      ম্যানুয়াল ড্রাইভার
                    </option>
                    <option value="অটো ড্রাইভার">অটো ড্রাইভার</option>
                  </select>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {selectedAdType !== "" && profile?.role === "Admin" ? (
            <div className="border border-borderColor  rounded-lg overflow-hidden mt-5">
              <div className="px-5 py-2 bg-slate-100 text-[17px] font-semibold">
                ফিচার্ড সিলেকশন
              </div>
              <div className="grid grid-cols-12 gap-1 md:gap-2 lg:gap-5 p-5 items-center">
                <label htmlFor="" className="col-span-12 md:col-span-3">
                  ফিচার্ড হিসেবে মার্ক করতে চান?
                </label>
                <select
                  id="isFeatured"
                  name="isFeatured"
                  value={formik.values.isFeatured}
                  onChange={formik.handleChange}
                  className="w-fit col-span-12 md:col-span-9"
                >
                  <option value="">পছন্দ করুন</option>
                  <option value={true}>হ্যা</option>
                  <option value={false}>না</option>
                </select>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="mt-5 flex items-center justify-end">
            <button
              type="submit"
              className="button-main flex items-center self-end gap-3"
            >
              <span>পরবর্তী</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
