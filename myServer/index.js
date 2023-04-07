const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();
const port = 3003;

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect("mongodb://localhost:27017").then(() => {
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
