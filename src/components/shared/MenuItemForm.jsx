"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Button from "../ui/Button";
import Input from "../ui/Input";
import EditableImage from "./EditableImage";
import MenuItemPriceProps from "./MenuItemPriceProps";

export default function MenuItemForm({ menuItem }) {
  const router = useRouter();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [basePrice, setBasePrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState([]);
  const [ShowDeleteModal, setShowDeleteModal] = useState(false);

  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    setImage(menuItem?.image);
    setTitle(menuItem?.title);
    setDescription(menuItem?.description);
    setCategory(menuItem?.category);
    setBasePrice(menuItem?.basePrice);
    setSizes(menuItem?.sizes);
    setExtraIngredientPrices(menuItem?.extraIngredientPrices);

    fetch("/api/category")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, [menuItem]);

  const editMenuItem = async (e) => {
    e.preventDefault();
    const data = {
      image,
      title,
      description,
      category,
      basePrice,
      sizes,
      extraIngredientPrices,
    };
    const res = await fetch(`/api/menu-items/${menuItem._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("Menu Item updated successfully", {
        autoClose: 1200,
      });
      router.push("/menu-items");
    } else {
      toast.error("Something went wrong.", {
        autoClose: 1200,
      });
    }
  };

  const deleteMenuItem = async () => {
    const res = await fetch(`/api/menu-items/${menuItem._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      toast.success("Menu item delered successfully", {
        autoClose: 1200,
      });
      setShowDeleteModal(false);
      router.push("/menu-items");
    } else {
      toast.error("Something went wrong.", {
        autoClose: 1200,
      });
    }
  };

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
              <select
                name=""
                id=""
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full outline-none flex gap-2 border p-2 rounded-md"
              >
                {allCategories?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="basePrice"
                className="m-0 p-0 text-gray-400 text-sm"
              >
                Base Price
              </label>
              <Input
                id="basePrice"
                className="w-full"
                type="text"
                placeholder="Base Price"
                value={basePrice}
                onChange={(e) => setBasePrice(e.target.value)}
              />
            </div>
            <MenuItemPriceProps
              props={sizes}
              setProps={setSizes}
              name="Sizes"
              addLabel="Add item size"
            />
            <MenuItemPriceProps
              props={extraIngredientPrices}
              setProps={setExtraIngredientPrices}
              name="Extra ingredients"
              addLabel="Add ingredients prices"
            />
            <Button type="submit" className="rounded-lg">
              Edit
            </Button>
            <Button
              type="button"
              onClick={() => setShowDeleteModal(true)}
              className="rounded-lg border bg-transparent text-gray-700"
            >
              Delete this menu item
            </Button>
          </form>
          {ShowDeleteModal && (
            <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 flex items-center justify-center">
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
                  <Button className="rounded-lg" onClick={deleteMenuItem}>
                    Yes,Delete!
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
