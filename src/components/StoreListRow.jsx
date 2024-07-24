import Link from "next/link";

export default function StoreListRow({ data }) {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {data?.store_name}
        </th>
        <td className="px-6 py-4">
          {data?.store_type} ({data?.store_product_type})
        </td>
        <td className="px-6 py-4">{data?.store_ads?.length}</td>
        <td className="px-6 py-4 flex items-center justify-end gap-2">
          <Link
            href="#"
            className="bg-slate-100 text-black px-4 py-2 rounded-md "
          >
            Store Info
          </Link>
          <Link
            href="#"
            className="bg-slate-100 text-black px-4 py-2 rounded-md"
          >
            Ads
          </Link>
        </td>
      </tr>
    </>
  );
}
