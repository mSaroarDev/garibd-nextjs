"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserAdListRowMobile({ data }) {
  const { ad_name, price, currStatus } = data;
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.push(`/user/my-ads/${data?._id}`)}
        className="w-full cursor-pointer"
      >
        <div className="w-full h-[100px] border border-borderColor flex items-start gap-3">
          <div className="w-[170px] h-full border border-borderColor">
            <img
              src={data?.images[0]}
              alt={ad_name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-3 py-2 w-full">
            <h2 className="font-bold text-base">{ad_name}</h2>
            <p className="flex items-center gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>

              <span>{price}/- টাকা</span>
              {", "}
              {currStatus}
            </p>

            <div className="flex items-center gap-1 mt-2">
              <Link
              onClick={(e) => e.stopPropagation()}
                href={`/user/my-ads/edit-ad/${data?._id}`}
                className="text-blue-600 px-2 hover:underline whitespace-nowrap"
              >
                এডিট
              </Link>
              <Link
                href="/"
                className="text-blue-600 px-2 hover:underline whitespace-nowrap"
              >
                অবস্থা পরিবর্তন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
