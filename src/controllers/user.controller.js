// Controllers → recebem requisições e chamam os serviços.
const userService = require('../services/user.service');

// =================== AUTENTICAÇÃO ===================

exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Validação básica
    if (!email || !password || !name) {
      return res.status(400).json({
        message: 'Email, senha e nome são obrigatórios'
      });
    }

    const user = await userService.register(email, password, name);

    res.status(201).json({
      message: 'Usuário registrado com sucesso',
      user
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validação básica
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email e senha são obrigatórios'
      });
    }

    const result = await userService.login(email, password);

    res.status(200).json({
      message: 'Login realizado com sucesso',
      ...result
    });
  } catch (error) {
    res.status(401).json({
      message: error.message
    });
  }
};

exports.getProfile = (req, res) => {
  try {
    const user = userService.getUserById(req.user.id);
    res.json({
      message: 'Perfil do usuário',
      user
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};