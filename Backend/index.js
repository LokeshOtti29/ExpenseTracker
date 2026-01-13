const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./utils/db");

dotenv.config({});

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connection();
  console.log(`Server running at port ${PORT}`);
});
