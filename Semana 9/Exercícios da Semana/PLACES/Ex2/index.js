const express = require('express');
const connection = require('./src/database')
const app = express();
const Place = require("./src/models/place.js")

app.use(express.json());//esta linha é obrigatória, pois ela que faz as trnsformações dos objetos para JSON.


connection.authenticate();
connection.sync({alter: true}); //o camando alter faz com que as alterações feitas nos atributos sejam sincronizadas na hora com a tabela, não necessitando fazermos aqueles processos de de akter table


app.post('/places', async (req,res) => {
    try {
        const data = {
            name: req.body.name,
            contact: req.body.contact,
            opening_hours: req.body.opening_hours,
            description: req.body.description,
            latitud: req.body.latitud,
            longitud: req.body.longitud,
        }

        const place = await Place.create(data)

        res.status(201).json(place)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Não foi possível concluir a operação'})
    }
})

app.get('/places', async (req,res) => {

    try {
        const places = await Place.findAll();
        return res.json(places);

    } catch (error) {
        res.status(500).json({message: 'Não foi possível concluir a operação'})
    }

})


app.listen(9999, () => {
    console.log("Servidor funcionando")
})