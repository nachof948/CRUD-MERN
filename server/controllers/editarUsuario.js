const Usuario = require('../models/Usuario')

const editarUsuario = async (req, res)=>{
    const id = req.params.id
    try{
        const usuario = await Usuario.findById(id)
        res.send(usuario)
    }catch(e){
        console.log(e)
    }
}
module.exports = {editarUsuario}