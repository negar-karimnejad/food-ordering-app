"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserForm from "../../../components/shared/UserForm";
import UserTabs from "../../../components/shared/UserTabs";
import PageLoader from "../../../components/ui/PageLoader";
import { useProfile } from "../../../hook/useProfile";

export default function User() {
  const router = useRouter();
  const { data } = useProfile();
  const [user, setUser] = useState(null);
  const [userFetched, setUserFetched] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setUserFetched(true);
      });
  }, [id]);

  const updateUser = async (e, data) => {
    e.preventDefault();

    const res = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("User updated successfully.", {
      autoClose: 1200,
    });
      router.push("/users");
    } else {
      toast.error("Something went wrong.", {
      autoClose: 1200,
    });
    }
  };

  return (
    <>
      {userFetched ? (
        <div className="flex flex-col items-center justify-center">
          <UserTabs user={data} />
          <UserForm user={user} onSave={updateUser} />
        </div>
      ) : (
        <PageLoader />
      )}
    </>
  );
}
