const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "sqlite",
    host: process.env.HOST,
    storage: "./onlinereviews.sqlite",
  }
);
