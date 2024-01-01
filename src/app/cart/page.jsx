"use client";

import { useProfile } from "@/hook/useProfile";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import SectionHeader from "../../components/ui/SectionHeader";
import Trash from "../../components/ui/Trash";
import { CartContext, cartProductPrice } from "../utils/AuthProvider";

export default function Cart() {
  const { data } = useProfile();

  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    setPhone(data.phone || "");
    setStreet(data.street || "");
    setPostalcode(data.postalcode || "");
    setCity(data.city || "");
    setCountry(data.country || "");
  }, [data]);

  const { cartProducts, removeCartProduct } = useContext(CartContext);

  let total = 0;
  for (const p of cartProducts) {
    total += cartProductPrice(p);
  }

  async function proceedToCheckout(e) {
    e.preventDefault();

    // const promise = new Promise((resolve, reject) => {
    //   fetch("/api/checkout", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       phone,
    //       street,
    //       postalcode,
    //       city,
    //       country,
    //       cartProducts,
    //     }),
    //   }).then(async (response) => {
    //     if (response.ok) {
    //       resolve();
    //       window.location = await response.json();
    //     } else {
    //       reject();
    //     }
    //   });
    // });

    // await toast.promise(promise, {
    //   loading: "Preparing your order...",
    //   success: "Redirecting to payment...",
    //   error: "Something went wrong... Please try again later",
    // });
  }

  return (
    <section className="px-10 sm:px-24 my-10">
      <SectionHeader mainTitle="cart" />
      <div className="flex flex-col lg:flex-row mt-10 gap-10">
        <div className="flex-1">
          {cartProducts.length === 0 ? (
            <p className="font-medium text-lg text-center">
              Your shopping cart is Empty😔.
            </p>
          ) : (
            cartProducts?.map((product, index) => (
              <div
                key={product._id}
                className="border border-white border-b-gray-100 flex items-center justify-between font-bold gap-5 p-2"
              >
                <div className="flex  items-center gap-5">
                  <Image
                    src={product.image}
                    alt="pizza"
                    width={90}
                    height={90}
                  />
                  <p className="flex flex-col">
                    <span className="font-bold">{product.title}</span>
                    {product.sizes?.length > 0 && (
                      <span className="text-sm text-gray-700">
                        Size:{product.size?.name}
                      </span>
                    )}
                    {product.extraIngredientPrices?.length > 0 && (
                      <>
                        {product.extraIngredientPrices.map((extra) => (
                          <span
                            key={extra._id}
                            className="text-sm text-gray-400"
                          >
                            {extra?.name} ${extra?.price}
                          </span>
                        ))}
                      </>
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-10">
                  <p className="font-bold">${cartProductPrice(product)}</p>
                  <button
                    type="button"
                    className="flex items-center justify-center border w-10 h-10 rounded-lg transition-all hover:bg-red-300"
                    onClick={() => removeCartProduct(index)}
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            ))
          )}
          {cartProducts.length !== 0 && (
            <div className="text-right font-bold p-3">
              <span className="text-gray-400">Subtotal: </span>
              <span className="text-gray-900">${total}</span>
            </div>
          )}
        </div>

        <div className="bg-gray-50 p-5 rounded-lg flex-1">
          <h4 className="font-semibold mb-2">Checkout</h4>
          <form
            onSubmit={proceedToCheckout}
            className="flex flex-col gap-3 flex-grow w-full"
          >
            <div>
              <label htmlFor="phone" className="m-0 p-0 text-gray-400 text-sm">
                Phone number
              </label>
              <Input
                className="w-full bg-transparent"
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="street" className="m-0 p-0 text-gray-400 text-sm">
                Street Address
              </label>
              <Input
                className="w-full bg-transparent"
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:gap-5">
              <div className="w-full bg-transparent">
                <label
                  htmlFor="postalcode"
                  className="m-0 p-0 text-gray-400 text-sm"
                >
                  Postal code
                </label>
                <Input
                  className="w-full bg-transparent"
                  type="text"
                  id="postalcode"
                  value={postalcode}
                  onChange={(e) => setPostalcode(e.target.value)}
                />
              </div>
              <div className="w-full bg-transparent">
                <label htmlFor="city" className="m-0 p-0 text-gray-400 text-sm">
                  City
                </label>
                <Input
                  className="w-full bg-transparent"
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="country"
                className="m-0 p-0 text-gray-400 text-sm"
              >
                Country
              </label>
              <Input
                className="w-full bg-transparent"
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <Button type="submit" className="rounded-lg">
              Pay ${total}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
