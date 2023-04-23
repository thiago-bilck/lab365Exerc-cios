const Place = require('../../models/place')

async function createPlace(req,res) {
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
}

module.exports = createPlace;