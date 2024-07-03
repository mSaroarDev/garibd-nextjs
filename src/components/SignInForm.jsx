"use client";
import { register } from "@libs/api/users";
import { showError, showSuccess } from "@utils/showToast";
import { useFormik } from "formik";
import { useState } from "react";
import ButtonLoader from "./loaders/button-loader/Loader";
import LoadingButton from "./LoadingButton";

export default function SignInForm() {
  // utils
  const [loading, setLoading] = useState(false);

  // auto login
  const autoLogin = () => {
    alert("Logged in");
  };

  // formik
  const formik = useFormik({
    initialValues: {
      nickname: "",
      mobile: "",
      email: "",
      password1: "",
      password2: "",
    },
    onSubmit: async (values) => {
      const { nickname, mobile, email, password1, password2 } = values;
      if (!nickname || !mobile || !email || !password1 || !password2) {
        return showError("Please input all fields.");
      }

      if (password1 !== password2) {
        return showError("Password didn't match.");
      }

      if (password1.length < 6) {
        return showError("Password must be more than 6 character");
      }

      try {
        setLoading(true);
        const res = await register(values);

        setLoading(false);
        const data = await res.json();
        if (data?.msg === "duplicate") {
          return showError("User Already Exist");
        }

        if (res.ok) {
          showSuccess("Registration Success");

          // after succesfully registration
          autoLogin();
        } else {
          showError("Registration Failed");
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
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col gap-3"
      >
        <input
          type="text"
          id="nickname"
          name="nickname"
          value={formik.values.nickname}
          onChange={formik.handleChange}
          placeholder="Nickname"
        />
        <input
          type="text"
          id="mobile"
          name="mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          placeholder="Mobile No"
        />
        <input
          type="text"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          id="password1"
          name="password1"
          value={formik.values.password1}
          onChange={formik.handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          id="password2"
          name="password2"
          value={formik.values.password2}
          onChange={formik.handleChange}
          placeholder="Retype Password"
        />
        {loading ? (
          <LoadingButton
            text="অ্যাকাউন্ট খুলুন"
            extraClassnames="button-main flex items-center justify-center gap-5"
          />
        ) : (
          <button
            className="button-main flex items-center justify-center gap-5"
            type="submit"
          >
            {loading && <ButtonLoader />}
            অ্যাকাউন্ট খুলুন
          </button>
        )}
        <p className="my-2 text-center">সোসিয়াল অ্যাকাউন্ট খুলুন</p>
        <div className="flex items-center justify-between gap-5">
          <button
            type="button"
            className="bg-blue-800 text-white flex items-center justify-center gap-4 w-full p-2 rounded-sm shadow-sm"
          >
            <img src="/facebook.png" alt="" className="w-2" />
            <span>ফেইসবুক</span>
          </button>

          <button
            type="button"
            className="bg-white text-black flex items-center justify-center gap-4 w-full p-2 rounded-sm shadow-sm"
          >
            <img src="/google.svg" className="w-5" />
            <span>গুগল</span>
          </button>
        </div>
      </form>
    </>
  );
}
