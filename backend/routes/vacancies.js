const router = require("express").Router();
const Vacancy = require("../models/Vacancy");
const User = require("../models/User");
const { verifyToken } = require("./verify");

//get all Jobs
router.get("/", async (req, res) => {
  try {
    const allJobs = await Vacancy.find().sort({ timestamp: 1 });
    res.status(200).json(allJobs);
  } catch (err) {
    res.status(400).json(err);
  }
});

//get vacancy by id
router.get("/id/:id", async (req, res) => {
  try {
    const vacancy = await Vacancy.findById(req.params.id);
    res.status(200).json(vacancy);
  } catch (err) {
    res.status(400).json(err);
  }
});

//get vacancy by position
router.get("/search", async (req, res) => {
  try {
    const position = req.query.title;
    if (position) {
      const titleResult = await Vacancy.find({ position: position });
      res.status(200).json(titleResult);
    }
  } catch (err) {
    res.status(401).json(err);
  }
});

//create
router.post("/", verifyToken, async (req, res) => {
  const newVacancy = new Vacancy({
    ...req.body,
  });
  try {
    const createdVacancy = await newVacancy.save();
    res.status(200).json(createdVacancy);
  } catch (err) {
    res.status(500).json(err);
  }
});

//remove
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const vacancy = await Vacancy.findById(req.params.id);
    if (vacancy.postedBy === req.body.userId) {
      await vacancy.deleteOne();
      res.status(200).json("the vacancy has been deleted");
    } else {
      res.status(403).json("delete your own vacancy!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//edit vacancy
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const vacancy = await Vacancy.findById(req.params.id);
    if (vacancy.postedBy === req.body.userId) {
      const updatedVacancy = await Vacancy.findByIdAndUpdate(
        req.params.id,
        {
          $set: { ...req.body },
        },
        { new: true }
      );
      res.status(200).json(updatedVacancy);
    } else {
      res.status(403).json("edit your own vacancy!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//send job application
router.post("/submit/:id", verifyToken, async (req, res) => {
  try {
    const vacancy = await Vacancy.findById(req.params.id);
    if (!vacancy.applicant.includes(req.body.userId)) {
      await vacancy.updateOne({ $push: { applicant: req.body.userId } });
      res.status(200).json("job applicant has been sent");
    } else {
      await vacancy.updateOne({ $pull: { applicant: req.body.userId } });
      res.status(200).json("you have canceled your applicant");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
