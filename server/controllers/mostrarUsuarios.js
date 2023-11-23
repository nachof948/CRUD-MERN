const Usuario = require('../models/Usuario')

/* GET */
const mostrarUsuarios = async (req, res)=>{
    try{
        const usuarios = await Usuario.find()
        res.send(usuarios)
    } catch(err){
        res.status(404).json({message:err})
    }
}
module.exports = {mostrarUsuarios}
