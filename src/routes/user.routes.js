// Rotas → definem os endpoints da API.
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// ======== ROTAS PÚBLICAS (sem autenticação) ========
router.post('/register', userController.register);
router.post('/login', userController.login);

// ======== ROTAS PROTEGIDAS (exigem token JWT) ========
router.get('/profile', authMiddleware.protect, userController.getProfile);

module.exports = router;
