const User = require('../../models/user');

async function createUser (req,res) {
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
}

module.exports = createUser;