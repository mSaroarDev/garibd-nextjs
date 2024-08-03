import formatTimeAgo from "@utils/convert_date";
import convertDateAndTime from "@utils/convertDateAndTime";
import convertToBanglaNumber from "@utils/convertNumbertoBangla";
import { CheckCircle } from "lucide-react";

export default function StoreAdsListCard({data}) {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-black">
        <td className="px-6 py-4">
          <CheckCircle className="w-4 h-4 text-green-500" />
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{formatTimeAgo(data?.createdAt)}</td>
        <td className="px-6 py-4 whitespace-nowrap">{data?.ad_name}</td>
        <td className="px-6 py-4 whitespace-nowrap">৳ {data?.price}/- টাকা</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {data?.currStatus === "Not Sold" ? (
            <span className="bg-black px-3 rounded-full text-white whitespace-nowrap">
            ↺ অবিক্রিত
          </span>
          ) : (
            <span className="bg-green-400/20 px-3 rounded-full text-green-600 whitespace-nowrap">
            ✔ বিক্রিত
          </span>
          )}
        </td>
      </tr>
    </>
  );
}
