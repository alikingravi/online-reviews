"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = "qweasdf";
    // hash password
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash(password, salt);

    return queryInterface.bulkInsert("users", [
      {
        name: "Boss",
        email: "admin@test.com",
        password: pass,
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ali",
        email: "ali@test.com",
        password: pass,
        admin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joe",
        email: "nonadmin@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Billy",
        email: "billy@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jenny",
        email: "jenny@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sara",
        email: "sara@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jason",
        email: "jason@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stacy",
        email: "stacy@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hannes",
        email: "hannes@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alex",
        email: "alex@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diana",
        email: "diana@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Danny",
        email: "danny@test.com",
        password: pass,
        admin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
