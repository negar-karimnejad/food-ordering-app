"use client";

import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "../../app/utils/AuthProvider";
import Button from "../ui/Button";
import MenuItemTile from "../shared/MenuItemTile";
import { toast } from "react-toastify";

export default function MenuItem(menuItem) {
  const { image, title, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;
  console.log(extraIngredientPrices);
  const [showAddCartModal, setShowAddCartModal] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleToAddToCartButtonClick = () => {
    if (sizes.length === 0 && extraIngredientPrices.length === 0) {
      addToCart(menuItem);
      toast.success("Added to cart!");
    } else {
      setShowAddCartModal(true);
    }
  };

  return (
    <>
      <MenuItemTile
        menuItem={menuItem}
        onAddToCart={handleToAddToCartButtonClick}
      />
      {showAddCartModal && (
        <div
          className="flex items-center justify-center z-50 fixed left-0 top-0 w-screen h-screen bg-black/20"
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
              <h4 className="font-medium">Pick your size</h4>
              <form className="flex flex-col w-full gap-2 text-gray-600">
                {sizes.length > 0 &&
                  sizes.map((size) => (
                    <div
                      key={size._id}
                      className="flex gap-2 border p-2 rounded-md"
                    >
                      <input type="radio" name="pizza-size" id="" />
                      <label htmlFor="">
                        {size.name} ${size.price}
                      </label>
                    </div>
                  ))}
              </form>
              <h4 className="font-medium">Any extras?</h4>
              <form className="flex flex-col w-full gap-2 text-gray-600">
                {extraIngredientPrices.length > 0 &&
                  extraIngredientPrices?.map((extra) => (
                    <div
                      key={extra._id}
                      className="flex gap-2 border p-2 rounded-md"
                    >
                      <input type="checkbox" name="extras" id="extras" />
                      <label htmlFor="extras">
                        {extra.name} +${extra.price}
                      </label>
                    </div>
                  ))}
              </form>
              <Button onClick={() => addToCart(menuItem)} className="w-full">
                Add to cart $12
              </Button>
              <button className="w-full bg-transparent border text-black p-1 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
