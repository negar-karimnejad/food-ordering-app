import mongoose, { Schema } from "mongoose";

const MenuItemsSchema = new Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    category: { type: String, required: true },
    price: { type: String },
  },
  { timestamps: true }
);

export const MenuItems =
  mongoose?.models?.MenuItems || mongoose.model("MenuItems", MenuItemsSchema);
