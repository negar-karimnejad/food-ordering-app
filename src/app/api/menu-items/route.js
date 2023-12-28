import { NextResponse } from "next/server";
import { MenuItems } from "../../../../model/MenuItems";
import connectDB from "../../../app/utils/db";
import { revalidatePath } from "next/cache";

export async function GET() {
  await connectDB();
  const data = await MenuItems.find({});
  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();
  const data = await req.json();
  console.log(data);
  const newMenuItem = await MenuItems.create(data);
  revalidatePath("/menu-items/new");

  return NextResponse.json({ newMenuItem });
}
