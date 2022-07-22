require('dotenv').config();

module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: process.env.PASSWORD,
    PORT:process.env.MYSQL_PORT,
    DB: 'momosdb',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}