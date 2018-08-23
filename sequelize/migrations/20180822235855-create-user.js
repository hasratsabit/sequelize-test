'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        required: true
      },
      role: {
        type: Sequelize.ENUM,
        values: ['user', 'admin', 'disabled']
  
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:  Sequelize.DATE,
      deleted_at: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};