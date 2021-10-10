const router = require("express").Router();
const Room = require("../models/Room");
const User = require("../models/User");
const { verifyToken } = require("./verify");

//get all rooms
router.get("/", async (req, res) => {
  try {
    const allRooms = await Room.find();
    res.status(200).json(allRooms);
  } catch (err) {
    res.status(400).json(err);
  }
});

//get room by id
router.get("/id/:id", async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    res.status(400).json(err);
  }
});

//get user's room
router.get("/profile/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userRoom = await Room.find({ ownerId: currentUser._id });
    res.status(200).json(userRoom);
  } catch (err) {
    res.status(400).json(err);
  }
});

//get room by game title
router.get("/game", async (req, res) => {
  try {
    const gameTitle = req.query.title;
    if (gameTitle) {
      const titleResult = await Room.find({ game: gameTitle });
      res.status(200).json(titleResult);
    }
  } catch (err) {
    res.status(401).json(err);
  }
});

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

//edit room
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room.ownerId === req.body.userId) {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        {
          $set: { ...req.body, member: [...room.member, ...req.body.member] },
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

//join or leave the room
router.post("/join/:id", verifyToken, async (req, res) => {
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
