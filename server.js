const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(400).json({
    message: "hello i am srinibha",
  });
});
