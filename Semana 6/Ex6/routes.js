const express = require('express');
const router = express.Router();


router.post("/user", (req,res)=>{
    
    const {nome, idade, cargo, senha} = req.body
   // res.send("Usuário criado")

   if (nome === undefined || idade === undefined || cargo === undefined || senha === undefined){
    res.status(406)
    return res.json({"mensagem": "Está faltando dados para concluir a operação"})
   }
    else if(idade<21){
        return res.json({"mensagem":"Usuário não possui idade suficiente"})
    }
    else {
        res.status(200)
        return res.json({"mensagem":"Criado com sucesso"})
    }
    console.log(nome)
})

router.delete("/user", (req, res) =>{
    const {id} = req.query

    //res.send("Usuário deletado")
    if (id === undefined || id === null || id ===""){
        res.status(406)
        return res.json({"mensagem":"Estão faltando dados para concluir a operação"})
    }
    else {
        res.status(200)
        return res.json({"mensagem":"Deletado com sucesso"})

    }
})

module.exports = router;