const Sequelize = require('sequelize');
const database = require('./db');
const User = database.define('usuário',{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },

    cpf:{
        type: Sequelize.STRING,
        allowNull: false
    },
    altura: Sequelize.DECIMAL,
    sobre: Sequelize.STRING

})

module.exports = User;