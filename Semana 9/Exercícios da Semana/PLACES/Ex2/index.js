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

app.put('/places/:id', async (req,res) => {

    console.log(req.params.id);
    console.log(req.body);
    try {
        const placeInDatabase = await Place.findByPk(req.params.id)//esta é uma maneira melhor do que fazer Place.findOne({where: {id: req.params.id}})
   
        if(!placeInDatabase){
            return res
            .status(404)
            .json({message: 'ID não encontrado'})
            
        }

        placeInDatabase.name = req.body.name
        placeInDatabase.description = req.body.description
        placeInDatabase.contact = req.body.contact
        placeInDatabase.opening_hours = req.body.opening_hours
        placeInDatabase.latitud = req.body.latitud
        placeInDatabase.longitud = req.body.longitud
        //caso eu não atualize algum dado, o proprio sequelize entende que ele não foi alterado e deixa como estava, ao invés de dar um undefined

        await placeInDatabase.save()//update de tudo que foi alterado

        res.json(placeInDatabase)


    } catch (error) {
        
    }
})


app.listen(9999, () => {
    console.log("Servidor funcionando")
})