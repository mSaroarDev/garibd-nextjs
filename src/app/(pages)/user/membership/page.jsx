import MembershipCard from '@components/MembershipCard';
import PageHeader from '@components/PageHeader';
import { Crown } from 'lucide-react';

export default function MembershipPage() {
  return (
    <div className="p-10 mb-20 md:mb-0">
        <PageHeader text='Membership' icon={<Crown className='w-5 h-5' />} />

        {/* main content */}
        <div className='mt-10'>
            <div className='bg-[#FAF4EB] p-5 rounded-xl grid grid-cols-12 gap-2'>
                <div className='col-span-12 md:col-span-3'>
                    <img src="/king.png" alt="" className='w-[150px] -rotate-12' />
                </div>
                <div className='col-span-12 md:col-span-9 mt-5 md:mt-0'>
                    <h2 className='text-[25px] font-bold'>Greate! আপনি একজন প্রিমিয়াম মেমবার।</h2>
                    <p>একজন প্রিমিয়াম মেমবার হিসেবে গাড়ি বিডির সকল প্রিমিয়াম ফিচার্স গ্রহন করুন তাও আবার একই সাবক্রিপসন এই।</p>
                    <p className='text-[20px] font-semibold mt-3'> ক্রেডিট: ২৫০ </p>
                </div>
            </div>
        </div>

        {/* membership cards */}
        <div className='mt-10 membership__cards'>
            <h1 className='text-[25px] font-bold text-center'>মেমবারশিপ প্যাকেজ সমূহ</h1>

            {/* cards */}
            <div className='flex flex-wrap items-center justify-center mt-5 gap-4'>
                <MembershipCard />
                <MembershipCard />
                <MembershipCard />
            </div>
        </div>
    </div>
  )
}