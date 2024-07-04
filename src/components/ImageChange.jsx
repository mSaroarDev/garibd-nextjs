"use client";
import { changePicture } from "@libs/api/profile";
import { showError, showSuccess } from "@utils/showToast";
import { uploadImage } from "@utils/uploadImage";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Spinner from "./spinner/Spinner";

export default function ImageChange({ prevImage }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const image = e.target.files[0];
      const res = await uploadImage(image);
      await changePicture(res.res);
      setLoading(false);
      setImgUrl(res.res);
      showSuccess("Profile Picture Updated");
      router.refresh();
    } catch (error) {
      showError("Failed to change");
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="h-[150px] w-[150px] rounded-full ring-2 ring-brandColor object-cover overflow-hidden change-picture">
        <img
          src={(imgUrl && imgUrl) || prevImage}
          alt=""
          className="w-full h-full object-cover rounded-full p-picture"
        />
      </div>

      <button onClick={handleClick} className="button-main mt-5">Update Photo</button>

      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </>
  );
}
