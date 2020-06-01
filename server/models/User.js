const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true,
    },
    password: Sequelize.STRING,
    admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = User;