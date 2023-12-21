import Image from "next/image";
import Link from "next/link";
import RightArrow from "../ui/RightArrow";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <div className="px-10 sm:px-24 flex items-center gap-5">
      <div className="flex flex-col flex-1 gap-5">
        <h2 className="font-extrabold text-5xl">
          Everything
          <br /> is better
          <br /> with a <span className="text-primary">Pizza</span>
        </h2>
        <p className="max-w-[400px] text-gray-600">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>
        <div className="flex items-center text-sm">
          <Button type="text">
            ORDER NOW <RightArrow />
          </Button>
          <Button type="text" className="bg-transparent text-gray-700">
            Learm more <RightArrow />
          </Button>
        </div>
      </div>
      <div className="flex-1 hidden md:flex">
        <Image src="/pizza.png" width={400} height={400} alt="pizza" />
      </div>
    </div>
  );
}
