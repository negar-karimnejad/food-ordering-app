"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import EditableImage from "../../../components/shared/EditableImage";
import UserTabs from "../../../components/shared/UserTabs";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import LeftArrow from "../../../components/ui/LeftArrow";
import { useProfile } from "../../../hook/useProfile";

export default function NewMenuItems() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const { loading, data } = useProfile();
  const router = useRouter();

  const saveMenuItem = async (e) => {
    e.preventDefault();

    const data = { image, title, description, category, price };

    const res = await fetch("/api/menu-items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success("Menu item saved successfully");
      router.push("/menu-items");
    } else {
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      <UserTabs user={data} />
      <div className="w-[350px] md:w-[700px] mt-16 m-auto flex flex-col justify-center items-center">
        <Link
          href="/menu-items"
          className="flex gap-3 font-bold border rounded-lg p-2 w-full items-center justify-center"
        >
          <LeftArrow /> Show all menu item
        </Link>
        <div className="mt-10">
          <div className="min-w-[350px] md:w-[700px]  mt-5 flex justify-between items-center sm:gap-5 flex-col sm:flex-row sm:items-start">
            <EditableImage image={image} setImage={setImage} />
            <form
              onSubmit={saveMenuItem}
              className="flex flex-col gap-3 flex-grow w-full"
            >
              <div>
                <label
                  htmlFor="title"
                  className="m-0 p-0 text-gray-400 text-sm"
                >
                  Item name
                </label>
                <Input
                  type="text"
                  id="title"
                  className="w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="m-0 p-0 text-gray-400 text-sm"
                >
                  Description
                </label>
                <Input
                  type="text"
                  id="description"
                  className="w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="m-0 p-0 text-gray-400 text-sm"
                >
                  Category
                </label>
                <Input
                  type="text"
                  id="category"
                  className="w-full"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="m-0 p-0 text-gray-400 text-sm"
                >
                  Price
                </label>
                <Input
                  type="text"
                  id="price"
                  className="w-full"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <Button type="submit" className="rounded-lg">
                Save
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
