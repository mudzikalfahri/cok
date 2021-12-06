const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    location: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImg: { type: String, default: "" },
    vacancies: { type: Array },
    bio: { type: String, default: "" },
    isCompany: { type: Boolean, default: false },
    profession: { type: String },
    company: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
