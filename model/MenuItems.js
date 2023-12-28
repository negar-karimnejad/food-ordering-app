import mongoose, { Schema } from "mongoose";

const ExtraPriceSchema = new Schema({
  name: String,
  price: Number,
});

const MenuItemsSchema = new Schema(
  {
    image: { type: String },
    title: { type: String, required: true },
    description: { type: String },
    category: { type: mongoose.Types.ObjectId },
    basePrice: { type: Number },
    sizes: { type: [ExtraPriceSchema] },
    extraIngredientPrices: { type: [ExtraPriceSchema] },
  },
  { timestamps: true }
);

export const MenuItems =
  mongoose?.models?.MenuItems || mongoose.model("MenuItems", MenuItemsSchema);
