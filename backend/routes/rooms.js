const router = require("express").Router();
const Room = require("../models/Room");
const { verifyToken } = require("./verify");

//create
router.post("/", verifyToken, async (req, res) => {
  const newRoom = new Room(req.body);
  try {
    const createdRoom = await newRoom.save();
    res.status(200).json(createdRoom);
  } catch (err) {
    res.status(500).json(err);
  }
});

//remove
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room.ownerId === req.body.userId) {
      await room.deleteOne();
      res.status(200).json("the room has been deleted");
    } else {
      res.status(403).json("delete your own room!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room.ownerId === req.body.userId) {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } else {
      res.status(403).json("edit your own room!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//join the room
router.post("/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (
      !room.member.includes(req.body.userId) &&
      room.member.length < room.slot
    ) {
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
