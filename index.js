const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { authentication } = require("./middlewares/authentication");
const path = require("path");
require("dotenv").config();

const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(authentication);
app.use(routes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist", "index.html"));
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
