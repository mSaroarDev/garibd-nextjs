"use client";
import { showError, showSuccess } from "@utils/showToast";
import { uploadImage } from "@utils/uploadImage";
import { useEffect, useRef, useState } from "react";
import Spinner from "./spinner/Spinner";
import { createDocuments } from "@libs/api/documents";
import { useRouter } from "next/navigation";

export default function UploadDocument({ lastDocument }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const nidFrontUploadRef = useRef();
  const nidBackUploadRef = useRef();
  const electricityUploadRef = useRef();

  const handleNidFrontClick = (event) => {
    nidFrontUploadRef.current.click();
  };

  const handleNidBackClick = (event) => {
    nidBackUploadRef.current.click();
  };

  const handleElectricityClick = (event) => {
    electricityUploadRef.current.click();
  };

  const [nidFront, setNidFront] = useState();
  const [nidBack, setNidBack] = useState();
  const [electricityBill, setElectricityBill] = useState();

  const handleNidFrontUpload = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const image = e.target.files[0];
      const res = await uploadImage(image);
      setLoading(false);
      setNidFront(res.res);
    } catch (error) {
      showError("Failed to upload image");
    }
  };
  const handleNidBackUpload = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const image = e.target.files[0];
      const res = await uploadImage(image);
      setLoading(false);
      setNidBack(res.res);
    } catch (error) {
      showError("Failed to upload image");
    }
  };
  const handleElectricityUpload = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const image = e.target.files[0];
      const res = await uploadImage(image);
      setLoading(false);
      setElectricityBill(res.res);
    } catch (error) {
      showError("Failed to upload image");
    }
  };

  // submit
  const handleSubmit = async () => {
    const values = {
      nid_card_front: nidFront,
      nid_card_back: nidBack,
      home_electricity_bill: electricityBill,
    };

    setLoading(true);
    const res = await createDocuments(values);

    setLoading(false);
    if (res.ok) {
      showSuccess("Submitted Successfully");
      router.refresh();
    } else {
      showError("Submission Failed");
    }
  };

  useEffect(() => {
    setNidFront(lastDocument?.nid_card_front);
    setNidBack(lastDocument?.nid_card_back);
    setElectricityBill(lastDocument?.home_electricity_bill);
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <div className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full p-3 border border-borderColor rounded-xl">
              <div
                onClick={handleNidFrontClick}
                className="w-full h-[150px] mb-1 border border-borderColor border-dashed rounded-lg hover:shadow-md cursor-pointer"
              >
                <img
                  src={(nidFront && nidFront) || "/image-placeholder.png"}
                  alt="Front"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center mb-3">জাতীয় পরিচয় পত্র Front</p>

              <div
                onClick={handleNidBackClick}
                className="w-full h-[150px] mb-1 border border-borderColor border-dashed rounded-lg hover:shadow-md cursor-pointer"
              >
                <img
                  src={(nidBack && nidBack) || "/image-placeholder.png"}
                  alt="Front"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center">জাতীয় পরিচয় পত্র Back</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full p-3 border border-borderColor rounded-xl">
              <div
                onClick={handleElectricityClick}
                className="w-full h-[300px] mb-1 border border-borderColor border-dashed rounded-lg hover:shadow-md cursor-pointer"
              >
                <img
                  src={
                    (electricityBill && electricityBill) ||
                    "/image-placeholder.png"
                  }
                  alt="Front"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center">বিদ্যুৎ বিলের কাগজ</p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="button-main mt-5 w-full lg:max-w-[150px] mb-24 lg:mb-10"
        >
          সাবমিট করুন
        </button>
      </div>

      <input
        type="file"
        onChange={handleNidFrontUpload}
        ref={nidFrontUploadRef}
        style={{ display: "none" }}
      />

      <input
        type="file"
        onChange={handleNidBackUpload}
        ref={nidBackUploadRef}
        style={{ display: "none" }}
      />

      <input
        type="file"
        onChange={handleElectricityUpload}
        ref={electricityUploadRef}
        style={{ display: "none" }}
      />
    </>
  );
}
