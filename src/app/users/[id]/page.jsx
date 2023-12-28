"use client";

import { useEffect, useState } from "react";
import UserForm from "../../../components/shared/UserForm";
import UserTabs from "../../../components/shared/UserTabs";
import { useProfile } from "../../../hook/useProfile";
import { useParams } from "next/navigation";
import PageLoader from "../../../components/ui/PageLoader";
import { toast } from "react-toastify";

export default function User() {
  const { loading, data } = useProfile();
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
  }, []);

  const updateUser = async (e, data) => {
    e.preventDefault();

    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("User updated successfully.");
    } else {
      toast.error("Something went wrong.");
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
