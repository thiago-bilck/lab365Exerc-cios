const express = require("express")
const app = express();
const router = require("./routes")

app.use(express.json())


app.use('/', router)


app.listen(3333, () => {
    console.log("Servidor ativo")
})
