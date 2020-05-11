const express = require("express");
const slackRoutes = require("./slack");

const routes = express.Router();

routes.use("/slack", slackRoutes);

module.exports = routes;
