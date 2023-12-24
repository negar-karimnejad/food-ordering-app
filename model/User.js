const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: false,
      validate: (pass) => {
        if (!pass.length || pass.length < 5) {
          new Error("password must be at least 5 characters");
        }
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
