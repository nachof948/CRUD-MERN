const Usuario = require('../models/Usuario')

const actualizarUsuario = async (req, res)=>{
    const id = req.params.id
    const {nombre, email, telefono} = req.body
    try{
        const actualizar = await Usuario.findByIdAndUpdate(id,{ nombre, email, telefono})
        res.send('El usuario fue actualizado correctamente')
    }
    catch(err){
        console.log(err)
    }

}
module.exports = {actualizarUsuario}