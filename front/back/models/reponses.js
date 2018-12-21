'use strict';
module.exports = (sequelize, DataTypes) => {
  const reponses = sequelize.define('reponses', {
    reponse: DataTypes.STRING,
    correct: DataTypes.BOOLEAN
  }, {});
  reponses.associate = function(models) {
    // associations can be defined here
  };
  return reponses;
};