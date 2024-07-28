import AdminPaymentCard from "@components/AdminPaymentCard";
import PageHeader from "@components/PageHeader";
import Paggination from "@components/Paggination";
import { getPurchagePackages } from "@libs/api/purchagePackage";
import { allPaymentsCount } from "@libs/api/stats";
import { Wallet } from "lucide-react";

export default async function PaymentsPage({ searchParams }) {
  const pageNo = searchParams.page;

  // fetch data
  const payments = await getPurchagePackages(pageNo, 10);

  // counst data
  const countPayment = await allPaymentsCount();

  return (
    <>
      <PageHeader icon={<Wallet className="w-5 h-5" />} text={"পেমেন্ট সমূহ"} />

      <div className="mt-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  পেমেন্টকারীর নাম
                </th>
                <th scope="col" className="px-6 py-3">
                  পেমেন্ট মেথড
                </th>
                <th scope="col" className="px-6 py-3">
                  টাকার পরিমান
                </th>
                <th scope="col" className="px-6 py-3">
                  ট্রানজেকশন আইডি
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
              {payments?.map((item) => (
                <AdminPaymentCard key={item?._id} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Paggination
          count={parseInt(countPayment)}
          nextLink="/admin/payments"
        />
      </div>
    </>
  );
}
