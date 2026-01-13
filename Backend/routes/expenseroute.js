const express = require("express");
const {
  addexpense,
  getexpense,
  updateexpense,
} = require("../Controller/expensecontroller");
const Authenticated = require("../Middleware/authentication");
const route = express.Router();

route.post("/addexpense", Authenticated, addexpense);
route.get("/allexpense", Authenticated, getexpense);
route.put("/updateexpense/:_id", Authenticated, updateexpense);
module.exports = route;
