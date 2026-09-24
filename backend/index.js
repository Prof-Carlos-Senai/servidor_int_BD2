const express = require('express')
const app = express()
const cors = require('cors')

const hostname = 'localhost'
const PORT = 3000
const conn = require('./db/conn')

// ------------- middleware ------------------
app.use(express.urlencoded({exteded: true}))
app.use(express.json())
app.use(cors())
// -------------------------------------------


app.get('/', (req,res)=>{
    res.status(200).json({message: 'Aplicação Server Rodando!'})
})
// -------------------------------------------
conn.sync()
    .then(()=>{
        app.listen(PORT, hostname, ()=>{
            console.log(`Servidor rodando em ${hostname}:${PORT}`)
        })
    })
    .catch((err)=>{
        console.error('Erro de conexão com o banco de dados',err)
    })