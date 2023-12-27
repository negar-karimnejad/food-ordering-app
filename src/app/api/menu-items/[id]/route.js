import { NextResponse } from "next/server";
import { MenuItems } from "../../../../../model/MenuItems";

export async function GET(_, res) {
  const { id: _id } = await res.params;

  const menuItem = await MenuItems.findById({ _id });

  return NextResponse.json(menuItem);
}
