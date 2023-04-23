const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: process.env.DIALECT_DATABASE, //qual banco vai se conectar
    host: process.env.HOST_DATABASE, //onde o banco se encontra
    username: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    port: process.env.PORT_DATABASE,
    database: process.env.NAME_DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }

})

module.exports = connection;