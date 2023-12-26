import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { Category } from "../../../../../model/Category";
import connectDB from "../../../utils/db";

export async function PUT(req, res) {
  await connectDB();

  const { title } = await req.json();
  const { id: _id } = await res.params;

  const updatedCategory = await Category.updateOne({ _id }, { title });

  revalidatePath("/categories");
  return NextResponse.json(updatedCategory, { status: 200 });
}

export async function DELETE(_, res) {
  await connectDB();

  const { id } = await res.params;

  const deletedCategory = await Category.deleteOne({ _id: id });

  if (deletedCategory.deletedCount) {
    revalidatePath("/categories");
    return NextResponse.json({ message: "Category deleted successfully" });
  } else {
    return NextResponse.json({ message: "None of categorises deleted." });
  }
}
