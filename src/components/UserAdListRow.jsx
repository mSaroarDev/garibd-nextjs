"use client";
import { updateAdStatus } from "@libs/api/ad";
import { showError, showSuccess } from "@utils/showToast";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "./spinner/Spinner";
import { getProfile } from "@libs/api/profile";
import { useSession } from "next-auth/react";

export default function UserAdListRow({ data }) {
  const session = useSession();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { ad_name, condition, price, currStatus } = data;

  // update status
  const formik = useFormik({
    initialValues: {
      status: data?.currStatus,
    },
    onSubmit: async (values) => {
      document.getElementById(`change_status_${data?._id}`).close();
      setLoading(true);
      try {
        const res = await updateAdStatus(data?._id, values);

        if (res.ok) {
          showSuccess("Update Success");
          router.refresh();
        } else {
          showError("Update failed");
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
      {loading && <Spinner />}
      <tr className="w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
        <th
          scope="row"
          className="px-6 py-2 font-medium whitespace-nowrap dark:text-white"
        >
          <div className="w-24 h-16">
            <img
              src={data?.images[0]}
              alt={ad_name}
              className="h-full w-full object-cover border border-borderColor"
            />
          </div>
        </th>
        <td className="px-6 py-4">
          <span className="text-base font-semibold whitespace-pre-line">
            {ad_name}
          </span>{" "}
          <br />
          <p className="flex items-center gap-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>

            <span>{price}/- টাকা</span>
          </p>
        </td>
        <td className="px-6 py-4">{data?.categoryId?.categoryName}</td>
        <td className="px-6 py-4">{condition}</td>
        <td className="px-6 py-4">{currStatus}</td>
        <td className="px-6 py-4 text-right whitespace-nowrap">
          <Link
            href={`/user/my-ads/${data?._id}`}
            className="bg-brandColor text-white hover:bg-[#292929]/20 hover:text-[#292929] px-2 py-1 rounded-md transition-all duration-300"
          >
            বিস্তারিত
          </Link>
          {session && session?.data?.user?.role === "Admin" ? (
            <Link
            href={`/admin/ads/edit/${data?._id}`}
            className="bg-blue-600 text-white hover:bg-blue-600/20 hover:text-blue-600 px-2 py-1 rounded-md mx-1 transition-all duration-300"
          >
            এডিট
          </Link>
          ) : (
            <Link
            href={`/user/my-ads/edit-ad/${data?._id}`}
            className="bg-blue-600 text-white hover:bg-blue-600/20 hover:text-blue-600 px-2 py-1 rounded-md mx-1 transition-all duration-300"
          >
            এডিট
          </Link>
          )}
          <button
            onClick={() =>
              document.getElementById(`change_status_${data?._id}`).showModal()
            }
            className="bg-[#292929] text-white hover:bg-[#292929]/20 hover:text-[#292929] px-2 py-1 rounded-md transition-all duration-300"
          >
            অবস্থা পরিবর্তন
          </button>
        </td>
      </tr>

      {/* change status modal */}
      <dialog id={`change_status_${data?._id}`} className="modal text-black">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-full pt-10">
            {/* <h3 className="font-bold text-base">বিজ্ঞাপন এর বর্তমান অবস্থা</h3> */}
            <form onSubmit={formik.handleSubmit}>
              <div className="flex items-center gap-5">
                <label>বর্তমান অবস্থা</label>
                <select
                  className="w-full"
                  id="status"
                  name="status"
                  onChange={formik.handleChange}
                  value={formik.values.status}
                >
                  <option value="">সিলেক্ট করুন</option>
                  <option value="Not Sold">Not Sold</option>
                  <option value="Sold">Sold</option>
                  <option value="Terminate">Terminate</option>
                  <option value="Archieve">Archieve</option>
                </select>
              </div>

              <div className="flex items-center justify-end">
                <button type="submit" className="button-main mt-3">
                  আপডেট করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
