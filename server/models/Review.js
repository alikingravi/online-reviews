const Sequelize = require("sequelize");
const db = require("../config/database");

const Review = db.define("review", {
  userId: Sequelize.INTEGER,
  productId: Sequelize.INTEGER,
  title: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  reviewtext: Sequelize.TEXT,
  recommend: Sequelize.BOOLEAN,
});

module.exports = Review;
