const express = require('express');
const router = express.Router();

const {editarUsuario} = require('../controllers/editarUsuario')

router.post('/obtenerdatos/:id', editarUsuario);
module.exports = router; 