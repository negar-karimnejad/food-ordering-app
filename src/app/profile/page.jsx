"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserForm from "../../components/shared/UserForm";
import UserTabs from "../../components/shared/UserTabs";
import PageLoader from "../../components/ui/PageLoader";

export default function Profile() {
  const session = useSession();
  const { status } = session;

  const [user, setUser] = useState(null);
  const [profileFetched, setProfileFetched] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          console.log(data);
          setUser(data);
          setProfileFetched(true);
        });
      });
    }
  }, [session, status]);

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  const updateUser = async (e, data) => {
    e.preventDefault();

    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile saved!",
      error: "Error",
    });
  };

  return (
    <>
      {status === "loading" || !profileFetched ? (
        <PageLoader />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <UserTabs user={user} />
          <UserForm user={user} onSave={updateUser} />
        </div>
      )}
    </>
  );
}
