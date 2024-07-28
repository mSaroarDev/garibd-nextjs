"use client";
import { useFormik } from "formik";
import "../../node_modules/sweetalert/dist/sweetalert.css";
import { useState } from "react";
import { showError, showSuccess } from "@utils/showToast";
import { changePaymentAndPackageStatus } from "@libs/api/payments";
import { useRouter } from "next/navigation";
import Spinner from "./spinner/Spinner";

export default function AdminPaymentCard({ item }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // form data
  const formik = useFormik({
    initialValues: {
      payment_status: item?.payment_info?.status,
      currStatus: item?.currStatus,
    },

    onSubmit: async (values) => {
      document.getElementById(`my_modal_${item?._id}`).close();
      setLoading(true);
      try {
        const res = await changePaymentAndPackageStatus(item?._id, values);

        if (res.ok) {
          showSuccess("Updated");
          router.refresh();
        } else {
          showError("Update Failed");
        }
      } catch (error) {
        showError("Internal server error");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      {loading && <Spinner />}
      {/* modal */}
      <dialog id={`my_modal_${item?._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-full">
            <h2 className="text-[18px] italic">Status পরিবর্তন করুন</h2>
            <form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-12 gap-5 p-5 text-black text-[17px]"
            >
              <label className="col-span-4">পেমেন্ট স্ট্যাটাসঃ</label>
              <select
                id="payment_status"
                name="payment_status"
                value={formik.values.payment_status}
                onChange={formik.handleChange}
                className="w-full col-span-8"
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
              </select>

              <label className="col-span-4">প্যাকেজ স্ট্যাটাসঃ</label>
              <select
                id="currStatus"
                name="currStatus"
                value={formik.values.currStatus}
                onChange={formik.handleChange}
                className="w-full col-span-8"
              >
                <option value="">সিলেক্ট করুন</option>
                <option value="pending">Pending</option>
                <option value="active">Active</option>
                <option value="expired">Expired</option>
              </select>

              <div className="flex items-center justify-end col-span-6">
                <button type="submit" className="button-main">
                  আপডেট
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      {/* information modal */}
      {/* modal */}
      <dialog id={`info_modal_${item?._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-full">
            <h2 className="text-[18px] italic">Payment তথ্যঃ</h2>
            <form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-12 gap-5 p-5 text-black text-[17px]"
            >
              <label className="col-span-4">পেমেন্ট মেথডঃ</label>
              <input type="text"  value={item?.payment_info?.paymentMethod} className="col-span-8" disabled />

              <label className="col-span-4">লাস্ট নম্বরঃ</label>
              <input type="text"  value={item?.payment_info?.paidFrom} className="col-span-8" disabled />

              <label className="col-span-4">ট্রানজেকশন আইডিঃ</label>
              <input type="text"  value={item?.payment_info?.trxId} className="col-span-8" disabled />

              <label className="col-span-4">তারিখঃ</label>
              <input type="text"  value={item?.payment_info?.paidAt?.date} className="col-span-8" disabled />

              <label className="col-span-4">সময়ঃ</label>
              <input type="text"  value={item?.payment_info?.paidAt?.time} className="col-span-8" disabled />

            </form>
          </div>
        </div>
      </dialog>

      <tr
        key={item?._id}
        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
        >
          {item?.user?.nickname}
        </th>
        <td className="px-6 py-4 text-black whitespace-nowrap">
          {item?.payment_info?.paymentMethod}
        </td>
        <td className="px-6 py-4 text-black whitespace-nowrap">
          {item?.payment_info?.amount}
        </td>
        <td className="px-6 py-4 uppercase text-black whitespace-nowrap">
          {item?.payment_info?.trxId}
        </td>
        <td className="px-6 py-4 text-black whitespace-nowrap uppercase">
          {item?.payment_info?.status}
        </td>
        <td className="px-6 py-4 text-center text-black whitespace-nowrap">
          <button
            onClick={() =>
              document.getElementById(`info_modal_${item?._id}`).showModal()
            }
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            View
          </button>

          <button
            onClick={() =>
              document.getElementById(`my_modal_${item?._id}`).showModal()
            }
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-5"
          >
            Set Status
          </button>
        </td>
      </tr>
    </>
  );
}
