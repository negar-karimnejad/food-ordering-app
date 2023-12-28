"use client";

import { useEffect, useState } from "react";
import UserForm from "../../../components/shared/UserForm";
import UserTabs from "../../../components/shared/UserTabs";
import { useProfile } from "../../../hook/useProfile";
import { useParams } from "next/navigation";
import PageLoader from "../../../components/ui/PageLoader";

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

  const updateUser = async () => {
    const data = {
      name: fullname,
      email: user?.email,
      phone,
      street,
      postalcode,
      city,
      country,
      image,
      admin,
    };
    await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
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
