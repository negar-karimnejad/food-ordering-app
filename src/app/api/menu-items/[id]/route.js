import { NextResponse } from "next/server";
import { MenuItems } from "../../../../../model/MenuItems";
import { revalidatePath } from "next/cache";

export async function GET(_, res) {
  const { id: _id } = await res.params;

  const menuItem = await MenuItems.findById({ _id });

  return NextResponse.json(menuItem);
}

export async function PUT(req, res) {
  const data = await req.json();
  const { id: _id } = await res.params;
 console.log(data);
  const updatedMenuItem = await MenuItems.updateOne({ _id }, data);

  return NextResponse.json(updatedMenuItem);
}

export async function DELETE(_, res) {
  const { id: _id } = await res.params;

  await MenuItems.deleteOne({ _id });

  return NextResponse.json({ message: "Menu item deleted successfully" });
}
