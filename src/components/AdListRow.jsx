import { Ban, Gift, LineChart, ScanEye, SquarePen, Trash, Trash2 } from "lucide-react";
import Link from "next/link";

export default function AdListRow({ data }) {
  return (
    <>
      <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {data?.title}
        </th>
        <td class="px-6 py-4">{data?.categoryId?.categoryName}</td>
        <td class="px-6 py-4">{data?.companyName}</td>
        <td class="px-6 py-4">৳ {data?.price}</td>
        <td class="px-6 py-4 text-right">
          <Link
            href={`/admin/users/profile/${data?._id}`}
            className="w-fit px-3 py-2 inline-flex items-center gap-1 bg-lightBg rounded-md text-black"
          >
            <ScanEye className="w-4 h-4" />
            <span>বিস্তারিত</span>
          </Link>

          <button className=" w-fit mx-1 px-3 py-2 inline-flex items-center gap-1 bg-lightBg rounded-md text-black">
            <SquarePen className="w-4 h-4" />
            <span>এডিট</span>
          </button>

          <button className="w-fit mx-1 px-3 py-2 inline-flex items-center gap-1 bg-red-600/10 rounded-md text-black">
            <Trash2 className="w-4 h-4" />
            <span>ডিলিট</span>
          </button>

          <button className="w-fit px-3 py-2 inline-flex items-center gap-1 bg-red-600/10 rounded-md text-black">
            <LineChart className="w-4 h-4" />
            <span>অবস্থা</span>
          </button>
        </td>
      </tr>
    </>
  );
}
