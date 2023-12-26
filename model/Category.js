import mongoose from "mongoose";
import { Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

export const Category =
  mongoose?.models?.Category || mongoose.model("Category", CategorySchema);
