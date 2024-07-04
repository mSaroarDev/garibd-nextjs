"use client";
import { useEffect, useState } from "react";

export const useUserInfo = () => {
  const [info, setInfo] = useState();

  useEffect(() => {
    async function userInfo() {
      try {
        const res = await fetch("/api/user/info", {
          method: "GET",
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setInfo(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    userInfo();
  }, []);

  return info;
};
