import React from "react";
import Button from "../ui/Button";

export default function AddToCartButtom({
  basePrice,
  onClick,
  hasSizesOrExtras,
}) {
  return (
    <Button onClick={onClick} className="w-full">
      {hasSizesOrExtras ? (
        <span>Add to cart (from ${basePrice})</span>
      ) : (
        <span>Add to cart ${basePrice}</span>
      )}
    </Button>
  );
}
