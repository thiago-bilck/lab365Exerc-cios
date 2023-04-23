const User = require('../../models/user');


async function sessionUser (req, res) {

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

}

module.exports = sessionUser;