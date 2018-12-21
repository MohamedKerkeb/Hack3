const express = require("express");
const Sequelize = require("sequelize");
const models = require("../models");

const questionRoute = express.Router();

questionRoute.route("/").get((req, res) => {
  models.questions
    .findAll({
      order: Sequelize.literal("RANDOM()"),
      limit: 1
    })
    .then(question => {
      res.send(question);
    });
});

module.exports = questionRoute;
