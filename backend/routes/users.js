const User = require("../models/User");
const { verifyTokenUser } = require("./verify");
const Crypto = require("crypto-js");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenUser, async (req, res) => {
  if (req.body.password) {
    req.body.password = Crypto.AES.encrypt(
      req.body.password,
      process.env.CRYPT_SEC
    ).toString();
  }

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
});
232;
