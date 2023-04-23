const Place = require('../../models/place');

async function findPlace (req,res) {

    try {
        const places = await Place.findAll();
        return res.json(places);

    } catch (error) {
        res.status(500).json({message: 'Não foi possível concluir a operação'})
    }

}

module.exports = findPlace;