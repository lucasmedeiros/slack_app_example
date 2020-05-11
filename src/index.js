const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

const SERVER_PORT = 5555;

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(routes)
  .listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
