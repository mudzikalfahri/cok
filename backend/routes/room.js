const router = require("express").Router();
const Room = require("../models/Room");

//create
router.post("/", async (req, res) => {
  const newRoom = new Room(req.body);
  try {
    const createdRoom = await newRoom.save();
    res.status(200).json(createdRoom);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room.ownerId === req.body.userId) {
      await room.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your room");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room.member.includes(req.body.userId)) {
      await room.updateOne({ $push: { member: req.body.userId } });
      res.status(200).json("you have joined the room");
    } else {
      await room.updateOne({ $pull: { member: req.body.userId } });
      res.status(200).json("you have left the room");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
