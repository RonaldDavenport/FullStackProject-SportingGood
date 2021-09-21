'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [{
       firstname:"Ronald",
       lastname:"Davenport",
       username:"ron",
       password:"ron",
       email:"ron@gmail.com",
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users',null, {});
  }
};
