const express = require("express");
const models = require("../models");

const todoRoute = express.Router();

todoRoute.route("/").get((req, res) => {
  models.todo.findAll().then(todo => {
    res.send(todo);
  });
});

module.exports = todoRoute;
