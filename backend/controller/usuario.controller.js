const Usuario = require('../models/Usuario')

const cadastrar = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    res.status(200).json(valores)
}
const cadastrar2 = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    await Usuario.create(valores)

    res.status(200).json({message: "usuário Cadastrado!"})
}

module.exports = { cadastrar, cadastrar2 }