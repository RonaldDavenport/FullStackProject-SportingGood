'use strict';


    module.exports = {
      up: async (queryInterface, Sequelize) => {
         await queryInterface.bulkInsert('Orders', [{
           userId:1,
           productID:1,
           status:"pending",
           createdAt: new Date(),
           updatedAt: new Date()
         }], {});
      }
    ,
  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(`Orders`,null, {});
  }
};
