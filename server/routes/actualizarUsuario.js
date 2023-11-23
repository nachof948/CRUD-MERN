const express = require('express');
const router = express.Router();

const {actualizarUsuario} = require('../controllers/actualizarUsuario')

router.post('/actualizarusuario/:id',actualizarUsuario);
module.exports = router; 