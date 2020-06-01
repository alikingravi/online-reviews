const Sequelize = require("sequelize");
const db = require("../config/database");

const Product = db.define("product", {
  name: Sequelize.STRING,
  price: Sequelize.FLOAT,
  description: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  youtubeId: Sequelize.STRING,
});

module.exports = Product;
