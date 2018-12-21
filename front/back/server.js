const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const models = require("./models");
const { questionRoute, todoRoute } = require("./router");

const server = express();
const port = process.env.PORT || 3001;

server.use(cors());
server.use(logger("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/", questionRoute);
server.use("/", todoRoute);

models.sequelize.sync().then(() => {
  server.listen(port);
  console.log(`Magic is happens on port ${port}`);
});
models.exports = server;
