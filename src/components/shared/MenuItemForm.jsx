"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import PageLoader from "../ui/PageLoader";
import EditableImage from "./EditableImage";

export default function MenuItemForm({ menuItem, editMenuItem }) {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setImage(menuItem?.image);
    setTitle(menuItem?.title);
    setDescription(menuItem?.description);
    setCategory(menuItem?.category);
    setPrice(menuItem?.price);
  }, [menuItem]);

  return (
    <>
      {menuItem ? (
        <div className="mt-10">
          <div className="min-w-[350px] md:w-[700px]  mt-5 flex justify-between items-center sm:gap-5 flex-col sm:flex-row sm:items-start">
            <EditableImage image={image} setImage={setImage} />
            <form
              onSubmit={editMenuItem}
              className="flex flex-col gap-3 flex-grow w-full"
            >
              <Input
                type="text"
                placeholder="Item Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Base Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <Button type="submit" className="rounded-lg">
                Edit
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <PageLoader />
      )}
    </>
  );
}
