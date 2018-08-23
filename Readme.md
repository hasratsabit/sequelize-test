*  Run `npm install`
*  Create file `config/env/loc.env` to match `config/env/schema.env` and fill out
*  Modify `sequelize/config/config.json` to fill in your db information again for migrations and seeds
*  Run `node_modules/.bin/sequelize db:create`
*  Run `node_modules/.bin/sequelize db:migrate`
*  Run `node_modules/.bin/sequelize db:seed:all`

After these steps are done, you should have your database all setup and preloaded with test data
