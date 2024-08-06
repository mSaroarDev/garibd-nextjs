import formatTimeAgo from "@utils/convert_date";
import Link from "next/link";

export default function AdCard({ data }) {
  return (
    <>
      <Link
        href={`/ad/details/${data?._id}?title=${data?.ad_name}&category=${data?.caegoryId?.categoryName}&company=${data?.companyId?.companyName}`}
        className="col-span-12 md:col-span-6 lg:col-span-4 w-full md:max-w-[260px] border border-borderColor bg-white rounded-md p-2"
      >
        <div className="h-[150px] w-full border border-borderColor overflow-hidden">
          <img
            src={data?.images[0]}
            alt={data?.ad_name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-3">
          <h1 className="text-lg font-bold my-2 leading-5">{data?.ad_name}</h1>
          <p className="font-bold text-base">৳ {data?.price}/- টাকা</p>
          <div className="flex items-center justify-between text-sm mt-1 -mb-1">
            <p>{formatTimeAgo(data?.createdAt)}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
