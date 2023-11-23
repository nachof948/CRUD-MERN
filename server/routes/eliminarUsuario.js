const express = require('express');
const router = express.Router();

const {eliminarUsuario} = require('../controllers/eliminarUsuario')

router.delete('/eliminarusuario/:id',eliminarUsuario);
module.exports = router; 