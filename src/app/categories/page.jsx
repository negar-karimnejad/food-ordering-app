"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import ExistingCategories from "../../components/shared/ExistingCategories";
import UserTabs from "../../components/shared/UserTabs";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { useProfile } from "../../hook/useProfile";

export default function Categories() {
  const { loading, data } = useProfile();
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    await fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }

  if (!data.admin) {
    return (
      <p className="text-center font-extrabold mt-10 text-xl bg-gray-100  p-3 text-primary shadow-xl w-[350px] m-auto rounded-md">
        Non an admin
      </p>
    );
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
        toast.success("Category created successfully", {
          autoClose: 1200,
        });
        setTitle("");
        getCategories();
      } else {
        toast.error("Something went wrong.", {
          autoClose: 1200,
        });
      }
    }
  };

  return (
    <>
      {loading ? "loading..." : <UserTabs user={data} />}
      <div className="min-w-[350px] max-w-[450px] sm:max-w-[550px] mt-16 m-auto flex flex-col justify-center items-center">
        <form onSubmit={createCategory} className="w-full">
          <label htmlFor="title" className="text-sm text-gray-500">
            New category name
          </label>
          <div className="flex justify-between gap-1 w-full">
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-200 h-9"
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
          <label htmlFor="" className="flex text-sm text-gray-500">
            Existing categories
          </label>
          <ExistingCategories
            categories={categories}
            getCategories={getCategories}
          />
        </form>
      </div>
    </>
  );
}
