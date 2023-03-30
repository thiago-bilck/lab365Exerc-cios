const Sequelize = require('sequelize');
const sequelize = new Sequelize('TESTE', 'postgres', 'bilck',{

dialect: 'postgres',
host: 'localhost',
port: '5432'
})

module.exports= sequelize;