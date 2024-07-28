import PageHeader from "@components/PageHeader";
import Paggination from "@components/Paggination";
import { getAllDocuments } from "@libs/api/documents";
import { ClipboardList } from "lucide-react";
import Link from "next/link";

export default async function DocumentsPage() {
  // get all document
  const documents = await getAllDocuments();

  return (
    <>
      <PageHeader
        icon={<ClipboardList className="w-5 h-5" />}
        text={"ডকুমেন্ট ভেরিফিকেশন"}
      />

      <div className="mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  স্টোর নাম
                </th>
                <th scope="col" className="px-6 py-3">
                  ব্যবহারকারী
                </th>
                <th scope="col" className="px-6 py-3">
                  ঠিকানা
                </th>
                <th scope="col" className="px-6 py-3">
                  স্ট্যাটাস
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  পদক্ষেপ
                </th>
              </tr>
            </thead>
            <tbody>
              {documents?.map((item) => (
                <tr
                  key={item?._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item?.user?.store?.store_name}
                  </th>
                  <td className="px-6 py-4">{item?.user?.nickname}</td>
                  <td className="px-6 py-4">
                    {item?.user?.store?.store_address}
                  </td>
                  <td className="px-6 py-4">{item?.approval_status}</td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      href={`/admin/documents/details/${item?._id}`}
                      className="font-medium px-3 py-1 bg-darkBg text-white rounded-md"
                    >
                      বিস্তারিত
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Paggination count={30} nextLink={`/admin/documents`} />
      </div>
    </>
  );
}
