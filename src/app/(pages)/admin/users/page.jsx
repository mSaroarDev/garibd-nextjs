import PageHeader from "@components/PageHeader";
import Paggination from "@components/Paggination";
import UserListRow from "@components/UserListRow";
import { allUsersCount } from "@libs/api/stats";
import { getAllUsers } from "@libs/api/users";
import { CircleUserRound } from "lucide-react";

export default async function UserListPage({ searchParams }) {
  const pageNo = searchParams.page;

  // users
  const users = await getAllUsers(pageNo, 10);
  const usersCount = await allUsersCount();
  console.log(usersCount);

  return (
    <>
      <div>
        <div>
          <PageHeader
            text="রেজিষ্টার্ড ব্যবহারকারী"
            icon={<CircleUserRound className="w-5 h-5" />}
          />
        </div>

        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ছবি
                  </th>
                  <th scope="col" className="px-6 py-3">
                    নাম
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ঠিকানা
                  </th>
                  <th scope="col" className="px-6 py-3">
                    মোবাইল নং
                  </th>
                  <th scope="col" className="px-6 py-3">
                    স্টোর ইনফো
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 flex items-center justify-end"
                  >
                    পদক্ষেপ
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user) => (
                  <UserListRow key={user?._id} data={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Paggination count={parseInt(usersCount)} nextLink={"/admin/users"} />
        </div>
      </div>
    </>
  );
}
