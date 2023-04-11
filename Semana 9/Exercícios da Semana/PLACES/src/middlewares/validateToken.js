const jwt = require('jsonwebtoken');

function validateToken(req, res, next){

    console.log(req.headers.authorization);
    const token = req.headers.authorization;

    if(!token || token === 'Bearer'){
        return res
        .status(405)
        .json({message: "Token não compatível"})
    }

    const jwtToken = token.slice(7);

    jwt.verify(jwtToken, "MINHA_CHAVE_SECRETA", (error, conteudoDoToken)=>{
        if(error){
            if(error.name === "TokenExpiredError"){
                return res
                .status(403)
                .json({message: "Token expirado"})
            }
            else if(error.name === 'JsonWebTokenError'){
                return res
                .status(403)
                .json({message: "Token inválido"})
            }
            else {
                return res.status(500).json({message: "Internal server error"})
            }
        }

        else{
            console.log(conteudoDoToken)
            req.body.userId = conteudoDoToken.indexOf
            next()
        }
    })
}

module.exports = validateToken;