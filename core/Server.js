const path = require('path');
const { Logger, Config, ExpressServer, RouteLoader } = require('microservice_core');

const appRoutes = require.resolve('../config/core/app_routes.json');
const viewPath = path.join(__dirname, '../views');

class Server {

  async start(options = {}) {
    try {
      Config.load({ appRoutes, viewPath });
      ExpressServer.start(options);
      this.app = ExpressServer.app;
      this.router = ExpressServer.router;
      RouteLoader.load(this);
      this.initializeDB(this.app);
    } catch(err) {
      Logger.error(err);
      throw err;
    }
  }

  async initializeDB() {
    this.app.db = require('../config/db');
    await this.app.db.sequelize.sync();
  }
}

class ServerManager {
  static getInstance() {
    if (!ServerManager.instance) ServerManager.instance = new Server();
    return ServerManager.instance;
  }
}

module.exports = ServerManager;
