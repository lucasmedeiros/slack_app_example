const express = require("express");
const { hello } = require("../controllers/slack");

const routes = express.Router();

routes.post("/hello", hello);

module.exports = routes;
