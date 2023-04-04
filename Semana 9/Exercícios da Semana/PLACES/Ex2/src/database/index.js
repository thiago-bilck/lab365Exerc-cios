const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'bilck',
    port: '5432',
    database: 'places_trindade',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true, 
    }

})

module.exports = connection;