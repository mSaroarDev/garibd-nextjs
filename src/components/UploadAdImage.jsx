"use client";
import { uploadImage } from "@utils/uploadImage";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "./spinner/Spinner";
import PageHeader from "./PageHeader";
import BackButton from "./BackButton";
import { getSingleAdInfo, updateAd } from "@libs/api/ad";
import { showError, showSuccess } from "@utils/showToast";
import AdPicture from "./AdPictures";

export default function UploadAdImage({ Adid }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // image upload
  const [imgUrl, setImgUrl] = useState([]);
  const handleChange = async (e) => {
    setLoading(true);
    try {
      const image = e.target.files[0];
      const fileSizeInKb = parseInt(image.size) / 1024;
      if (fileSizeInKb > 1024) {
        return showError("FileSize must be less than 1 MB");
      }
      const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!allowedTypes.includes(image.type)) {
        return showError("Please select jpg or png image only");
      }

      // image upload to server
      setLoading(true);
      const res = await uploadImage(image);
      setLoading(false);
      if (res.status === "success") {
        // formik.setFieldValue("image", file.url);
        setImgUrl([...imgUrl, res.res]);
      }
    } catch (error) {
      showError("Image Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  // delete the image
  const handleDelete = (image) => {
    const remainingImage = imgUrl && imgUrl.filter((img) => img !== image);
    setImgUrl(remainingImage);
  };

  // video upload
  const [videoUrl, setVideoUrl] = useState([]);
  const handleVideoChange = async (e) => {
    setLoading(true);
    try {
      const image = e.target.files[0];
      const fileSizeInKb = parseInt(image.size) / 1024;
      if (fileSizeInKb > 358400) {
        return showError("Video টি 350 MB এর কম হতে হবে");
      }
      const allowedTypes = ["video/mp4", "video/ogg"];
      if (!allowedTypes.includes(image.type)) {
        return showError("ইনভ্যালিড ভিডিও টাইপ");
      }

      // image upload to server
      setLoading(true);
      const res = await uploadImage(image);
      setLoading(false);
      if (res.status === "success") {
        // formik.setFieldValue("image", file.url);
        setVideoUrl([...videoUrl, res.res]);
      }
    } catch (error) {
      showError("ভিডিও আপলোড হয়নি");
    } finally {
      setLoading(false);
    }
  };

  // delete the image
  const handleVideoDelete = (image) => {
    const remainingVideo =
      videoUrl && videoUrl.filter((video) => video !== video);
    setVideoUrl(remainingVideo);
  };

  // post photos
  const handleSubmit = async () => {
    setLoading(true);
    const res = await updateAd(Adid, { images: imgUrl, video: videoUrl });

    setLoading(false);
    if (res.ok) {
      showSuccess("গ্যালারী আপডেটেড");
      router.push("/user/my-ads?page=1");
    } else {
      showError("গ্যালারী আপডেট হয়নি");
    }
  };

  // get existing photos
  const [data, setData] = useState();
  const getData = async () => {
    try {
      setLoading(true);
      const res = await getSingleAdInfo(Adid);
      setData(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setImgUrl(data?.images || []);
    setVideoUrl(data?.video || []);
  }, [Adid, data]);

  return (
    <div className="p-5">
      {loading && <Spinner />}
      <div className="flex items-center justify-between">
        <BackButton />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded flex items-center gap-2 w-fit mb-3"
        >
          <CheckCircle className="w-4 h-4" />
          <span>আপডেট করুন</span>
        </button>
      </div>

      <div className="border border-borderColor rounded-md overflow-hidden">
        <div className="bg-lightBg px-4 py-2">
          <PageHeader text="ছবি যুক্ত করুন" />
        </div>

        <div className="p-5">
          <div className="grid grid-cols-12 gap-5">
            {imgUrl &&
              imgUrl.map((img, i) => (
                <AdPicture
                  key={i}
                  data={img}
                  index={i}
                  handleDelete={() => handleDelete(img)}
                />
              ))}

            {/* new photo upload */}
            {imgUrl?.length < 5 && (
              <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col border border-borderColor border-dashed">
                <div className="flex items-center justify-center w-full h-full cursor-pointer">
                  <label
                    htmlFor="dropzone-file"
                    className="flex items-center justify-center overflow-hidden"
                  >
                    <>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 cursor-pointer">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">আপলোড পিকচার</span>
                        </p>
                      </div>
                    </>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border border-borderColor rounded-md overflow-hidden mt-5">
        <div className="bg-lightBg px-4 py-2">
          <PageHeader text="ভিডিও যুক্ত করুন" />
        </div>

        <div className="p-5">
          <div className="grid grid-cols-12 gap-5">
            {videoUrl &&
              videoUrl.map((video, i) => (
                <AdPicture
                  fileType="video"
                  key={i}
                  data={video}
                  index={i}
                  handleDelete={() => handleVideoDelete(video)}
                />
              ))}

            {/* new photo upload */}
            {videoUrl?.length < 1 && (
              <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col border border-borderColor border-dashed">
                <div className="flex items-center justify-center w-full h-full cursor-pointer">
                  <label
                    htmlFor="dropzone-file2"
                    className="flex items-center justify-center overflow-hidden"
                  >
                    <>
                      <div className="flex flex-col items-center justify-center pt-5 pb-6 cursor-pointer">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">আপলোড ভিডিও</span>
                        </p>
                      </div>
                    </>
                    <input
                      id="dropzone-file2"
                      type="file"
                      className="hidden"
                      accept="video/mp4,video/x-m4v,video/*"
                      onChange={handleVideoChange}
                    />
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
