import FlyingButton from "react-flying-item";
import Button from "../ui/Button";

export default function AddToCartButton({
  image,
  basePrice,
  onClick,
  hasSizesOrExtras,
}) {
  
  if (!hasSizesOrExtras) {
    return (
      <div className="w-full flex justify-center items-center gap-1 font-semibold bg-primary text-gray-50 px-4 py-1.5 whitespace-nowrap rounded-full hover:opacity-80">
        <FlyingButton targetTop={"5%"} targetLeft={"95%"} src={image}>
          <div onClick={onClick}>Add to cart ${basePrice}</div>
        </FlyingButton>
      </div>
    );
  }

  return (
    <Button type="button" onClick={onClick} className="w-full">
      <span>Add to cart (from ${basePrice})</span>
    </Button>
  );
}
