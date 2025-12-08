const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  try {
    // pega o token do header authorization
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        message: "Token não fornecido"
      });
    }

    // verifica se o token é valido
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret-key');

    // armazena os dados do usuário na requisição
    req.user = decoded;

    // deixa a requisição proseguir
    next();
  } catch (error) {
    res.status(401).json({
      message: "Token inválido ou expirado"
    })
  }
}