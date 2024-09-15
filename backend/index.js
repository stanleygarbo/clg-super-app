import express from "express";
import connectDB from "./config/db.js";
const app = express();
const port = 3000;

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(port, () => {
  console.log("App listening on port: ", port);
});
