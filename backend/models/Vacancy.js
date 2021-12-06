const mongoose = require("mongoose");

const VacancySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    position: { type: String, required: true },
    company: { type: String, required: true },
    img: { type: String },
    applicant: { type: Array, required: true, default: [] },
    regulation: { type: String, required: true },
    experience: { type: String, required: true },
    desc: { type: String },
    location: { type: String, required: true },
    deadline: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vacancy", VacancySchema);
