const Usuario = require('../models/Usuario')


/* POST */
const agregarUsuario = async (req, res)=>{
    try{
        const {nombre, email, telefono} = req.body
        const nuevoUsuario = await Usuario.create({nombre, email, telefono})
        res.status(200).send(`Hola ${nombre} bienvenido/a a nuestra pagina!!`)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    agregarUsuario, 
}