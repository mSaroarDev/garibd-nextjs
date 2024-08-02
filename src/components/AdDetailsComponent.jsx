"use client";

import { Heart, Share2, Youtube } from "lucide-react";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import EditAdForm from "./EditAdForm";
import AdDetailsForm from "./AdDetailsForm";
import formatTimeAgo from "@utils/convert_date";
import Image from "next/image";

export default function AdsDetailsComponent({ adDetails }) {
  const media = [...adDetails?.images, adDetails.video[0]];
  const isImage = (item) => {
    return item.match(/\.(jpeg|jpg|gif|png|webp)$/i);
  };

  const isVideo = (item) => {
    return item.match(/\.(mp4|webm|ogg)$/i);
  };

  // set the clicked image to the slider
  const [selectedImage, setSelectedImage] = useState(media[0]);
  const selectVideo = (e, item) => {
    e.stopPropagation();
    setSelectedImage(item);
  };

  return (
    <div className="bg-body">
      <div className="grid grid-cols-12 gap-5 p-5">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white p-5 rounded border border-borderColor">
            <h1 className="text-xl font-bold">{adDetails?.ad_name}</h1>

            <div className="images-box w-full h-[350px] mt-3 rounded-md overflow-hidden">
              {isImage(selectedImage) && (
                <img
                  src={selectedImage}
                  alt={adDetails?.ad_name}
                  className="w-full h-full object-contain border border-borderColor"
                />
              )}

              {isVideo(selectedImage) && (
                <video
                  className="w-full h-full object-contain border border-borderColor"
                  controls
                >
                  <source src={selectedImage} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="ad-images mt-3 rounded-md overflow-hidden">
              <div className="flex items-center gap-2">
                {media.map((item, i) => (
                  <div key={i} className="w-[120px] h-[90px]">
                    {isImage(item) && (
                      <img
                        onClick={() => setSelectedImage(item)}
                        src={item}
                        alt={adDetails?.ad_name}
                        className="w-full h-full object-cover border border-borderColor cursor-pointer"
                      />
                    )}
                    {isVideo(item) && (
                      <div className="relative w-full h-full">
                        <video
                          className="w-full h-full object-cover border border-borderColor"
                          controls={false}
                        >
                          <source src={item} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
                          onClick={(e) => selectVideo(e, item)}
                        >
                          <Youtube className="text-white text-3xl" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ad details */}
          <div className="bg-white p-5 rounded border border-borderColor my-5">
            <h2 className="text-base font-bold">বিজ্ঞাপন বিস্তারিত</h2>

            <div className="mt-3">
              <AdDetailsForm adData={adDetails} />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          {/* price and time */}
          <div className="bg-white p-5 rounded border border-borderColor">
            <h1 className="text-2xl font-bold">৳ {adDetails?.price}/- টাকা</h1>
            <p className="text-gray-800">{adDetails?.location}</p>

            <div className="flex items-center justify-between mt-5">
              <p>{formatTimeAgo(adDetails?.createdAt)}</p>

              <div className="flex items-center gap-5">
                <button className="">
                  <Share2 />
                </button>
                <button className="">
                  <Heart />
                </button>
              </div>
            </div>
          </div>

          {/* contact seller */}
          <div className="bg-white p-5 rounded border border-borderColor my-5">
            <div className="flex items-center gap-5">
              <Image
                src={adDetails?.user?.image}
                width={40}
                height={40}
                alt={adDetails?.ad_name}
                className="rounded-full"
              />
              <h2 className="text-base font-bold">
                {adDetails?.user?.nickname}
              </h2>
            </div>

            <button className="button-main w-full mt-5">মেসেজ করুন</button>
          </div>
        </div>
      </div>
    </div>
  );
}
