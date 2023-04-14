const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes");

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
