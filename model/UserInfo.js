const { Schema, default: mongoose } = require("mongoose");

const userInfoSchema = new Schema(
  {
    email: { type: String, required: true },
    street: { type: String },
    postalcode: { type: String },
    city: { type: String },
    country: { type: String },
    phone: { type: String },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserInfo =
  mongoose.models.UserInfo || mongoose.model("UserInfo", userInfoSchema);

export default UserInfo;
