const express = require("express")
const servidor = express()

server.get("/", function(req, res) {
    return res.send("ok,cheguei aqui")
})

server.listen(3000)