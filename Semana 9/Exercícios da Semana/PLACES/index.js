const express = require('express');
const bcrypt = require('bcryptjs')
const { Op, ValidationError } = require('sequelize')//importando operador OU do sequelize para verificar usuário existente ou não
const jwt = require('jsonwebtoken')

const connection = require('./src/database')
const app = express();
const Place = require("./src/models/place.js")
const User = require('./src/models/user')

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

app.delete('/places/:id', async (req,res) => {

    console.log(req.params)

    if(!req.params.id){
        return res
        .status(406)
        .json({message: 'id não encontrado'})
    }


    const placeInDatabase = await Place.findByPk(req.params.id)
   
        if(!placeInDatabase){
            return res
            .status(404)
            .json({message: 'ID não encontrado'})
            
        }

    //neste caso não criamos uma variável para armazenar a opção delete pois como o mesmo já diz, queremos deletar o dado
    await Place.destroy({
        where: {
            id: req.params.id,
        }
    })

    res.status(200).json({message: 'deletado com sucesso'})

})

app.post('/users', async (req,res) => {
    try{
        const userInDatabase = await User.findOne({
            where: { 
                [Op.or]: [
                {email: req.body.email},
                {username: req.body.username}
                ]
            }
        })

        if(userInDatabase){
            return res
            .status(409)
            .json({message: "Já existe um usuário com este email ou username"})
        }

        const hash = await bcrypt.hash(req.body.password, 10)

        const newUser = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: hash,
        }

        const user = await User.create(newUser);
        const {password, ...rest} = user.toJSON();

        res.status(201).json(rest)
    }

    catch (error) {
        console.error(error)
        if(error instanceof ValidationError){
            res.status(400).json({message: "A senha deve conter no mínimo 8 caracteres"})
        }
        else {
        res.status(500).json({message: "Infelizmente algum erro aconteceu"})
    }
    }
})


app.post('/sessions', async (req, res) => {

    try {
        
        const { username, password} = req.body//desestruturando o body

        const userInDatabase = await User.findOne({
            where: { 
                username
            }
        }
            )

        if(!userInDatabase){
            return res.status(404).json({message: "Usuário não existe"})
        }

        const validPassword = await bcrypt.compare(req.body.password, userInDatabase.password);

        if(!validPassword){
            return res
            .status(404)
            .json({message: "Senha incorreta"})
        }

        const token = jwt.sign(
            {
                id: userInDatabase.id

            },
            "MINHA_CHAVE_SECRETA",

            {
                expiresIn:"1h"
            }
        )

        res.json({user: userInDatabase, token: token})
    


    } catch (error) {
        res.status(500).json({message: "Não foi possível processar sua solicitação"})
        console.log(error)
    }

})

app.listen(9999, () => {
    console.log("Servidor funcionando")
})