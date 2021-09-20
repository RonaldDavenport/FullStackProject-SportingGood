'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      return queryInterface.addColumn(
        'Products',
        'OrderID',
        {
          type: Sequelize.INTEGER,
          references : {
            model : 'Orders',
            key: 'id',
  
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
  
        }
      )
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.removeColumn(
      'Products',
      'OrderID'
    )
  }
};
