const { Logger } = require('microservice_core');
const db = require('../../config/db');

class UsersRoutes {

  constructor(server) {
    Logger.trace('UsersRoutes : constructor');
    this.server = server;
  }

  register(router) {
    Logger.trace('UsersRoutes : register');
    router.get('/users', async (req, res) => {
      await db.sequelize.sync();
      let users = await db.users.findAll({
        include: [
          {
            model: db.posts,
            include: [
              {
                model: db.comments
              }
            ]
          }
        ]
      });
      res.json(users);
    });
    return router;
  }
}

module.exports = UsersRoutes;