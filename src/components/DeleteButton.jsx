"use client";
import { showError } from "@utils/showToast";
import { useState } from "react";
import Spinner from "./spinner/Spinner";

export default function DeleteButton({
  extraClasses,
  deleteFunction,
  children,
}) {
  // utils
  const [loading, setLoading] = useState(false);

  // delete function
  const handleDelete = () => {
    try {
      setLoading(true);
      deleteFunction();
    } catch (error) {
      showError("Something is error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <button onClick={() => handleDelete()} className={`${extraClasses}`}>
        {children}
      </button>
    </>
  );
}
