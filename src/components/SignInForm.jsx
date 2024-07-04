"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { showError, showSuccess } from "@utils/showToast";
import LoadingButton from "./LoadingButton";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  // utils
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  // data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = { email, password };

  // signin
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        ...formData,
        redirect: false,
      });

      setLoading(false);
      if (res.ok) {
        showSuccess("Loggin Success");
        router.push("/user/dashboard")
      } else {
        showError("Invalid Credentials");
      }
    } catch (error) {
      showError("Internal Server Error");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="w-full flex flex-col gap-3">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Mobile No / Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {loading ? (
          <LoadingButton extraClassnames="button-main" text="সাইন ইন" />
        ) : (
          <button className="button-main" type="submit">
            সাইন ইন
          </button>
        )}
        <p className="text-right my-2">
          <Link href="/">পাসওয়ার্ড ভুলে গেছেন?</Link>
        </p>
        <p className="my-2 text-center">সোসিয়াল লগিন</p>
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
            onClick={() => signIn("google", { callbackUrl: "/user/dashboard" })}
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
