'use strict';
module.exports = (sequelize, DataTypes) => {
  const questions = sequelize.define('questions', {
    question: DataTypes.STRING
  }, {});
  questions.associate = function(models) {
    // associations can be defined here
  };
  return questions;
};