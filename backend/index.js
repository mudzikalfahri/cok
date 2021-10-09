const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const roomRoute = require("./routes/rooms");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use("/api/rooms", roomRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8000);
