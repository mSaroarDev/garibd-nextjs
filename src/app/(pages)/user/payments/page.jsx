import PaymentsCard from "@components/PaymentsCard";
import { Wallet } from "lucide-react";

export default function PaymentsPage() {

  return (
    <>

    <div className="p-3 lg:p-5">
    <div className="__head px-4 py-2 text-[18px] font-semibold flex items-center gap-3 mb-2">
    <Wallet className="w-4 h-4" />  পেমেন্ট সমূহ
            </div>

            <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    প্যাকেজ নাম
                </th>
                <th scope="col" className="px-6 py-3">
                    টাকার পরিমান
                </th>
                <th scope="col" className="px-6 py-3">
                    পেমেন্ট মেথড
                </th>
                <th scope="col" className="px-6 py-3">
                    অবস্থা
                </th>
            </tr>
        </thead>
        <tbody>
            <PaymentsCard/>
            <PaymentsCard />
            <PaymentsCard />
            <PaymentsCard />
        </tbody>
    </table>
</div>





    </div>
    

    </>
  );
}