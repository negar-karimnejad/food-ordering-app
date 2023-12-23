const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    email: { type: String, required: false },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
