"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Trash from "../ui/Trash";
import EditableImage from "./EditableImage";
import { useRouter } from "next/navigation";

export default function MenuItemForm({ menuItem }) {
  const router = useRouter();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sizeCount, setSizeCount] = useState(0);

  useEffect(() => {
    setImage(menuItem?.image);
    setTitle(menuItem?.title);
    setDescription(menuItem?.description);
    setCategory(menuItem?.category);
    setPrice(menuItem?.price);
  }, [menuItem]);

  const editMenuItem = async (e) => {
    e.preventDefault();
    const data = {
      image,
      title,
      description,
      category,
      price,
    };
    const res = await fetch(`/api/menu-items/${menuItem._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("Menu Item updated successfully");
      router.push("/menu-items");
    } else {
      toast.error("Something went wrong.");
    }
  };

  console.log(sizeCount);
  return (
    <>
      <div className="mt-10">
        <div className="min-w-[350px] md:w-[700px]  mt-5 flex justify-between items-center sm:gap-5 flex-col sm:flex-row sm:items-start">
          <EditableImage image={image} setImage={setImage} />
          <form
            onSubmit={editMenuItem}
            className="flex flex-col gap-3 flex-grow w-full"
          >
            <div>
              <label htmlFor="title" className="m-0 p-0 text-gray-400 text-sm">
                Item name
              </label>
              <Input
                type="text"
                id="title"
                placeholder="Item Name"
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
                className="w-full"
                id="description"
                type="text"
                placeholder="Description"
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
                className="w-full"
                id="category"
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price" className="m-0 p-0 text-gray-400 text-sm">
                Price
              </label>
              <Input
                id="price"
                className="w-full"
                type="text"
                placeholder="Base Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="border p-2 rounded-md">
              <p className="text-gray-400 mb-2">Sizes</p>
              {Array(sizeCount).map((item, index) => (
                <div key={index} className="flex items-end gap-2">
                  <div>
                    <label
                      htmlFor="price"
                      className="m-0 p-0 text-gray-400 text-sm"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      className="w-full"
                      type="text"
                      placeholder="Size Name"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="price"
                      className="m-0 p-0 text-gray-400 text-sm"
                    >
                      Extra prices
                    </label>
                    <Input
                      id="price"
                      className="w-full"
                      type="text"
                      placeholder="Base Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className="flex items-center justify-center border w-14 h-10 rounded-lg transition-all hover:bg-red-300"
                  >
                    <Trash />
                  </button>
                </div>
              ))}
              <button
                onClick={() => setSizeCount((prevCount) => prevCount + 1)}
                type="button"
                className="bg-gray-200 rounded-lg w-full font-bold p-2 my-2"
              >
                + Add item size
              </button>
            </div>
            <Button type="submit" className="rounded-lg">
              Edit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
