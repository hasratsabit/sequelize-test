*  Run `npm install`
*  Create file `config/env/loc.env` to match `config/env/schema.env` and fill out (You can leave some blank like the http certs)
*  Modify `sequelize/config/config.json` to fill in your db information again for migrations and seeds
*  Run `node_modules/.bin/sequelize db:create`
*  Run `npm start` - This will create the tables on startup. If you run the sequelize migrations, the foreign key relationships will not be established
*  Run `node_modules/.bin/sequelize db:seed:all`

After these steps are done, you should have your database all setup and preloaded with test data
