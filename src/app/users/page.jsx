"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserTabs from "../../components/shared/UserTabs";
import Button from "../../components/ui/Button";
import { useProfile } from "../../hook/useProfile";

export default function Users() {
  const router = useRouter();

  const { data } = useProfile();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  if (!data.admin) {
    return (
      <p className="text-center font-extrabold mt-10 text-xl bg-gray-100  p-3 text-primary shadow-xl w-[350px] m-auto rounded-md">
        Non an admin
      </p>
    );
  }

  return (
    <>
      <UserTabs user={data} />
      <div className="mt-10">
        {users?.map((user) => (
          <div
            key={user._id}
            className="bg-gray-100 flex max-w-md md:max-w-2xl m-auto justify-between items-center font-bold rounded-lg px-3 py-2 mb-2"
          >
            <div className="flex items-center w-full">
              <p className="flex-1">{user.name}</p>
              <p className="flex-1 text-gray-400 text-sm md:text-base">
                {user.email}
              </p>
            </div>
            <Button
              onClick={() => router.push(`users/${user._id}`)}
              className="rounded-lg h-9 px-3 text-gray-800 text-base bg-transparent border border-gray-400"
              type="button"
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
