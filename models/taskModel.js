const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    status: String,
    subtask: Array,
  },
  { versionKey: false }
);

const taskModel = mongoose.model("task", taskSchema);

module.exports = { taskModel };
