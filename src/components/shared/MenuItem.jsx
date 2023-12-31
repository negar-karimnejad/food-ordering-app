"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import FlyingButton from "react-flying-item";
import { CartContext } from "../../app/utils/AuthProvider";
import MenuItemTile from "../shared/MenuItemTile";
import Input from "../ui/Input";
import { toast } from "react-toastify";

export default function MenuItem(menuItem) {
  const { image, title, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;

  const [showAddCartModal, setShowAddCartModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes[0] || null);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const { addToCart } = useContext(CartContext);

  const handleToAddToCartButtonClick = async () => {
    const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;
    if (hasOptions && !showAddCartModal) {
      setShowAddCartModal(true);
      return;
    }

    addToCart(menuItem, selectedSize, selectedIngredient);
    toast.success("Added to cart", {
      autoClose: 1200,
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowAddCartModal(false);
  };

  const handleExtraThingClick = (e, ingredient) => {
    const checked = e.target.checked;
    if (checked) {
      setSelectedIngredient((prev) => [prev, ingredient]);
    } else {
      setSelectedIngredient((prev) => {
        return prev.filter((e) => e?.name !== ingredient.name);
      });
    }
  };

  let selectedPrice = basePrice;

  if (selectedSize) {
    selectedPrice += selectedSize.price;
  }
  if (selectedIngredient?.length) {
    for (const extra of selectedIngredient) {
      if (extra?.price) {
        selectedPrice += extra?.price;
      }
    }
  }

  return (
    <>
      <MenuItemTile
        menuItem={menuItem}
        onAddToCart={handleToAddToCartButtonClick}
      />
      {showAddCartModal && (
        <div
          className="flex items-center justify-center z-50 fixed left-0 top-0 w-screen h-screen bg-black/80"
          onClick={() => setShowAddCartModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[400px] max-h-[500px] p-5 rounded-3xl overflow-y-scroll"
          >
            <div className="flex flex-col items-center justify-center gap-5">
              <Image src={image} width={200} height={200} alt="menu image" />
              <h4 className="font-bold text-xl">{title}</h4>
              <p className="text-center text-gray-500">{description}</p>
              {sizes.length > 0 && (
                <>
                  <h4 className="font-medium">Pick your size</h4>
                  <div className="flex flex-col w-full gap-2 text-gray-600">
                    {sizes.map((size) => (
                      <label
                        htmlFor={size.name}
                        key={size._id}
                        className="flex gap-2 border p-2 rounded-md"
                      >
                        <input
                          type="radio"
                          name="pizza-size"
                          id={size.name}
                          onClick={() => setSelectedSize(size)}
                          checked={selectedSize?.name === size.name}
                          onChange={() => {}}
                        />
                        {size.name} ${basePrice + size.price}
                      </label>
                    ))}
                  </div>
                </>
              )}
              {extraIngredientPrices.length > 0 && (
                <>
                  <h4 className="font-medium">Any extras?</h4>
                  <div className="flex flex-col w-full gap-2 text-gray-600">
                    {extraIngredientPrices?.map((ingredient) => (
                      <label
                        key={ingredient._id}
                        className="flex gap-2 border p-2 rounded-md"
                      >
                        <Input
                          type="checkbox"
                          onChange={(e) => handleExtraThingClick(e, ingredient)}
                          checked={selectedIngredient
                            ?.map((e) => e?._id)
                            .includes(ingredient._id)}
                        />
                        {ingredient.name} +${ingredient.price}
                      </label>
                    ))}
                  </div>
                </>
              )}
              <div className="flex justify-center items-center gap-1 font-semibold bg-primary text-gray-50 px-4 py-1.5 whitespace-nowrap hover:opacity-80 w-full sticky bottom-2 rounded-lg">
                <FlyingButton targetTop={"5%"} targetLeft={"95%"} src={image}>
                  <div onClick={handleToAddToCartButtonClick}>
                    Add to cart ${selectedPrice}
                  </div>
                </FlyingButton>
              </div>
              <button
                onClick={() => setShowAddCartModal(false)}
                className="w-full bg-transparent border text-black p-1 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
