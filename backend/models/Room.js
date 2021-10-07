const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String },
    ownerId: { type: String },
    role: { type: Array, required: true },
    member: { type: Array, required: true },
    desc: { type: String },
    game: { type: String, required: true },
    isFull: { type: Boolean, default: false },
    slot: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
