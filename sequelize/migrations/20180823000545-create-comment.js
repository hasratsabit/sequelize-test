'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },
      post_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT,
        required: true
      },
      commenter_username: {
        type: Sequelize.STRING,
        required: true
      },
      commenter_email: {
        type: Sequelize.STRING,
        required: true
      },
      status: {
        type: Sequelize.ENUM,
        values: ['approved', 'rejected', 'in review']
  
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
    return queryInterface.dropTable('comments');
  }
};