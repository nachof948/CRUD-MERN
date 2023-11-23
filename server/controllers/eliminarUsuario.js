const Usuario = require('../models/Usuario')

const eliminarUsuario = async (req, res) => {
    const id = req.params.id
    try{
        const eliminarUsuario = await Usuario.findByIdAndDelete(id)
        res.send(eliminarUsuario)
    } catch(e){
        console.log(e)
    }
}

module.exports = {eliminarUsuario}