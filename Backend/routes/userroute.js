const express = require("express");
const { register, login } = require("../Controller/usercontroller");
const Authenticated = require("../Middleware/authentication");
const route = express.Router();

route.post("/register", register);
route.post("/login", login);

module.exports = route;
