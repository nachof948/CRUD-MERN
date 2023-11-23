const express = require('express');
const router = express.Router();

const {agregarUsuario} = require('../controllers/agregarUsuario')

router.post('/',agregarUsuario);
module.exports = router; 