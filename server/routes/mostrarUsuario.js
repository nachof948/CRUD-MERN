const express = require('express');
const router = express.Router();

const {mostrarUsuarios}= require('../controllers/mostrarUsuarios')

router.get('/usuarios',mostrarUsuarios);

module.exports = router