'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reviewId: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      userImage: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      thumbsUpCount: {
        type: Sequelize.INTEGER
      },
      createdReview: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reviews');
  }
};