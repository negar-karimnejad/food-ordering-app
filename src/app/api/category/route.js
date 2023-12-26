import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { Category } from "../../../../model/Category";
import connectDB from "../../utils/db";

export async function GET() {
  await connectDB();
  const data = await Category.find({});
  return NextResponse.json(data);
}

export async function POST(req) {
  await connectDB();
  const { title } = await req.json();

  if (!title) {
    throw new Error("Title required");
  }

  const newCategory = await Category.create({ title });
  revalidatePath("/categories");

  return NextResponse.json(newCategory, { status: 201 });
}
