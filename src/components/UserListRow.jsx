"use client";
import { Ban, Gift, ScanEye } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { showError, showSuccess } from "@utils/showToast";
import Spinner from "./spinner/Spinner";
import { changStatus } from "@libs/api/users";
import Swal from "sweetalert2";

export default function UserListRow({ data }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  // const change user status
  const changeUserStatus = async () => {
    setShowModal(false);
    setLoading(true);
    try {
      const res =
        data?.status === "Active"
          ? await changStatus(data?._id, { status: "Blocked" })
          : await changStatus(data?._id, { status: "Active" });

      if (res.ok) {
        showSuccess(
          data?.status === "Active" ? "User Blocked" : "Use Re-Activated"
        );
        router.refresh();
      } else {
        showError("Failed to Block the user");
      }
    } catch (err) {
      console.log(err);
      showError("Internal server error");
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };
  // Are you sure you want to ${data?.status === "Active" ? "Block The User" : "Re-Activate The user"}
  // user ban modal
  const modal = () =>
    Swal.fire({
      title: "Warning!",
      icon: "info",
      html: `
    Are you sure you want to ${
      data?.status === "Active" ? "Block The User" : "Re-Activate The user"
    }
  `,
      showCancelButton: true,
      confirmButtonText: "Confirm",
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        changeUserStatus();
        router.refresh();
      } 
    });

  return (
    <>
      {loading && <Spinner />}

      <tr
        className={`border-b dark:border-gray-700 ${
          data?.status === "Blocked"
            ? "bg-red-500/5"
            : "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800"
        }`}
      >
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
            <img
              src={data?.image || "/placeholder.jpg"}
              alt="Image"
              className="w-full h-full object-cover"
            />
          </div>
        </td>
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {data?.profile?.name_bn || data?.nickname}
        </td>
        <td className="px-6 py-4">{data?.profile?.address}</td>
        <td className="px-6 py-4">{data?.mobile}</td>
        <td className="px-6 py-4">{data?.mobile}</td>
        <td className="px-6 py-4 flex items-center justify-end gap-2 font-semibold">
          <Link
            href={`/admin/users/profile/${data?._id}`}
            className="px-3 py-1 flex items-center gap-1 bg-lightBg rounded-md text-black"
          >
            <ScanEye className="w-4 h-4" />
            <span>প্রোফাইল</span>
          </Link>

          <Link
            href={`/admin/users/ads/${data?._id}`}
            className="px-3 py-1 flex items-center gap-1 bg-lightBg rounded-md text-black"
          >
            <Gift className="w-4 h-4" />
            <span>বিজ্ঞাপন</span>
          </Link>

          {data?.status === "Blocked" ? (
            <>
              <button
                onClick={() => modal()}
                className="px-3 py-1 flex items-center gap-1 bg-red-600/10 rounded-md text-black"
              >
                <Ban className="w-4 h-4" />
                <span>অ্যাক্টিভ</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => modal()}
                className="px-3 py-1 flex items-center gap-1 bg-red-600/10 rounded-md text-black"
              >
                <Ban className="w-4 h-4" />
                <span>ব্যান</span>
              </button>
            </>
          )}
        </td>
      </tr>
    </>
  );
}
