const mongoose = require("mongoose");

const VacancySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String, required: true },
    postedBy: { type: String, required: true },
    applicant: { type: Array, required: true, default: [] },
    type: { type: Array, required: true, default: [] },
    desc: { type: String },
    location: { type: String, required: true },
    needed: { type: Number, required: true },
    deadline: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vacancy", VacancySchema);
