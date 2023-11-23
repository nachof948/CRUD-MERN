const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:[true, 'Nombre del usuario']
    },
    email:{
        type:String,
        required:[true, 'Email del usuario']
    },
    telefono:{
        type:String,
        required:[true, 'Telefono del usuario']
    }
})
const Usuario = mongoose.model('usuario', usuarioSchema) 
module.exports = Usuario