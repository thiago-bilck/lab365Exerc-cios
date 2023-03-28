const express = require('express');
const router = express.Router();


router.post("/user", (req,res)=>{
    res.send("Usuário criado")
})

router.delete("/user", (req, res) =>{
    res.send("Usuário deletado")
})

module.exports = router;