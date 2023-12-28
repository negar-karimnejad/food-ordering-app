"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../../components/ui/Button";
import CategoryLoader from "../ui/CategoryLoader";

export default function ExistingCategories({ categories, getCategories }) {
  const [title, setTitle] = useState("");
  const [ShowDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const editCategory = async (id) => {
    const res = await fetch(`/api/category/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (res.ok) {
      toast.success("Category updated successfully");
      getCategories();
    }
  };

  const deleteCategory = async (id) => {
    const res = await fetch(`/api/category/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      toast.success("Category deleted successfully");
      setShowDeleteModal(false);
      getCategories();
    }
  };

  return (
    <>
      {categories.length !== 0 ? (
        categories?.map((category) => (
          <div
            key={category._id}
            className="bg-gray-200 mb-2 flex w-full justify-between rounded-lg p-2"
          >
            <input
              type="text"
              defaultValue={category.title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-none flex gap-2 p-2 rounded-md w-full border-0 font-bold bg-gray-200"
            />
            <div className="flex gap-x-2 items-center">
              <Button
                onClick={() => editCategory(category._id)}
                className="rounded-lg h-9 px-3 text-gray-800 text-base bg-transparent border border-gray-400"
                type="button"
              >
                Edit
              </Button>
              <Button
                onClick={() => setShowDeleteModal(true)}
                className="rounded-lg h-9 px-3 text-gray-800 text-base bg-transparent border border-gray-400"
                type="button"
              >
                Delete
              </Button>
            </div>
            {ShowDeleteModal && (
              <div className="fixed top-0 left-0 w-screen h-screen bg-black/20 flex items-center justify-center">
                <div className="bg-white rounded-lg px-5 w-72 h-40 flex flex-col gap-y-5 justify-center items-center">
                  <p className="font-semibold text-center">
                    Are you sure you want to delete?
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-1.5 rounded-lg border font-bold bg-transparent text-gray-700 hover:opacity-80"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      Cancel
                    </button>
                    <Button
                      className="rounded-lg"
                      onClick={() => deleteCategory(category._id)}
                    >
                      Yes,Delete!
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <CategoryLoader />
      )}
    </>
  );
}
