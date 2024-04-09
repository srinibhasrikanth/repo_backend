const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from Express backend!");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
module.exports = app;
