const { Logger, Config } = require('microservice_core');

class TestRoutes {

  constructor(server) {
    Logger.trace('TestRoutes : constructor');
    this.server = server;
  }
  register(router) {
    Logger.trace('TestRoutes : register');
    router.get('/test', (req, res) => {
      console.log(Config.env.DATABASE_DIALECT);
      res.json({message: 'Success'});
    });
    return router;
  }
}

module.exports = TestRoutes;