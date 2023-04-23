const express = require('express');
const bcrypt = require('bcryptjs')
const { Op, ValidationError } = require('sequelize')//importando operador OU do sequelize para verificar usuário existente ou não
const jwt = require('jsonwebtoken')

const connection = require('./src/database')
const log = require('./src/middlewares/log')
const app = express();
const Place = require("./src/models/place.js")
const User = require('./src/models/user')
const validateToken = require('./src/middlewares/validateToken')
const validateNewUser = require('./src/middlewares/validateNewUser')
const createPlace = require('./src/controllers/places/createPlace');
const findPlace = require('./src/controllers/places/findPlace');
const updatePlace = require('./src/controllers/places/updatePlace');
const deletePlace = require('./src/controllers/places/deletePlace');
const createUser = require('./src/controllers/users/createUser');
const sessionUser = require('./src/controllers/users/session');


app.use(express.json());//esta linha é obrigatória, pois ela que faz as trnsformações dos objetos para JSON.

app.use(log)

connection.authenticate();
connection.sync({alter: true}); //o camando alter faz com que as alterações feitas nos atributos sejam sincronizadas na hora com a tabela, não necessitando fazermos aqueles processos de de akter table


app.post('/places', validateToken, createPlace);

app.get('/places', validateToken, findPlace);

app.put('/places/:id', validateToken, updatePlace);

app.delete('/places/:id', validateToken, deletePlace);

app.post('/users', validateNewUser, createUser);


app.post('/sessions', sessionUser);

app.listen(9999, () => {
    console.log("Servidor funcionando")
})