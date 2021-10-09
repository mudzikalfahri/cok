const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String },
    ownerId: { type: String, required: true },
    role: { type: Array, required: true, default: [] },
    member: { type: Array, required: true, default: [] },
    desc: { type: String },
    game: { type: String, required: true, default: "" },
    slot: { type: Number, required: true, default: 4 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
