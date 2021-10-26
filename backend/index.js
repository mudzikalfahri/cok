const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const vacancyRoute = require("./routes/vacancies");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const cors = require("cors");
dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/api/vacancies", vacancyRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(8000);
