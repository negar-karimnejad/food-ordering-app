import mongoose, { Schema } from "mongoose";

const MenuItemsSchema = new Schema(
  {
    image: { type: String },
    name: { type: String },
    description: { type: String },
    category: { type: String },
    price: { type: Number },
  },
  { timestamps: true }
);

const MenuItems =
  mongoose.models.MenuItems || mongoose.MenuItems("MenuItems", MenuItemsSchema);
export default MenuItems;
