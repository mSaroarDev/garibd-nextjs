import { CheckCircle } from "lucide-react";

export default function PaymentListCard() {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 text-black">
        <td className="px-6 py-4">
          <CheckCircle className="w-4 h-4 text-green-500" />
        </td>
        <td className="px-6 py-4">10/05/2024</td>
        <td className="px-6 py-4">bKash</td>
        <td className="px-6 py-4 uppercase">9XJKFJdfklkh</td>
        <td className="px-6 py-4">৳ 350 টাকা</td>
        <td className="px-6 py-4">
          <span className="bg-green-400/20 px-3 rounded-full text-green-600">
          • Paid
          </span>
        </td>
      </tr>
    </>
  );
}
