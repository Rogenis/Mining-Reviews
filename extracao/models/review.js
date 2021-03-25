'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Review.init({
    reviewId: DataTypes.STRING,
    userName: DataTypes.STRING,
    userImage: DataTypes.STRING,
    content: DataTypes.STRING,
    score: DataTypes.INTEGER,
    thumbsUpCount: DataTypes.INTEGER,
    createdReview: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};