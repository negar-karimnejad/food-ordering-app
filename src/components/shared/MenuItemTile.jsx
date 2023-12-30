import Image from "next/image";
import Button from "../ui/Button";

export default function MenuItemTile({ menuItem, onAddToCart }) {
  const { image, title, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;

  return (
    <div className="bg-gray-200 rounded-lg p-5 flex flex-col items-center justify-center gap-4 shadow-lg transition-all hover:bg-gray-50">
      <Image src={image} width={150} height={150} alt="menu image" />
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="text-gray-700 line-clamp-3">{description}</p>
      <Button onClick={onAddToCart} className="w-full">
        Add to cart ${basePrice}
      </Button>
    </div>
  );
}
