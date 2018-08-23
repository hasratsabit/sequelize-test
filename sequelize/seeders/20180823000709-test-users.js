'use strict';
const moment = require('moment');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('users', [
    {
      id: uuidv4(),
      username: 'leetest',
      role: 'user',
      created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
    },
    {
      id: uuidv4(),
      username: 'superman',
      role: 'admin',
      created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   const Op = Sequelize.Op
   return queryInterface.bulkDelete('users', {
     username: {
       [Op.in]: ['leetest', 'superman']
      }}, {})
  }
};
