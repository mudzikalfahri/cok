const User = require("../models/User");
const { verifyTokenUser } = require("./verify");
const Crypto = require("crypto-js");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenUser, async (req, res) => {
  if (!req.body.password) res.status(401).json("please input yout password!");

  const dataUser = await User.findById(req.params.id);

  dataPassword = Crypto.AES.decrypt(
    dataUser.password,
    process.env.CRYPT_SEC
  ).toString(Crypto.enc.Utf8);

  if (dataPassword === req.body.password) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("invalid password!");
  }
});

router.delete("/:id", verifyTokenUser, async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.id);
    if (currentUser.username === req.body.username) {
      await currentUser.deleteOne();
      res.status(200).json("account has been deleted");
    } else {
      res.status(403).json("invalid credentials");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
