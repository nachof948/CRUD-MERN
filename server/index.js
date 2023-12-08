const express = require('express');
const app = express();
const mostrarUsuarios = require('./routes/mostrarUsuario');
const agregarUsuario = require('./routes/agregarUsuario');
const eliminarUsuario = require('./routes/eliminarUsuario');
const editarUsuario = require('./routes/editarUsuario');
const actualizarUsuario = require('./routes/actualizarUsuario');
const connectDB = require('./db/conexion');
const cors = require('cors');
require('dotenv').config();

/* PUERTO */
const PUERTO = process.env.PUERTO;

/* CONFIGURACIÓN DE CORS */
app.use(cors({
  origin: ["https://crud-mern-app-ocn8.onrender.com"],
}));

/* CONTROLAR FORMULARIO */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* DEFINICIÓN DE RUTAS */
app.use('/', mostrarUsuarios);
app.use('/', eliminarUsuario);
app.use('/', editarUsuario);
app.use('/', actualizarUsuario);
app.use('/agregarusuario', agregarUsuario);

app.get('/', (req, res) => {
  res.send('Welcome');
});

/* CONEXIÓN A LA BASE DE DATOS */
const iniciar = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PUERTO, () => {
      console.log(`Se inició el servidor en http://localhost:${PUERTO}`);
    });
  } catch (error) {
    console.log('Error al conectarse a la base de datos', error);
  }
};

iniciar();
