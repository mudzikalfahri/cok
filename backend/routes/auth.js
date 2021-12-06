const router = require("express").Router();
const User = require("../models/User");
const Crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

//create a user
router.post("/register", async (req, res) => {
  const createdUser = new User({
    ...req.body,
    username: req.body.username,
    email: req.body.email,
    isCompany: req.body.isCompany,
    password: Crypto.AES.encrypt(
      req.body.password,
      process.env.CRYPT_SEC
    ).toString(),
  });
  try {
    const savedUser = await createdUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(401).json("Username or Email already taken");
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(401).json("Wrong Credentials");

    const decryptPassword = Crypto.AES.decrypt(
      user.password,
      process.env.CRYPT_SEC
    );

    const accPassword = decryptPassword.toString(Crypto.enc.Utf8);

    accPassword !== req.body.password &&
      res.status(401).json("Wrong Username or Password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username,
        isCompany: user.isCompany,
      },
      process.env.JWT_SEC,
      { expiresIn: "1d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ accessToken, ...others });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
