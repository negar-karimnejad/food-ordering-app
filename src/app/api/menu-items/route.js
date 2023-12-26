import { NextResponse } from "next/server";
import MenuItems from "../../../../model/MenuItems";
import connectDB from "../../../app/utils/db";

export async function POST(req) {
  await connectDB();
  const { image, name, description, category, price } = await req.json();

  const newMenuItem = await MenuItems.create({
    image,
    name,
    description,
    category,
    price,
  });
  return NextResponse.json(newMenuItem);
}
