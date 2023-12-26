"use client";

import { useState } from "react";
import UserTabs from "../../components/shared/UserTabs";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useProfile } from "../../hook/useProfile";
import { toast } from "react-toastify";
import ExistingCategories from "../../components/shared/ExistingCategories";

export default function Categories() {
  const { loading, data } = useProfile();
  const [title, setTitle] = useState("");

  if (!data.admin) {
    return "Non an admin";
  }
  const createCategory = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      const res = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      if (res.ok) {
        toast.success("Category created successfully");
        setTitle("");
      }
    }
  };

  return (
    <>
      <UserTabs user={data} />
      <div className="min-w-[350px] max-w-[450px] sm:max-w-[550px] mt-16 m-auto flex flex-col justify-center items-center">
        <form onSubmit={createCategory} className="w-full">
          <label htmlFor="title" className="text-sm text-gray-400">
            New category name
          </label>
          <div className="flex justify-between gap-1 w-full">
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-100 h-9"
            />
            <Button className="rounded-lg h-9 px-3 text-base" type="submit">
              Create
            </Button>
            <Button className="rounded-lg h-9 px-3 text-gray-800 text-base bg-transparent border">
              Cancel
            </Button>
          </div>
        </form>
        <form onSubmit={createCategory} className="mt-10 w-full">
          <label htmlFor="" className="flex text-sm text-gray-400">
            Existing categories
          </label>
          <ExistingCategories />
        </form>
      </div>
    </>
  );
}
