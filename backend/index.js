const express = require('express')
const app = express()
const cors = require('cors')

const hostname = 'localhost'
const PORT = 3000
const conn = require('./db/conn')

const usuarioController = require('./controller/usuario.controller')

// ------------- middleware ------------------
app.use(express.urlencoded({exteded: true}))
app.use(express.json())
app.use(cors())
// -------------------------------------------

// ---------- Rotas ---------------

app.post('/usuario', usuarioController.cadastrar)
app.post('/usuario2', usuarioController.cadastrar2)



app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação Server Rodando!'})
})
// ---------------- Server ------------------------
conn.sync()
    .then(()=>{
        app.listen(PORT, hostname, ()=>{
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err)=>{
        console.error('Erro de conexão com o banco de dados',err)
    })