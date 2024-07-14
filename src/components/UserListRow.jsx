import { Ban, Gift, ScanEye } from "lucide-react";
import Link from "next/link";

export default function UserListRow({ data }) {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
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
        <td className="px-6 py-4 flex items-center justify-end gap-2">
          <Link href={`/admin/users/profile/${data?._id}`} className="px-3 py-2 flex items-center gap-1 bg-lightBg rounded-md text-black">
            <ScanEye className="w-4 h-4" />
            <span>প্রোফাইল</span>
          </Link>

          <button className="px-3 py-2 flex items-center gap-1 bg-lightBg rounded-md text-black">
            <Gift className="w-4 h-4" />
            <span>বিজ্ঞাপন</span>
          </button>

          <button className="px-3 py-2 flex items-center gap-1 bg-red-600/10 rounded-md text-black">
            <Ban className="w-4 h-4" />
            <span>ব্যান</span>
          </button>
        </td>
      </tr>
    </>
  );
}
