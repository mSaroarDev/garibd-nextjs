import { CheckCircle } from "lucide-react";

export default function StoreAdsListCard() {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-black">
        <td className="px-6 py-4">
          <CheckCircle className="w-4 h-4 text-green-500" />
        </td>
        <td className="px-6 py-4">10/05/2024</td>
        <td className="px-6 py-4 whitespace-nowrap">TATA 407 LPT CNG 2020 model NEW CONDITION</td>
        <td className="px-6 py-4 whitespace-nowrap">৳ ৩,৫৬,০০০/- টাকা</td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="bg-green-400/20 px-3 rounded-full text-green-600 whitespace-nowrap">
            ✔ বিক্রিত
          </span>
        </td>
      </tr>
    </>
  );
}
