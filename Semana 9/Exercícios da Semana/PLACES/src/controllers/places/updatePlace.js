const Place = require('../../models/place')

async function updatePlace(req,res) {

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
}

module.exports = updatePlace;