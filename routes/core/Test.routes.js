const { Logger, Config } = require('microservice_core');

class TestRoutes {

  constructor(server) {
    Logger.trace('TestRoutes : constructor');
    this.server = server;
  }
  register(router) {
    Logger.trace('TestRoutes : register');
    router.get('/test', (req, res) => {
      res.json({message: 'Success'});
    });
    return router;
  }
}

module.exports = TestRoutes;