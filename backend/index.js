const express = require("express");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const bodyParser = require("body-parser");
const passport = require("passport");
require("./config/passport")(passport);

const app = express();
const jsonParser = bodyParser.json();
const port = 3000;

connectDB();
app.use(passport.initialize());
app.use(jsonParser);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.listen(port, () => {
  console.log("App listening on port: ", port);
});
