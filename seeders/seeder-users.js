"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "example@example.com",
        password: "123123123",
        firstName: "Pi",
        lastName: "Ty",
        address: "",
        phonenumber: "012332100",
        gender: 1,
        image: "abc.png",
        typeRole: "admin",
        keyRole: "R1",
        roleId: "123",
        positionId: "12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
