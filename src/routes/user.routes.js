// Rotas → definem os endpoints da API.
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Definição das rotas
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;
