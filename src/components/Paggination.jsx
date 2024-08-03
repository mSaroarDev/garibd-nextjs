"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Paggination({count, nextLink}) {
    
    // page no
    const page_no = parseInt(useSearchParams().get("page"));

    // buttons
    const buttons = [];
    const startPage = Math.max(1, page_no - 5);
    const endPage = Math.min(Math.ceil(count / 10), page_no + 5);

    for (let i = startPage; i <= endPage; i++) {
        buttons.push(
          <Link
            href={`${nextLink}?page=${i}`}
            key={i}
            className={`join-item btn ${page_no === i ? "btn-active" : ""}`}
          >
            {i}
          </Link>
        );
      }


    return (
      <>
        <div className="join flex items-center overflow-hidden rounded-md mt-0 md:mt-5">
          <Link href={`${nextLink}?page=1`} className="join-item btn border-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </Link>
          {Math.ceil(count / 10) <= 1 ? (
          <Link
            href={`${nextLink}?page=1`}
            className={`join-item btn btn-active`}
          >
            1
          </Link>
        ) : (
          buttons
        )}
          <Link href={`${nextLink}?page=${Math.ceil(count / 10)}`} className="join-item btn border-0 rounded-e-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </>
    );
  }
  