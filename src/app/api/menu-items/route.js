import { NextResponse } from "next/server";
import MenuItems from "../../../../model/MenuItems";
import connectDB from "../../../app/utils/db";

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  const { image, title, description, category, price } = data;
  const newMenuItem = await MenuItems.create({
    image,
    title,
    description,
    category,
    price,
  });
  console.log("newMenuItemmmmmmmmmmmmmmm", newMenuItem);
  return NextResponse.json({ newMenuItem });
}
