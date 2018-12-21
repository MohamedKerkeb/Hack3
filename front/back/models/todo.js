"use strict";
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define(
    "todo",
    {
      todo: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
      notdone: DataTypes.BOOLEAN
    },
    {}
  );
  todo.associate = function(models) {
    // associations can be defined here
  };
  return todo;
};
