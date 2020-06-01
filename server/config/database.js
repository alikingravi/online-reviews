const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME || 'onlinereviews',
    process.env.DB_USER || 'onlinereviews',
    process.env.DB_PASS || 'onlinereviews',
    {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: './onlinereviews.sqlite',
    }
);
