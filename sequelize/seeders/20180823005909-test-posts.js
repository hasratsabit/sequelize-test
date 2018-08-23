'use strict';
const {users} = require('../../config/db');
const uuidv4 = require('uuid/v4');
const moment = require('moment');

const leetest = 'leetest';
const superman = 'superman';

module.exports = {
  async up(queryInterface, Sequelize) {
    let userData = await users.findAll({
      where: {username: [`${leetest}`,`${superman}`]},
      attributes: ['id', 'username']
    });

    let userMap = {};
    userData.map((user) => {
      userMap[user.dataValues.username] = user.dataValues.id;
    });

    return queryInterface.bulkInsert('posts', [
      {
        id: uuidv4(),
        user_id: userMap[`${leetest}`],
        content: `${leetest}'s first post`,
        created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
      },
      {
        id: uuidv4(),
        user_id: userMap[`${leetest}`],
        content: `${leetest}'s second post`,
        created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
      },
      {
        id: uuidv4(),
        user_id: userMap[`${superman}`],
        content: `${superman}'s first post`,
        created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
      },
      {
        id: uuidv4(),
        user_id: userMap[`${superman}`],
        content: `${superman}'s second post`,
        created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
      }], {});
  },

  async down(queryInterface, Sequelize) {
    let userData = await users.findAll({
      where: {username: [`${leetest}`,`${superman}`]},
      attributes: ['id']
    });

    let userIds = [];
    userData.map((user) => {
      userIds.push(user.dataValues.id);
    });

    const Op = Sequelize.Op
    return queryInterface.bulkDelete('posts', {
     user_id: {
       [Op.in]: userIds
      }}, {})
  }
};
