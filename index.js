const express = require("express");
const { connection } = require("./configs/db");
const app = express();
var cors = require("cors");
const { taskRouter } = require("./routes/taskRoute");

app.use(express.json());
app.use(cors());

app.use("/", taskRouter);

app.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Server is Running Port Number ${process.env.PORT}`);
});
