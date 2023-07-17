const { Router } = require("express");
const { taskModel } = require("../models/taskModel");

const taskRouter = Router();

taskRouter.post("/addtask", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const newData = new taskModel(data);
    await newData.save();
    res.send({ msg: "Data has Been Updated", isCompleted: true });
  } catch (error) {
    res.send({ msg: error });
  }
});
taskRouter.get("/", async (req, res) => {
  try {
    const data = await taskModel.find();
    res.send(data);
  } catch (error) {
    res.send({ msg: error });
  }
});

module.exports = { taskRouter };
