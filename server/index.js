const express = require('express')
const app = express()
const mostrarUsuarios = require('./routes/mostrarUsuario')
const agregarUsuario = require('./routes/agregarUsuario')
const eliminarUsuario = require('./routes/eliminarUsuario')
const editarUsuario = require('./routes/editarUsuario')
const actualizarUsuario = require('./routes/actualizarUsuario')
const connectDB = require('./db/conexion')
require('dotenv').config()

/* PUERTO */
const PUERTO = process.env.PUERTO 

/* CONTROLAR FORMULARIO */
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', mostrarUsuarios)
app.use('/', eliminarUsuario)
app.use('/', editarUsuario)
app.use('/', actualizarUsuario)
app.use('/agregarusuario', agregarUsuario)


/* CONEXION A LA BASE DE DATOS */
const iniciar = async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(PUERTO,()=>{
            console.log(`Se inicio el servidor en http://localhost:${PUERTO}`)
        })
    }catch(error){
        console.log('Error al conectarse a la base de datos', error)
    }
}
iniciar()

