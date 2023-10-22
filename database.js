const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_DIALECT } = process.env;

const Sequelize = require('sequelize');

//TODO add support for non relational dbs like mongo based on DB_DIALECT

const dbInstance = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    port: DB_PORT,
    dialect: DB_DIALECT
});;

module.exports = {
    db: dbInstance,
    testConnection: async () => {
        try {
            await dbInstance.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    sync: async () => {
        dbInstance.sync({ alter: true, match: /_test$/ });
    }
};