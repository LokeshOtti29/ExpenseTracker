const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connection = require("./utils/db");
const userRoute = require("./routes/userroute");

const path = require("path");
dotenv.config({});

const _dirname = path.resolve();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/api/user", userRoute);

app.listen(PORT, () => {
  connection();
  console.log(`Server running at port ${PORT}`);
});
