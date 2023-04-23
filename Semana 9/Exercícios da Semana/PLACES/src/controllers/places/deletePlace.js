const Place = require('../../models/place');

async function deletePlace(req,res) {

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

}

module.exports = deletePlace;