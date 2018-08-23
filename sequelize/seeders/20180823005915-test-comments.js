'use strict';
const {posts} = require('../../config/db');
const uuidv4 = require('uuid/v4');
const moment = require('moment');

const leetest = 'leetest';
const superman = 'superman';



module.exports = {
  async up(queryInterface, Sequelize) {
    let postData = await posts.findAll({
      limit: 2
    });

    let postIds = [];
    postData.map((post) => {
      postIds.push(post.dataValues.id);
    });

    return queryInterface.bulkInsert('comments', [
      {
        id: uuidv4(),
        post_id: postIds[0],
        content: 'I love it!',
        commenter_username: 'megafan',
        commenter_email: 'test@gmail.com',
        status: 'approved',
        created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
      },
      {
        id: uuidv4(),
        post_id: postIds[0],
        content: 'I hate it!',
        commenter_username: 'badfan',
        commenter_email: 'test@gmail.com',
        status: 'in review',
        created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
      },
      {
        id: uuidv4(),
        post_id: postIds[1],
        content: 'I disagree!',
        commenter_username: 'hater123',
        commenter_email: 'test@gmail.com',
        status: 'rejected',
        created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
      },
      {
        id: uuidv4(),
        post_id: postIds[1],
        content: 'Interesting....',
        commenter_username: 'inquisitor',
        commenter_email: 'test@gmail.com',
        status: 'approved',
        created_at: moment().format('YYYY-MM-DD[T]HH:mm:ss.SSSZ'),
      }], {});
  },

  async down(queryInterface, Sequelize) {
    //TODO: This really sucks
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('comments', {
      commenter_email: 'test@gmail.com'}, {})
  }
};
