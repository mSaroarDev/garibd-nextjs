import { SquareCheckBig } from "lucide-react";
import Link from "next/link";

export default function UserAdListRow() {
  return (
    <>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-black">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                    <SquareCheckBig className="w-4 h-4" />
                </th>
                <td className="px-6 py-4">
                    Toyota Ultra pro max
                </td>
                <td className="px-6 py-4">
                    Drum Truck
                </td>
                <td className="px-6 py-4">
                    পুরাতন
                </td>
                <td className="px-6 py-4">
                    ২,৫০,০০০/- 
                </td>
                <td className="px-6 py-4">
                    Sold
                </td>
                <td className="px-6 py-4 text-right">
                    <Link href="/" className="text-blue-600 px-2 hover:underline">বিস্তারিত</Link>
                    <Link href="/" className="text-blue-600 px-2 hover:underline">এডিট</Link>
                    <Link href="/" className="text-blue-600 px-2 hover:underline">অবস্থা পরিবর্তন</Link>
                </td>
            </tr>
    </>
  );
}