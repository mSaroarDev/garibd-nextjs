"use client";
import { useEffect, useState } from "react";
import Spinner from "./spinner/Spinner";
import { useRouter } from "next/navigation";

export default function DocumentDetails({ lastDocument }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [nidFront, setNidFront] = useState();
  const [nidBack, setNidBack] = useState();
  const [electricityBill, setElectricityBill] = useState();

  useEffect(() => {
    setNidFront(lastDocument?.nid_card_front);
    setNidBack(lastDocument?.nid_card_back);
    setElectricityBill(lastDocument?.home_electricity_bill);
  }, [lastDocument?._id]);

  // show image in big
  const [showImage, setShowImage] = useState(false);
  const [imageToShow, setImageToShow] = useState("");

  const showLightBox = (image) => {
    setShowImage(true);
    setImageToShow(image);
  };

  const hideLightBox = () => {
    setShowImage(false);
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="mt-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6">
            <div className="w-full p-3 border border-borderColor rounded-xl">
              <div
                onClick={() => showLightBox(nidFront)}
                className="w-full h-[150px] mb-1 border border-borderColor border-dashed rounded-lg"
              >
                <img
                  src={(nidFront && nidFront) || "/image-placeholder.png"}
                  alt="Front"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center mb-3">জাতীয় পরিচয় পত্র Front</p>

              <div
                onClick={() => showLightBox(nidBack)}
                className="w-full h-[150px] mb-1 border border-borderColor border-dashed rounded-lg"
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
                onClick={() => showLightBox(electricityBill)}
                className="w-full h-[300px] mb-1 border border-borderColor border-dashed rounded-lg"
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
      </div>

      {showImage ? (
        <div id="lightbox" onClick={hideLightBox}>
          <div className="w-full max-w-6xl mx-auto h-[80vh] max-h-4/5 my-auto">
            <img
              id="lightbox-img"
              src={imageToShow}
              className="w-full h-full object-contain"
              alt="Image"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
