const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connection = require("./utils/db");
const userRoute = require("./routes/userroute");
const expenseRoute = require("./routes/expenseroute");
dotenv.config({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.use("/api/user", userRoute);
app.use("/api/expense", expenseRoute);

app.listen(PORT, () => {
  connection();
  console.log(`Server running at port ${PORT}`);
});
