"use client";

import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function ExistingCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      await fetch("/api/category")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }
    getCategories();
  }, []);

  return (
    <>
      {categories?.map((category) => (
        <div
          key={category._id}
          className="bg-gray-100 mb-2 flex w-full justify-between rounded-lg p-2"
        >
          <Input
            type="text"
            value={category.title}
            // onChange={(e) => setTitle(e.target.value)}
            className="w-full border-0 font-bold bg-gray-100"
          />
          <div className="flex gap-x-2 items-center">
            <Button
              className="rounded-lg h-9 px-3 text-gray-800 text-base bg-transparent border"
              type="submit"
            >
              Edit
            </Button>
            <Button
              className="rounded-lg h-9 px-3 text-gray-800 text-base bg-transparent border"
              type="submit"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
